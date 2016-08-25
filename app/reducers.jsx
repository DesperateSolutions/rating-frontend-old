import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Leagues from './containers/Leagues/reducer';

const rootReducer = combineReducers({
  leagues: Leagues,
  routing: routerReducer,
});

export default rootReducer;
