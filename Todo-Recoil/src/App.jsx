// recoil is a state manangement library. that uses 100% hook-based approach.

import AddTodo from "./Components/AddTodo"
import TodoList from "./Components/TodoList"
import TodolistStat from "./Components/TodolistStat"

function App() {
	return (
		<div className="max-w-5xl flex flex-col justify-center p-4">
			<h3 className="text-teal-900 text-2xl font-bold">To-do</h3>
			<AddTodo />
			<TodoList />
			<TodolistStat />
		</div>
	)
}

export default App
