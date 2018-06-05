import { FETCH_EVENTS } from '../actions/eventBrites';

const INITIAL_STATE = { all: [] };  

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return { ...state, all: action.payload.data.events };
  }
  return state;
};