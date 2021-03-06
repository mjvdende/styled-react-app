import { PropTypes } from 'react';
import styled from 'styled-components';
import Color from 'color-js';

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
`;

export const DefaultButton = styled(Button)`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
`;

export const PrimaryButton = styled(Button)`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
`;

export const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
`;

export const InfoButton = styled(Button)`
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
`;

export const WarningButton = styled(Button)`
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
`;

export const DangerButton = styled(Button)`
  color: #fff;
  background-color: ${({ lightness = 0 }) => Color("#d9534f").lightenByRatio(lightness)};
  border-color: #d43f3a;
`;

DangerButton.propTypes = {
  lightness: PropTypes.number,
}
