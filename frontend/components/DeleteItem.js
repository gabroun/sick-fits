import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

import { ALL_ITEMS_QUERY} from './Items'

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`
class DeleteItem extends React.Component {
  update = (cache, payload) => {
    // read from the cache for the items we want
    const data = cache.readQuery({query: ALL_ITEMS_QUERY})

    data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id)

    // write back to the cache
    cache.writeQuery({query: ALL_ITEMS_QUERY, data})
  }
  render() {
    return (
    <Mutation mutation={DELETE_ITEM_MUTATION} variables={{
      id: this.props.id
    }}
    update={this.update}>
      {(deleteItem, {error}) => {
        return (
          <button onClick={() => {
            if(confirm('are you sure you want to delete this')) {
              deleteItem()
            }
          }}>{this.props.children}</button>
        );
      }}
    </Mutation>
    )
  }
}

export default DeleteItem