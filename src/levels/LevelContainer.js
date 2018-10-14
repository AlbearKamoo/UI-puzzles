import React from 'react';
import { inject, observer } from 'mobx-react';

import WinStateModal from '../component-lib/WinStateModal';

import BackArrow from '../assets/back-arrow.svg';

import winStateFunctions from './win-states.js'

@inject('RoutingStore')
@observer
export default class LevelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winState: false,
    }

    this.returnToIndex = this.returnToIndex.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.winState) {
      if (winStateFunctions[this.props.levelIndex](this.props.levelState)) {
        this.setState({ winState: true});
      }
    }
  }

  returnToIndex(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.RoutingStore.push('/');
  }

  render() {
    return (
      <div>
        <div className={'back-button'} onClick={this.returnToIndex}>
          <BackArrow  className={'back-arrow'}/>
        </div>
        {this.props.children}
        {this.state.winState && <WinStateModal handleSubmit={this.returnToIndex} />}
      </div>
    )
  }
}
