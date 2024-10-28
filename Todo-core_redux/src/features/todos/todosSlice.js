import axios from 'axios';
const initialStates = [];

// action creators are function that return action object of specific action type

function addNewTodoAction(data) {
  return {
    type: "todos/todoAdded",
    payload: data
  }
}

function delelteTodoAction(data) {
  return {
    type: "todos/todoDelete",
    payload: data
  }
}

function toggleCompleteAction(data) {
  return {
    type: "todos/todoToggled",
    payload: data
  }
}

function changeColorAction(data) {
  return {
    type: "todos/colorSelected",
    payload: data
  }
}

export function markAllComplete() {
  return {
    type: "todos/markAllComplete",
    payload: '',
  }
}
export function clearCompleted() {
  return {
    type: "todos/clearCompleted",
    payload: '',
  }
}

export const fetchTodos = (dispatch) => {
  axios.get('http://localhost:7000/todos').then((res) => {
    if (res.status == 200) {
      dispatch({ type: "todos/fetchTodos", payload: res.data });
    }
  }).catch(err => {
    console.log(err.message);
  })
}

// this function is thunk creator that return thunk function
export const addNewTodo = function (text) {
  return async function addTodoThunk(dispatch) {
    try {
      const res = await axios.post('http://localhost:7000/todos', { title: text });
      dispatch(addNewTodoAction(res.data))
    }
    catch (err) {
      console.log(err.message);
    }
  }
}

export const deleteTodo = function (id) {
  return async function deleteThunk(dispatch) {
    try {
      const res = await axios.delete(`http://localhost:7000/todos/${id}`);
      dispatch(delelteTodoAction(res.data));
    }
    catch (err) {
      console.log(err.message);
    }
  }
}

export const todoCompeleteToggled = function (id, completed) {
  return async function (dispatch) {
    try {
      const res = await axios.patch(`http://localhost:7000/todos/${id}`, { completed: completed });
      dispatch(toggleCompleteAction(res.data))
    }
    catch (err) {
      console.log(err.message);
    }
  }
}

export const todoColorChange = function (id, color) {
  return async function (dispatch) {
    try {
      const res = await axios.patch(`http://localhost:7000/todos/${id}`, { color: color });
      dispatch(changeColorAction(res.data))
    }
    catch (err) {
      console.log(err.message);
    }
  }
}

export default function todoReducers(state = initialStates, action) {
  switch (action.type) {

    case 'todos/fetchTodos': {
      return [...action.payload];
    }

    case "todos/todoAdded": {
      return [...state, action.payload]
    }

    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return action.payload
      })
    }

    case 'todos/todoDelete': {
      return action.payload;
    }

    case 'todos/colorSelected': {
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return action.payload;
      })
    }
    case 'todos/markAllComplete': {
      return state.map(todo => {
        if (todo.completed) {
          return todo;
        }
        else {
          todo.completed = true;
          return todo;
        }
      })
    }
    case 'todos/clearCompleted': {
      return state.map(todo => {
        if (!todo.completed) {
          return todo;
        }
        else {
          todo.completed = false;
          return todo;
        }
      })
    }
    default:
      return state;
  }
}