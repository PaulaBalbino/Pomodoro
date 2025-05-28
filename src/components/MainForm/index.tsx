import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from "../Tips";


export function MainForm() {
	const { state, dispatch } = useTaskContext();
  	const taskNameInput = useRef<HTMLInputElement>(null);

	// Cycles
	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);



	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (taskNameInput.current === null)
			return;

		const taskName = taskNameInput.current.value.trim();
		console.log(taskName);

		if (!taskName) {
			alert('Write the task name')
			return;
		}

		const newTask: TaskModel = {
			id: Date.now().toString(), // cria um id unico, praticamente imp criar 2 ao mesmo tempo
			name: taskName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			duration: state.config[nextCycleType],
			type: nextCycleType,
		};

		dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

	}

	function handleInterruptTask() {
		dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
	}

	return (
<form onSubmit={handleCreateNewTask} className='for' action='' >
<div className='formRow'>
	<DefaultInput
		labelText='Test'
		id='input'
		type='text'
		placeholder='Write here...'
		ref={ taskNameInput }
		disabled={!!state.activeTask} // desativa a possibilidade de escrever a task (retorno do boolean eh true)
		/>
</div>

<div className='formRow'>
	<Tips/>
</div>

{state.currentCycle > 0 && (
<div className='formRow'>
	<Cycles />
</div>
)}

<div className='formRow'>
	{!state.activeTask ? (
	<DefaultButton
		aria-label='Start new task'
		title='Start new task'
		type='submit'
		icon={<PlayCircleIcon/>}
		key='submit button' //precisa criar o key para evitar bug no botao
	/>
	) : (
		<DefaultButton
		aria-label='Stop current task'
		title='Stop current task'
		type='button'
		color='red'
		icon={<StopCircleIcon/>}
		onClick={handleInterruptTask}
		key='lock button'
		/>
	)}
</div>
</form>
);
}