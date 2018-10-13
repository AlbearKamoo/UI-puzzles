import React from 'react';
import { inject, observer } from 'mobx-react';

import winStateFunctions from './win-states.js'

import AvatarImage from '../assets/avatar.svg';

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

  componentDidUpdate() {
    let state = { blockColor: getRgbString(this.state)}
    if (winStateFunctions[1](state)) {
      this.props.RoutingStore.push('/')
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const blockColor = getRgbString(this.state);
    return (
        <div className={"level-container center-contents"}>
          <div className={"level-2-stage"}>
            <div className={"slider-container"}>
              <input
                max="255"
                min="0"
                step="51"
                type="range"
                name="red"
                onChange={this.handleChange}
                value={this.state.red}
                ></input>
              <input
                max="255"
                min="0"
                step="51"
                type="range"
                name="green"
                onChange={this.handleChange}
                value={this.state.green}
                ></input>
              <input
                max="255"
                min="0"
                step="51"
                type="range"
                name="blue"
                onChange={this.handleChange}
                value={this.state.blue}
                ></input>
            </div>
            <div
              className={"goal-block"}
              style={{backgroundColor: blockColor}}>
            </div>
            <div>
              <div className={"goal-block"}>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
