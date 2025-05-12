import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
	id:string;
	name: string;
	duration: number;
	startDate: number;
	completeDate: number | null; //null if task was interrupted
	interruptDate: number | null; // null if task was completed
	type: keyof TaskStateModel['config'];
}