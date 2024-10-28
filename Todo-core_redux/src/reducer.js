import todoReducers from "./features/todos/todosSlice";
import filterReducers from "./features/filters/filtersSlice";
import { combineReducers } from 'redux';

// combining muliple slice reducer into a single root reducer function for and application

export function rootreducer(state = {}, action) {
  //  return an new object for root state
  return {
    // the value of state,todos is whatever todoReducer returning
    todos: todoReducers(state.todos, action),
    fitlers: filterReducers(state.fitlers, action)
    //and value for state.filters is whatever fitlerReducer is returning
  }
}
// it accept an object and include every slice reducers passed to it and return root reducer function and build state object passed to it.
export const rootReducer = combineReducers({
  todos: todoReducers,
  filters: filterReducers
});