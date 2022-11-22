import { combineReducers } from 'redux';
import { SET_FILTER, SET_MOVIES } from '../actions/actions';

// reducers receive an action with a type and arguments, and modify the state(store) //////////
function visibilityFilter(state = '', action) {
  switch(action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch(action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function moviesApp(state = '', action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    movies: movies(state.movies, action)
  }
}