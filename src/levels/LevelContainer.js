import React from 'react';
import { inject, observer } from 'mobx-react';

import winStateFunctions from './win-states.js'

@inject('RoutingStore')
@observer
export default class LevelContainer extends React.Component {
  componentDidUpdate() {
    if (winStateFunctions[this.props.levelIndex](this.props.levelState)) {
      this.props.RoutingStore.push('/')
    }
  }

  render() {
    return this.props.children
  }
}
