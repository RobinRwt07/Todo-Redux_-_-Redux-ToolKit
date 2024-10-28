import { useEffect } from 'react';
import TodoListItem from './TodoListItems';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todosSlice';

const TodoList = () => {
	const dispatch = useDispatch();
	// use selector function accpect comparison fun as second argument which compare new value and old value and return true if both are same. and if they are same useSelector would not trigger rerender.
	useEffect(() => {
		dispatch(fetchTodos);
	}, [dispatch])
	const todos = useSelector((state) => state.todos);
	const status = useSelector((state) => state.filters.status);
	const colors = useSelector((state) => state.filters.colors);
	console.log(status, colors);

	let copyTodos = [...todos];

	if (status) {
		switch (status) {
			case 'all':
				copyTodos = todos;
				break;
			case "active": {
				copyTodos = todos.filter(todo => !todo.completed);
				break;
			}
			case 'completed': {
				copyTodos = todos.filter(todo => todo.completed);
				break;
			}
			default:
				copyTodos = todos;
		}
	}

	if (colors.length > 0) {
		copyTodos = copyTodos.filter(todo => colors.includes(todo.color));
	}

	if (copyTodos.length == 0) {
		return <h2>No Item Present</h2>
	}
	const renderedListItems = copyTodos.map((todo) => {
		return <TodoListItem key={todo.id} todo={todo} />
	})

	return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;
