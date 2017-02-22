import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import posts from 'wordpress-query-posts/lib/state';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  posts,
  routing: routerReducer
});

export default rootReducer;
