import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@kadira/storybook';

import Input, { darkInputTheme } from './Input';

storiesOf('Input')
  .addWithInfo('Input', `Default styled' button`, () => (<Input type="text" value="test input"/>))
  .addWithInfo('Dark Input', 'dark theme', () => (<ThemeProvider theme={darkInputTheme}><Input type="text" value="test input"/></ThemeProvider>));
