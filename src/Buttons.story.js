import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton
} from './Buttons';

storiesOf('Button')
  .addWithInfo('DefaultButton', `The very nice 'default' button`, () => (<DefaultButton>DefaultButton</DefaultButton>))
  .addWithInfo('PrimaryButton', '', () => (<PrimaryButton>PrimaryButton</PrimaryButton>))
  .addWithInfo('SuccessButton', '', () => (<SuccessButton>SuccessButton</SuccessButton>))
  .addWithInfo('InfoButton', '', () => (<InfoButton>InfoButton</InfoButton>))
  .addWithInfo('WarningButton', '', () => (<WarningButton>WarningButton</WarningButton>))
  .addWithInfo('DangerButton', 'Should be used with **destructive** operations', () => (<DangerButton>DangerButton</DangerButton>));
