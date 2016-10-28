import React from 'react';
import { DangerButton } from './Buttons';
import tweenState from 'react-tween-state';

const minTween = -0.5;
const maxTween = 0.2;

const Animation = React.createClass({
  mixins: [tweenState.Mixin],
  getInitialState: function() {
    return { lightness: 0 };
  },
  tween() {
    this.tweenState('lightness', {
      easing: tweenState.easingTypes.easeInOutQuad,
      duration: 500,
      startValue: minTween,
      endValue: this.state.lightness === minTween ? maxTween : minTween,
      onEnd: this.tween
    });
  },
  componentDidMount() {
    this.tween();
  },
  render: function() {
    const { lightness } = this.state;
    return <DangerButton {...{ lightness: this.getTweeningValue('lightness') }}>DangerButton</DangerButton>;
  }
});

export default Animation;
