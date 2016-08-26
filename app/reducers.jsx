import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Leagues from './containers/Leagues/reducer';
import Players from './containers/Ranking/reducer';

const rootReducer = combineReducers({
  leagues: Leagues,
  players: Players,
  routing: routerReducer,
});

export default rootReducer;
