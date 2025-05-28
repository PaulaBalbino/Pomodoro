import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {

const { state } = useTaskContext();
const nextCycle = getNextCycle(state.currentCycle);
const nextCycleType = getNextCycleType(nextCycle);

	// Tips for user
		const tipsForWhenActiveTask = {
		workTime: <span>Focus time is {state.config.workTime} min</span>,
		shortBreakTime: <span>Relax for {state.config.shortBreakTime} min</span>,
		longBreakTime: <span>Enjoy your long break time</span>,
	};

		const tipsForNoActiveTask = {
		workTime: <span>Next cycle is {state.config.workTime} min</span>,
		shortBreakTime: <span>Next cycle is {state.config.shortBreakTime} min</span>,
		longBreakTime: <span>Next cycle is a long break time</span>,
	};

	return (
		<>
			{state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
			{!state.activeTask && tipsForNoActiveTask[nextCycleType]}
		</>
	)
}