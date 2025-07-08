
import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
	const { state, dispatch } = useTaskContext();
	const [confirmClearHistory, setConfirmClearHistory] = useState(false);
	const hasTasks = state.tasks.length > 0;

	const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
		() => {
			return {
				tasks: sortTasks({ tasks: state.tasks }),
				field: 'startDate',
				direction: 'desc',
			};
		},
	);

	useEffect(() => {
		setSortTaskOptions(prevState => ({
			...prevState,
			tasks: sortTasks({
				tasks: state.tasks,
				direction: prevState.direction,
				field: prevState.field,
			}),
		}));
	}, [state.tasks]);

	useEffect(() => {
		if (!confirmClearHistory) return;

		setConfirmClearHistory(false);

		dispatch({ type: TaskActionTypes.RESET_STATE });
	}, [confirmClearHistory, dispatch]);

	function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
		const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

		setSortTaskOptions({
			tasks: sortTasks({
				direction: newDirection,
				tasks: sortTasksOptions.tasks,
				field,
			}),
			direction: newDirection,
			field,
		});
	}

	useEffect(() => {
		return () => {
			showMessage.dismiss();
		};
	}, []);

	function handleResetHistory() {
		showMessage.dismiss();
		showMessage.confirm('Tem certeza?', confirmation => {
			setConfirmClearHistory(confirmation);
		});
	}


	return (
		<MainTemplate>
			<Container>
				<Heading>
					<span>History</span>
					{hasTasks && (
						<span className={styles.buttonContainer}>
							<DefaultButton icon={<TrashIcon />} color='red'
								aria-label='Delete all history'
								title='Delete all history'
								onClick={handleResetHistory}
							/>
						</span>
					)}
				</Heading>
			</Container>

			<Container>
				{hasTasks && (
					<div className={styles.responsiveTable}>
						<table>
							<thead>
								<tr>
									<th onClick={() => handleSortTasks({ field: 'name' })} className={styles.thSort} >Task ↕</th>
									<th onClick={() => handleSortTasks({ field: 'duration' })} className={styles.thSort} >Duration ↕</th>
									<th onClick={() => handleSortTasks({ field: 'startDate' })} className={styles.thSort} >Date ↕</th>
									<th>Status</th>
									<th>Type</th>
								</tr>
							</thead>

							<tbody>
								{sortTasksOptions.tasks.map(task => {
									const taskTypeDictionaty = {
										workTime: 'Focus',
										shortBreakTime: 'Short Break Time',
										longBreakTime: 'Long Break Time'
									};

									return (
										<tr key={task.id}>
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
					</div>)}
				{!hasTasks && (
					<p style={{ textAlign: 'center', fontWeight: 'bold' }}>
						No active tasks
					</p>
				)}
			</Container>
		</MainTemplate>
	);
}
