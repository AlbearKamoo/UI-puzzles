import React from 'react';
import { inject, observer } from 'mobx-react';

import LevelContainer from './LevelContainer';

import './styles/level-styles.css';
import './styles/level3.css';
import '../styles.css';

const BOX_MOVES = {
  left: [[1, 1, 0], [1, 1, 0]],
  middle: [[0, 1, 1], [0, 1, 0]],
  right: [[1, 0, 1], [1, 1, 1]]
}

@inject('RoutingStore')
@observer
export default class Level3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false,
      middle: false,
      right: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.checked === true ? 0 : 1;
    const moves = BOX_MOVES[e.target.name][value];
    let newState = Object.assign({}, this.state);
    if (moves[0]) newState.left = !newState.left;
    if (moves[1]) newState.middle = !newState.middle;
    if (moves[2]) newState.right = !newState.right;
    this.setState(newState);
  }

  render() {
    return (
      <LevelContainer levelIndex={2} levelState={this.state}>
        <div className={"level-container center-contents"}>
          <div>
              <input
                className={"puzzle-checkbox " + (this.state.left ? "checked" : "")}
                type="checkbox"
                name="left"
                onChange={this.handleChange}
                checked={this.state.left}
                ></input>
              <input
                className={"puzzle-checkbox " + (this.state.middle ? "checked" : "")}
                type="checkbox"
                name="middle"
                onChange={this.handleChange}
                checked={this.state.middle}
                ></input>
              <input
                className={"puzzle-checkbox " + (this.state.right ? "checked" : "")}
                type="checkbox"
                name="right"
                onChange={this.handleChange}
                checked={this.state.right}
                ></input>
          </div>
        </div>
      </LevelContainer>
    )
  }
}
