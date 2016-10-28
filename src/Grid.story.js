import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import { Grid, Col } from './Grid';

const stories = storiesOf('Grid')

stories.addDecorator(withKnobs);

stories
  .add('Cool', () => {
    const margin = number('Margin', 10);
    const columns = number('Columns', 12);
    const configs = {
      xs: '12|12|12|12',
      sm: '12|12|6|6',
      md: '6|6|6|6',
      lg: '4|4|4|12',
      xl: '3|3|3|3',
    };
    return (
      <Grid {...{ columns, margin, configs }} >
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Grid>
    );
  });
