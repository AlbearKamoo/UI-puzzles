import React from 'react';
import Router from 'react-router';

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
            <LevelBlock
              history={history}
              key={level.index}
              level={{...level}} />
          )}
      </div>
    )
  }
}
