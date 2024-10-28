import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../todos/todosSlice';
const Header = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const handleChange = (e) => setText(e.target.value)

	function handleKeyDown(e) {
		const text = e.target.value.trim();
		if (e.key === "Enter" && text) {
			dispatch(addNewTodo(text));
			setText('');
		}
	}
	return (
		<header className="header">
			<input
				className="new-todo"
				placeholder="What needs to be done?"
				value={text}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</header>
	)
}

export default Header
