import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Leagues from './containers/Leagues/reducer';
import Players from './containers/Ranking/reducer';
import CreatePlayer from './containers/AddPlayer/reducer';
import Games from './containers/Games/reducer';
import AddGame from './containers/AddGame/reducer';

const rootReducer = combineReducers({
  leagues: Leagues,
  players: Players,
  playerCreation: CreatePlayer,
  games: Games,
  addGame: AddGame,
  routing: routerReducer,
});

export default rootReducer;
