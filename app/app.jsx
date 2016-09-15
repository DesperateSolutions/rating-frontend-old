/* global document, $ */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import useScroll from 'react-router-scroll';

import Navbar from './components/Navbar';
import AddGame from './containers/AddGame';
import Leagues from './containers/Leagues';
import Ranking from './containers/Ranking';
import Games from './containers/Games';
import AddPlayer from './containers/AddPlayer';
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

const store = configureStore();
store.runSaga(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('#slide-out li').click(() => {
      $('.button-collapse').sideNav('hide');
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AddGame} />
        <Route path="game" component={AddGame} />
        <Route path="addplayer" component={AddPlayer} />
        <Route path="games" component={Games} />
        <Route path="ranking" component={Ranking} />
        <Route path="leagues" component={Leagues} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
