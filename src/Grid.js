import React from 'react';
import styled from 'styled-components';

const breakpoints = {
  xs: '(max-width: 400px)',
  sm: '(min-width: 401px) and (max-width: 520px)',
  md: '(min-width: 521px) and (max-width: 720px)',
  lg: '(min-width: 721px) and (max-width: 980px)',
  xl: '(min-width: 981px)',
};

const Col = styled.div`
  display: inline-block;
  background-color: deepskyblue;
  line-height: 1;
  letter-spacing: 0;
  box-sizing: border-box;
  padding: 18px;
  position: relative;
  &:hover {
    background-color: skyblue;
  }
`;

const Container = styled.div`
  display: block;
  position: relative;
  line-height: 0;
  letter-spacing: -3px;
  ${({margin}) => `
    margin-left: -${margin / 2}px;
    margin-right: -${margin / 2}px;
  `}

  ${props => Object.keys(props.configs).map(key => `
    @media ${breakpoints[key]} {
      ${props.configs[key].split('|').map((item, index) => `
        & > *:nth-child(${index+1}) {
          margin: ${props.margin / 2}px;
          top: -${props.margin / 2}px;
          width: calc(${(100/props.columns)/(100/item)*100}% - ${props.margin}px);
        }
      `)}
    }
  `)}
  &:after {
    content: ".";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
    margin-top: -${props => props.margin}px;
  }
`;

const Grid = (props) => {
  const { margin = 10, configs, columns = 12 } = props;
  return (
    <Container {...{ margin, configs, columns }}>
      {props.children}
    </Container>
  )
};


export { Grid };
export { Col };

// <Grid margin={10} columns={12} configs={{
//   xs: '12|12|12|12',
//   sm: '12|12|6|6',
//   md: '6|6|6|6',
//   lg: '4|4|4|12',
//   xl: '3|3|3|3',
// }}>
//   <Col></Col>
//   <Col></Col>
//   <Col></Col>
//   <Col></Col>
// </Grid>

// is this an API that's any good?
// <Grid margin={10} columns={12} configs={{
//   xs|sm|md|lg: '12|12|12|12',
//   xl: '3|3|3|3',
// }}>
//   <Col></Col>
//   <Col></Col>
//   <Col></Col>
//   <Col></Col>
// </Grid>
