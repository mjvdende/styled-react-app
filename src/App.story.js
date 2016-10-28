import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';

import { mount } from "enzyme";
// import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect';

import {
  storiesOf,
  action,
  describe,
  it,
  specs,
  beforeEach,
  before,
  after,
  afterEach,
  xdescribe,
  fit,
  xit
} from "../.storybook/facade";

import App from './App';

storiesOf('App', module)
  .add('Default', () => {
    const story = <App />;

    specs(() => describe('Default', () => {
      it('Should have the Hello World label', () => {
        let output = mount(story);
        expect(output.text()).toContain('Welcome');
      });
    }));

    return story;
  });
