import { observable, action } from 'mobx';

import levels from '../level_data.json';

class LevelStore {
  @observable winStates = [];

  constructor(levelCount) {
    this.initializeWinStates(levelCount)
  }

  @action
  initializeWinStates(levelCount) {
    this.winStates = new Array(levelCount).fill(0);
  }

  @action
  setWinState(levelIndex) {
    this.winStates[levelIndex] = 1;
  }
}

const store = new LevelStore(levels.length);

export default store;
