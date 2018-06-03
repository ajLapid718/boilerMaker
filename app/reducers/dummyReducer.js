import { GET_EVERYTHING, GET_ONE_THING } from '../actions/action-creators.js';
import { combineReducers } from 'redux';

function itemsReducer(state = [], action) {
  switch (action.type) {
    case GET_EVERYTHING:
      return {...state, items: action.payload};
    default:
      return state;
  }
};

function selectedItemReducer(state = {}, action) {
  switch (action.type) {
    case GET_ONE_THING:
      return {...state, selectedItem: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: itemsReducer,
  item: selectedItemReducer
});

export default rootReducer;
