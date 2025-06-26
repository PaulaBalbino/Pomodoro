import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { DefaultButton } from "../../components/DefaultButton";
import { TrashIcon } from "lucide-react";
import styles from './styles.module.css';
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { useState } from "react";


export function History() {
	const {state} = useTaskContext()
	const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
		() => {
			return {
				tasks: sortTasks({tasks: state.tasks}),
				field: 'startDate',
				direction: 'desc',
			}
		},
	);

	function handleSortTasks({ field } : Pick<SortTasksOptions, 'field'> ) {
		const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc'

		setSortTaskOptions({
			tasks: sortTasks({
				direction: newDirection,
				tasks: sortTaskOptions.tasks,
				field,
			}),
			direction: newDirection,
			field,
		})
	}

	return (
		<MainTemplate>
			<Container>
				<Heading>
					<span>History</span>
					<span className={styles.buttonContainer}>
						<DefaultButton icon={<TrashIcon/>} color='red'
						aria-label='Delete all history'
						title='Delete all history'
						/>
					</span>
				</Heading>
			</Container>

			<Container>
				<div className={styles.responsiveTable}>
					<table>
						<thead>
							<tr>
								<th onClick={() => handleSortTasks({field: 'name'})} className={styles.thSort} >Task ↕</th>
								<th onClick={() => handleSortTasks({field: 'duration'})} className={styles.thSort} >Duration ↕</th>
								<th onClick={() => handleSortTasks({field: 'startDate'})} className={styles.thSort} >Date ↕</th>
								<th>Status</th>
								<th>Type</th>
							</tr>
						</thead>

						<tbody>
							{sortTaskOptions.tasks.map(task => {
								const taskTypeDictionaty = {
									workTime: 'Focus',
									shortBreakTime: 'Short Break Time',
									longBreakTime: 'Long Break Time'
								};

								return (
							<tr key ={task.id}>
								<td >{task.name}</td>
								<td>{task.duration}</td>
								<td>{formatDate(task.startDate)}</td>
								<td>{getTaskStatus(task, state.activeTask)}</td>
								<td>{taskTypeDictionaty[task.type]}</td>
							</tr>
							);
							})}
						</tbody>
					</table>
				</div>
			</Container>
		</MainTemplate>
	);
}