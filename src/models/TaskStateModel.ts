import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
	tasks: TaskModel[];
	secondsRemaining: number;
	formattedSecondsRemaining: string;
	activeTask: TaskModel | null;
	currentCycle: number; // from 1 to 8
	config: {
		workTime: number;
		shortBreakTime: number;
		longBreakTime: number;
	};
};