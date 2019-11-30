import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import styled from 'styled-components';

const StyledContainer = styled.div`
  .frame {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 5px solid white;
    padding: 20px;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    width: 60%;
    margin: 0 auto;
    min-width: 320px;
    border-radius: 5px;
    transition: all 0.5s ease;
    height: 278px;
    &.frame-long {
      height: 335px;
    }
  }
  .scope {
    position: relative;
  }
  .links {
    padding: 0;
    margin: 0;
    li {
      padding: 10px 10px 0 10px;
      font-size: 18px;
      display: inline;
      text-align: left;
      text-transform: uppercase;
      &.active {
        a {
          color: #393939;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
        }
      }
    }
    a {
      color: #39393969;
      text-decoration: none;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  }

  .form-signup,
  .form-signin {
    display: none;
    transition: all 0.5s ease;
    &.active {
      transition: opacity 0.5s ease, transform 0.5s ease,
        -webkit-transform 0.5s ease;
      position: absolute;
      top: 0;
      width: 100%;
      display: block;
    }
  }
`;
class SignupPage extends React.Component {
  state = {
    signin: true,
    signup: false,
  };

  render() {
    return (
      <StyledContainer>
        <div className={this.state.signin ? 'frame' : 'frame frame-long'}>
          <div className="nav">
            <ul className="links">
              <li
                className={this.state.signin ? 'signin active' : 'signin'}
                onClick={() => this.setState({ signin: true, signup: false })}
              >
                <a className="btn">Sign in</a>
              </li>
              <li
                className={this.state.signup ? 'signup active' : 'signup'}
                onClick={() => this.setState({ signin: false, signup: true })}
              >
                <a className="btn">Sign up</a>
              </li>
            </ul>
          </div>
          <div className="scope">
            <div
              className={
                this.state.signin ? 'form-signin active' : 'form-signin'
              }
            >
              <Signin />
            </div>
            <div
              className={
                this.state.signup ? 'form-signup active' : 'form-signup'
              }
            >
              <Signup />
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
}

export default SignupPage;
