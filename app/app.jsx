/* global document */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import useScroll from 'react-router-scroll';

import Navbar from './components/Navbar';
import Leagues from './containers/Leagues';
import configureStore from './store';
import rootSaga from './sagas';

require('../node_modules/jquery/dist/jquery.min');
require('../node_modules/materialize-css/dist/css/materialize.min.css');
require('../node_modules/materialize-css/dist/js/materialize.min');
require('./css/app.css');

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

function Hei() {
  return (
    <h5>Test til andre test komponenter er oppe</h5>
  );
}

const store = configureStore();
store.runSaga(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

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
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Hei} />
        <Route path="game" component={App} />
        <Route path="addplayer" component={App} />
        <Route path="games" component={App} />
        <Route path="ranking" component={App} />
        <Route path="leagues" component={Leagues} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
