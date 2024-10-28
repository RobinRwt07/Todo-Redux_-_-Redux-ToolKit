import { middleWare } from "./exampleAddOn/middleware";
import { rootReducer } from "./reducer";
import { applyMiddleware, createStore } from "redux";

const preloadedState = {
  todos: [
    // { id: 0, text: 'Learn React', completed: true },
    // { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  ],
  filters: {
    status: 'all',
    colors: []
  }
}

const enhancer = applyMiddleware(middleWare);

export const store = createStore(rootReducer, preloadedState, enhancer);