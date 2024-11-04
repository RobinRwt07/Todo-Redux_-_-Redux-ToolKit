// in recoil atom represent piece of state. atom can be read and write from any component. an application can have multiple atom.
// an component can subscribe to atom. and whenever atom value changes. all of its subscribed component will rerender

// some hooks only works with writable state like useRecoilState(). all the atom have readable and writable state,
// but only some selectors are considered as writable( with get and set property)

import { atom, selector } from "recoil";

export const todoListAtom = atom({
  key: 'todoListState',
  default: [],
})

export const filterToDoStateAtom = atom({
  key: "filterTodoState",
  default: 'all',
})


// selector represent piece of derived state. it allow us to build dynamic data that depend on other data or state.

export const filterTodoListState = selector({
  key: "filterTodoList",
  get: ({ get }) => {
    const filterStatus = get(filterToDoStateAtom);  // get property can access to other atoms and selectors
    const todoList = get(todoListAtom);

    switch (filterStatus) {
      case "all":
        return todoList;
      case 'completed':
        return todoList.filter(todo => todo.isCompleted)
      case 'uncompleted':
        return todoList.filter(todo => !todo.isCompleted)
      default:
        return todoList;
    }
  }
})

export const todoItemStat = selector({
  key: "todoItemStat",
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const totalItem = todoList.length;
    const totalCompleted = todoList.filter(todo => todo.isCompleted).length;
    const totalUncompleted = totalItem - totalCompleted;
    const percentCompleted = totalItem === 0 ? 0 : totalCompleted / totalItem * 100;

    return {
      totalItem, totalCompleted, totalUncompleted, percentCompleted
    }
  }
})