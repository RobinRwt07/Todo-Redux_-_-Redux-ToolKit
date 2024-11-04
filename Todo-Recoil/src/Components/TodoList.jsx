import { useRecoilValue } from "recoil"
import { filterTodoListState } from "../Recoil/atom"
import TodoItem from "./TodoItem"

const TodoList = () => {
	const todoList = useRecoilValue(filterTodoListState);
	if (todoList.length === 0) {
		return <h3 className="text-center font-bold text-red-600 my-5 text-2xl">No Items </h3>
	} // return a value of an item or selector
	return (
		<div className="max-w-4xl mt-5 flex flex-col gap-3 ">
			{
				todoList.map(todo => <TodoItem key={todo.id} todo={todo} />)
			}
		</div>
	)
}

export default TodoList