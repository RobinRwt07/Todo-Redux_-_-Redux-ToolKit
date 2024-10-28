import { middleWare } from "./exampleAddOn/middleware";
import { rootReducer } from "./reducer";
import { applyMiddleware, createStore } from "redux";

const preloadedState = {
  todos: [
  ],
  filters: {
    status: 'all',
    colors: []
  }
}

const enhancer = applyMiddleware(middleWare);

export const store = createStore(rootReducer, preloadedState, enhancer);