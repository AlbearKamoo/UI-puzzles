import React from 'react';
import { inject, observer } from 'mobx-react';

import '../styles.css'

@inject('RoutingStore')
@observer
export default class LevelBlock extends React.Component {
  constructor(props) {
    super(props);

    this.selectLevel = this.selectLevel.bind(this);
  }

  selectLevel() {
    this.props.RoutingStore.push('level-' + (this.props.level.index + 1));
  }

  render() {
    const { heading, title, index } = this.props.level;
    return (
      <div className='block-container' onClick={this.selectLevel}>
        <div className='center-contents'>{heading}</div>
        <div className='number-wrapper center-contents'>
          <div className='number-display'>{index + 1}</div>
        </div>
        <div className='center-contents'>{title}</div>
      </div>
    )
  }
}
