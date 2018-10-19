import React from 'react';
import { inject, observer } from 'mobx-react';

import LevelContainer from './LevelContainer';
import ColorSlider from '../component-lib/ColorSlider';

import './styles/level-styles.css';
import './styles/level2.css';
import '../styles.css';

function getRgbString(stateObj) {
  const { red, green, blue } = stateObj;
  return `rgb(${red}, ${green}, ${blue})`
}

@inject('RoutingStore')
@observer
export default class Level2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, attribute) {
    this.setState({ [attribute]: value })
  }

  render() {
    const blockColor = getRgbString(this.state);

    return (
      <LevelContainer levelIndex={1} levelState={{ blockColor }} >
        <div className={'level-container center-contents'}>
          <div className={'level-2-stage'}>
            <div className={'sliders-container'}>
              <ColorSlider
                max='255'
                min='0'
                step='51'
                attribute='red'
                color='red'
                onChange={this.handleChange}
                value={this.state.red}
                />
              <ColorSlider
                max='255'
                min='0'
                step='51'
                attribute='green'
                color='green'
                onChange={this.handleChange}
                value={this.state.green}
                />
              <ColorSlider
                max='255'
                min='0'
                step='51'
                attribute='blue'
                color='blue'
                onChange={this.handleChange}
                value={this.state.blue}
                />
            </div>
            <div
              className={'goal-block'}
              style={{backgroundColor: blockColor}}>
            </div>
            <div>
              <div className={'goal-block'}>
              </div>
            </div>
          </div>
        </div>
      </LevelContainer>
    )
  }
}
