import React from 'react';

import AvatarImage from '../assets/avatar.svg';

import './level-styles.css';
import '../styles.css'

export default class Level1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={"level-container center-contents"}>
          <div >
            <AvatarImage className={"avatar"}/>
          </div>
          <div className={"input-container"}>
            <div>
              Email:
            </div>
            <input type="text"></input>
          </div>
          <div className={"input-container"}>
            <div>
              Password:
            </div>
            <input type="password"></input>
          </div>
        </div>
    )
  }

}
