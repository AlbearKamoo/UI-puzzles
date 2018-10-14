import React from 'react';
import { inject, observer } from 'mobx-react';

import WinStateModal from '../component-lib/WinStateModal';

import winStateFunctions from './win-states.js'

@inject('RoutingStore')
@observer
export default class LevelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winState: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.winState) {
      if (winStateFunctions[this.props.levelIndex](this.props.levelState)) {
        this.setState({ winState: true});
      }
    }
  }

  handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.RoutingStore.push('/');
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.state.winState && <WinStateModal handleSubmit={this.handleSubmit} />}
      </div>
    )
  }
}
