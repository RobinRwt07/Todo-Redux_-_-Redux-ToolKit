import todoReducers from "./features/todos/todosSlice";
import filterReducers from "./features/filters/filtersSlice";
import { combineReducers } from 'redux';

export function rootreducer(state = {}, action) {
  return {
    todos: todoReducers(state.todos, action),
    fitlers: filterReducers(state.fitlers, action)
  }
}

// combine multiple slice reducer
export const rootReducer = combineReducers({
  todos: todoReducers,
  filters: filterReducers
});