import { useRecoilValue } from "recoil"
import { todoItemStat } from "../Recoil/atom"

const TodolistStat = () => {
	const { totalItem, totalCompleted, totalUncompleted, percentCompleted } = useRecoilValue(todoItemStat);
	return (
		<div className="max-w-4xl bg-slate-200 flex flex-col gap-3 mt-3 p-2 rounded-md *:font-bold *:text-lg">
			<h3>Total todo items :{totalItem} </h3>
			<h3>Total completed items :{totalCompleted} </h3>
			<h3>Total uncompleted items :{totalUncompleted} </h3>
			<h3>Percentage of item completed : {percentCompleted}%</h3>
		</div>
	)
}

export default TodolistStat