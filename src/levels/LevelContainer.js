import React from 'react';
import { inject, observer } from 'mobx-react';

import WinStateModal from '../component-lib/WinStateModal';

import BackArrow from '../assets/back-arrow.svg';

import winStateFunctions from './win-states.js'

@inject('RoutingStore', 'LevelStore')
@observer
export default class LevelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.returnToIndex = this.returnToIndex.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (winStateFunctions[this.props.levelIndex](this.props.levelState)) {
      this.props.LevelStore.setWinState(this.props.levelIndex)
    }
  }

  returnToIndex(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.RoutingStore.push('/');
  }

  render() {
    const didWin = this.props.LevelStore.winStates[this.props.levelIndex];

    return (
      <div>
        <div className={'back-button'} onClick={this.returnToIndex}>
          <BackArrow  className={'back-arrow'}/>
        </div>
        {this.props.children}
        {didWin && <WinStateModal handleSubmit={this.returnToIndex} />}
      </div>
    )
  }
}
