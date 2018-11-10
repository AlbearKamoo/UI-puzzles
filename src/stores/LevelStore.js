import { observable, action } from 'mobx';

class LevelStore {
  @observable winStates = [];

  @action
  initializeWinStates(levelCount) {
    this.winStates = new Array(levelCount).fill(0);
  }

  @action
  setWinState(levelIndex) {
    this.winStates[levelIndex] = 1;
    console.log(this.winStates);
  }
}

const store = new LevelStore();

export default store;
