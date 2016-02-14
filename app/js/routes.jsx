import { Router, browserHistory } from 'react-router';
import React from 'react';

import AddGame from './components/AddGame';
import CreatePlayer from './components/CreatePlayer';
import Game from './components/Game';
import GamesList from './components/GamesList';
import Navbar from './components/Navbar';
import Player from './components/Player';
import PlayerList from './components/PlayerList';

import App from './App';

let Route = Router.Route;
let Default = Router.DefaultRoute;
let NotFound = Router.NotFoundRoute;

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
);