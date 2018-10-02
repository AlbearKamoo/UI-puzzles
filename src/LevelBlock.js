import React from 'react';

export default class LevelBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { heading, title, index } = this.props.level;
    return (
      <div className='block-container'>
        <div className='center-contents'>{heading}</div>
        <div className='number-wrapper center-contents'>
          <div className='number-display'>{index + 1}</div>
        </div>
        <div className='center-contents'>{title}</div>
      </div>
    )
  }
}
