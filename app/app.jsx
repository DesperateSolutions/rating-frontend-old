/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';

require('../node_modules/jquery/dist/jquery.min');
require('../node_modules/materialize-css/dist/css/materialize.min.css');
require('../node_modules/materialize-css/dist/js/materialize.min');
require('./css/app.css');

const propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

function Hei() {
  return (
    <h5>Test til andre test komponenter er oppe</h5>
  );
}

function App(props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

App.propTypes = propTypes;

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Hei} />
      <Route path="game" component={App} />
      <Route path="addplayer" component={App} />
      <Route path="games" component={App} />
      <Route path="ranking" component={App} />
      <Route path="leagues" component={App} />
    </Route>
  </Router>
), document.getElementById('app'));
