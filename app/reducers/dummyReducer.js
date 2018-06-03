import { GET_EVERYTHING, GET_ONE_THING } from '../actions/action-creators.js';

const initialState = {
  items: [],
  selectedItem: {}
}

export function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVERYTHING:
      return {...state, items: action.payload};
    case GET_ONE_THING:
      return {...state, selectedItem: action.payload};
    default:
      return state;
  }
}
