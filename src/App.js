import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Col } from './Grid';

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

        <Grid margin={10} columns={12} configs={{
          xs: '12|12|12|12',
          sm: '12|12|6|6',
          md: '6|6|6|6',
          lg: '4|4|4|12',
          xl: '3|3|3|3',
        }}>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Grid>

      </Wrapper>
    );
  }
}

export default App;
