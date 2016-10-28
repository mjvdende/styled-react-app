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
  min-height: 50px;
  background-color: deepskyblue;
`;

const Container = styled.div`
  display: block;
  margin: -${props => props.margin / 2}px;
  ${props => Object.keys(props.configs).map(key => `
    @media ${breakpoints[key]} {
      ${props.configs[key].split('|').map((item, index) => `
        & > *:nth-child(${index+1}) {
          margin: ${props.margin / 2}px
          width: calc(${(100/props.columns)/(100/item)*100}% - ${props.margin}px);
        }
      `)}
    }
  `)}
`;

const Grid = (props) => {
  const { margin = 10, configs, columns = 12 } = props;
  return (
    <Container {...{ margin, configs, columns }}>
      {props.children}
    </Container>
  )
};


export {Grid};
export {Col};

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
