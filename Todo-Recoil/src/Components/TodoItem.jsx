import PropTypes from 'prop-types'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../Recoil/atom'

const TodoItem = ({ todo }) => {
	const [, setTodoList] = useRecoilState(todoListAtom); // return recoil state and updater function to update

	function handleDelete(id) {
		setTodoList((todoList) => todoList.filter(todo => todo.id !== id));
	}
	function handleChange(id) {
		setTodoList((todoList) => todoList.map(todo => {
			if (todo.id !== id) {
				return todo;
			}
			return {
				...todo,
				isCompleted: !todo.isCompleted,
			}
		}))
	}
	return (
		<div className="flex gap-2 p-2 bg-slate-200 rounded-md">
			<input type="checkbox" name="completed" id="completed" checked={todo.isCompleted} onChange={() => handleChange(todo.id)} />
			<p className='flex-auto'>{todo.text}</p>
			<button className='px-2 py-1 text-sm bg-red-300 text-red-600 rounded-md' onClick={() => handleDelete(todo.id)}>Delete</button>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object
}

export default TodoItem;