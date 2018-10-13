import React from 'react';
import { inject, observer } from 'mobx-react';

import winStateFunctions from './win-states.js'

import AvatarImage from '../assets/avatar.svg';

import './styles/level-styles.css';
import './styles/level2.css'
import '../styles.css'

export default class Level2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidUpdate() {
    if (winStateFunctions[1](this.state)) {
      this.props.RoutingStore.push('/')
    }
  }

  render() {
    return (
        <div className={"level-container center-contents"}>
          <div>
            <div>
              <input
                max="255"
                min="0"
                step="51"
                type="range"
                ></input>
              <input
                max="255"
                min="0"
                step="51"
                type="range"
                ></input>
              <input
                max="255"
                min="0"
                step="51"
                type="range"
                ></input>
            </div>
            <div
              className={"goal-block"}
              style={{backgroundColor: this.state.blockColor}}>
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
