import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Leagues from './containers/Leagues/reducer';
import Players from './containers/Ranking/reducer';
import CreatePlayer from './containers/AddPlayer/reducer';
import Games from './containers/Games/reducer';

const rootReducer = combineReducers({
  leagues: Leagues,
  players: Players,
  playerCreation: CreatePlayer,
  games: Games,
  routing: routerReducer,
});

export default rootReducer;
