import React from 'react';
import Router from 'react-router';

import LevelStore from './stores/LevelStore';

import LevelBlock from './component-lib/LevelBlock';

import levels from './level_data.json';

export default class LevelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    LevelStore.initializeWinStates(levels.length);
  }

  render() {
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
