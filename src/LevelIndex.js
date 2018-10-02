import React from 'react';

import LevelBlock from './LevelBlock';

import levels from './level_data.json';

export default class LevelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(levels);
    return (
      <div className='index-container row'>
        {levels.map((level) =>
          <LevelBlock level={{...level}} />
        )}
      </div>
    )
  }
}
