import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.bgColor};
  border: 0px solid black;
  border-bottom: 2px solid ${props => props.theme.mainColor};
  border-radius: 5px;
  outline: none;

  &:hover {
    color: ${props => props.theme.textColorHover};
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export const darkInputTheme = {
  mainColor: 'orange',
  bgColor: '#333',
  textColor: 'white',
  textColorHover: 'yellow',
};

Input.defaultProps = {
  theme: {
    mainColor: 'lightblue',
    bgColor: 'white',
    textColor: 'black',
    textColorHover: '#333',
  }
};

export default Input;
