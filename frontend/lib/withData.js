import ApolloClient from 'apollo-boost';
import withApollo from 'next-with-apollo';

import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          // destructure cache from client (apollo client)
          toggleCart(_, variables, { cache }) {
            // read the cartOpen val from cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });

            // write the cartOpen state to opposite
            const data = {
              data: { cartOpen: !cartOpen },
            };

            cache.writeData(data);

            return data;
          },
        },
      },
      defaults: {
        cartOpen: true,
      },
    },
  });
}

//we export withApollo and give it a function to create a client
export default withApollo(createClient);
