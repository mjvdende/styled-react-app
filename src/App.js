import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;
const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;
const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
