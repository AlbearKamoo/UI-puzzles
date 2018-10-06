import React from 'react';

export default class Level1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div>
            <img src='../assets/avatar.svg'/>
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
