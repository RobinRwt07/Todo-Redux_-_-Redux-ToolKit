import { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterToDoStateAtom, todoListAtom } from '../Recoil/atom';
import { generateUID } from '../utils/uuid';

const AddTodo = () => {
	const [title, setTitle] = useState('');
	const setTodoList = useSetRecoilState(todoListAtom); // return an setter function to update the recoil state
	// const [todoList,setTodoList] = useRecoilState(todoListAtom); // take atom as an argument and return tuple

	const [filterTodoState, setFilterTodoState] = useRecoilState(filterToDoStateAtom);

	function handleFilterChange(e) {
		setFilterTodoState(e.target.value);
	}
	function handleClick() {
		setTodoList((oldTodoList) => [...oldTodoList, { id: generateUID(), text: title, isCompleted: false }])
		setTitle('');
	}
	return (
		<div className='max-w-4xl mt-5 flex gap-5' >
			<input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='border border-black px-3 py-1 rounded-md flex-auto' />
			<button onClick={handleClick} disabled={title.length === 0} className='text-sm bg-slate-200 rounded-md px-2 py-1 disabled:bg-slate-300' >Add Task</button>
			<div className='bg-slate-200 p-2 rounded-md flex gap-2 items-center' >
				Filter
				<select name="filterStatus" id="filterStatus" value={filterTodoState} onChange={handleFilterChange} className='p-1'>
					<option value="all">all</option>
					<option value="completed">completed</option>
					<option value="uncompleted">uncompleted</option>
				</select>
			</div>
		</div>
	)
}

export default AddTodo