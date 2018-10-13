import React from 'react';
import { inject, observer } from 'mobx-react';

import winStateFunctions from './win-states.js'

import AvatarImage from '../assets/avatar.svg';

import './styles/level-styles.css';
import './styles/level1.css';
import '../styles.css';

@inject('RoutingStore')
@observer
export default class Level1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    if (winStateFunctions[0](this.state)) {
      this.props.RoutingStore.push('/')
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
        <div className={"level-container center-contents"}>
          <div className={"level-1-stage center-contents"}>
            <div>
              <AvatarImage className={"avatar"}/>
            </div>
            <div className={"inputs-wrapper"}>
              <div className={"input-container"}>
                <div>
                  Email:
                </div>
                <input
                  className={"input"}
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  type="text"></input>
              </div>
              <div className={"input-container"}>
                <div>
                  Password:
                </div>
                <input
                  className={"input"}
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  type="password"></input>
              </div>
            </div>
          </div>
        </div>
    )
  }

}
