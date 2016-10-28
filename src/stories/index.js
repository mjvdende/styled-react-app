import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';

import {
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton
} from '../Buttons';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('DefaultButton', () => (<DefaultButton>DefaultButton</DefaultButton>))
  .add('PrimaryButton', () => (<PrimaryButton>PrimaryButton</PrimaryButton>))
  .add('SuccessButton', () => (<SuccessButton>SuccessButton</SuccessButton>))
  .add('InfoButton', () => (<InfoButton>InfoButton</InfoButton>))
  .add('WarningButton', () => (<WarningButton>WarningButton</WarningButton>))
  .add('DangerButton', () => (<DangerButton>DangerButton</DangerButton>));
