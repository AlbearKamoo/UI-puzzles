import React from 'react';

import './ColorSlider.css';

export default class ColorSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }

    this.thumbOffset = 90;
    if (props.thumbWidth || props.sliderWidth) {
      let thumb = props.thumbWidth || 10;
      let slider = props.sliderWidth || 100;
      this.thumbOffset = slider - thumb;
    }

    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, currState) {
    if (nextProps.value && nextProps.value !== currState.value) {
      return { value: nextProps.value };
    }
    return null;
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value, this.props.attribute);
  }

  render() {
    const { color, min, max } = this.props;
    const value = this.state.value;
    const offset = Math.max(0, Math.min((value - min) / (max - min), 1)) * this.thumbOffset;

    let colorTrackStyle = {};
    if (this.props.color) colorTrackStyle.background = `linear-gradient(90deg, black, ${this.props.color})`;

    return (
      <div className={'slider-container'}>
        <div className={'slider-track'} style={colorTrackStyle}/>
        <div className={'slider-thumb'} style={{ left: offset + 'px' }}/>
        <input
          type="range"
          className={'slider-input'}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
