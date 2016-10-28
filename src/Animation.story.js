import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Animation from './Animation';

storiesOf('Animation', module)
  .add('DangerButton', () => (
    <Animation />
  ));
