import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import {
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton
} from './Buttons';

const stories = storiesOf('Button')

stories.addDecorator(withKnobs);

stories
  .addWithInfo('DefaultButton', `The very nice 'default' button`, () => (<DefaultButton>DefaultButton</DefaultButton>))
  .addWithInfo('PrimaryButton', '', () => (<PrimaryButton>PrimaryButton</PrimaryButton>))
  .addWithInfo('SuccessButton', '', () => (<SuccessButton>SuccessButton</SuccessButton>))
  .addWithInfo('InfoButton', '', () => (<InfoButton>InfoButton</InfoButton>))
  .addWithInfo('WarningButton', '', () => (<WarningButton>WarningButton</WarningButton>))
  .addWithInfo('DangerButton', 'Should be used with **destructive** operations', () => {
    const lightness = number('Lightness', 0);
    return <DangerButton {...{ lightness: lightness / 10}} >DangerButton</DangerButton>
  });
