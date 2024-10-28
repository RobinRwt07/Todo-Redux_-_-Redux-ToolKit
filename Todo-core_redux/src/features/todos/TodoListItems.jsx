/* eslint-disable react/prop-types */
import { availableColors, capitalize } from '../filters/colors';
import { useDispatch } from 'react-redux';
import { deleteTodo, todoCompeleteToggled, todoColorChange } from './todosSlice';

const TodoListItem = function TodoListItem({ todo }) {
	const dispatch = useDispatch();
	const { title, completed, color = "" } = todo;
	const handleCompletedChanged = () => {
		dispatch(todoCompeleteToggled(todo.id, !todo.completed))
	}
	const handleColorChanged = (e) => {
		dispatch(todoColorChange(todo.id, e.target.value));
	}

	function handleDelete() {
		dispatch(deleteTodo(todo.id))
	}

	const colorOptions = availableColors.map((c) => (
		<option key={c} value={c}>
			{capitalize(c)}
		</option>
	))

	return (
		<li>
			<div className="view">
				<div className="segment label">
					<input
						className="toggle"
						type="checkbox"
						checked={completed}
						onChange={handleCompletedChanged}
					/>
					<div className="todo-text">{title}</div>
				</div>
				<div className="segment buttons">
					<select
						className="colorPicker"
						value={color}
						style={{ color }}
						onChange={handleColorChanged}
					>
						<option value=""></option>
						{colorOptions}
					</select>
					<button className="destroy" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</li>
	)
}

export default TodoListItem
