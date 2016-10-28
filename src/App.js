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
  margin: 0;
  padding: 1em;
`;

const Section = styled.section`
  background: orangered
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

        <Section>
          <Intro>
            Grid with 4 in different configurations
          </Intro>
          <Grid margin={10} columns={12} configs={{
            xs: '12|12|12|12',
            sm: '12|12|6|6',
            md: '6|6|6|6',
            lg: '4|4|4|12',
            xl: '3|3|3|3',
          }}>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col>4</Col>
          </Grid>
        </Section>

        <Intro>
          Grid with 1
        </Intro>
        <Grid margin={10} columns={1} configs={{
          xs: '1',
          sm: '1',
          md: '1',
          lg: '1',
          xl: '1',
        }}>
          <Col>1</Col>
        </Grid>

        <Intro>
          Grid with 2 static
        </Intro>
        <Grid margin={10} columns={2} configs={{
          xs: '1|1',
          sm: '1|1',
          md: '1|1',
          lg: '1|1',
          xl: '1|1',
        }}>
        <Col>1</Col>
        <Col>2</Col>
      </Grid>

      </Wrapper>
    );
  }
}

export default App;
