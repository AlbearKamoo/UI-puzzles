import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import LevelIndex from './LevelIndex';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';

@inject('RoutingStore')
@observer
export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, history } = this.props.RoutingStore;

    return (
      <Switch location={location}>
        <Route exact path="/" component={LevelIndex}/>
        <Route exact path="/level-1" component={Level1} />
        <Route exact path="/level-2" component={Level2} />
      </Switch>
    )
  }
}
