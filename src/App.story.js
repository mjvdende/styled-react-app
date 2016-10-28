import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from './App';

storiesOf('App', module)
  .add('Default', () => (
    <App />
  ));
