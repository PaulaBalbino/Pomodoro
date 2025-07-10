
import { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel, TaskActionTypes } from './taskActions';


export function taskReducer(
	state: TaskStateModel,
	action: TaskActionModel,
): TaskStateModel {
	switch (action.type) {
		case TaskActionTypes.START_TASK: {
			const newTask = action.payload;
			const nextCycle = getNextCycle(state.currentCycle);
			const secondsRemaining = newTask.duration * 60;

			return {
				...state,
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining,
				formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
				tasks: [...state.tasks, newTask],
			};
		}
		case TaskActionTypes.INTERRUPT_TASK: {
			return {
				...state,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				tasks: state.tasks.map(task => {
					if (state.activeTask && state.activeTask.id === task.id) {
						return { ...task, interruptDate: Date.now() };
					}
					return task;
				}),
			};
		}

		case TaskActionTypes.COMPLETE_TASK: {
			return {
				...state,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				tasks: state.tasks.map(task => {
					if (state.activeTask && state.activeTask.id === task.id) {
						return { ...task, completeDate: Date.now() };
					}
					return task;
				}),
			};
		}

		case TaskActionTypes.RESET_STATE: {
			return {...initialTaskState};
		}
		case TaskActionTypes.COUNT_DOWN: {
			return {
				...state,
				secondsRemaining: action.payload.secondsRemaining,
				formattedSecondsRemaining: formatSecondsToMinutes(action.payload.secondsRemaining,

				),
			};
		}
				case TaskActionTypes.CHANGE_SETTINGS: {
			return {...state, config: { ...action.payload } };
		}
	}

	// Sempre deve retornar o estado
	return state;
}

// Esse reducer é responsável por gerenciar o estado das tarefas no aplicativo Pomodoro.
// Deve possuir somente acoes puras, ou seja, não deve conter lógica de negócio complexa.
// Nao deve possuir funcoes async, pois o Redux não suporta isso diretamente.
// As ações devem ser simples e diretas, alterando o estado de forma previsível.
// O estado inicial é definido no arquivo initialTaskState.ts e deve ser importado aqui.
// Deve estar relacionado ao estado de tarefas, como iniciar, completar, interromper e contar o tempo restante.