import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';

type TaskContextProviderProps = {
	children: React.ReactNode;
};


export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const worker = TimerWorkManager.getInstance()

	worker.onmessage(e => {
		const countDownSeconds = e.data;
		console.log(e.data);

		if (countDownSeconds <= 0) {
			dispatch ({
				type: TaskActionTypes.COMPLETE_TASK,
			});
			worker.terminate();
		} else {
			dispatch({
				type: TaskActionTypes.COUNT_DOWN,
				payload: {secondsRemaining:countDownSeconds },
			});
		}
	});

	useEffect(() => {
		if (!state.activeTask) {
			console.log('Worker terminado')
			worker.terminate();
		}
	}, [worker, state]); // se a variavel worker mudasse poderia causar um loop infinito

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}