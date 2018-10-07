import React from 'react';

import AvatarImage from '../assets/avatar.svg';

export default class Level1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div>
            <AvatarImage />
          </div>
          <div>
            Email:
            <input type="text"></input>
          </div>
            Password:
            <input type="password"></input>
        </div>
    )
  }

}
