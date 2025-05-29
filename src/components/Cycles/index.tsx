import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
	const { state } = useTaskContext();

	const cycleStep = Array.from({ length: state.currentCycle});

	const cycleDescriptionMap = {
		workTime: 'focus time',
		shortBreakTime: 'short break time',
		longBreakTime: 'long break time',
	};

return (
	<div className={styles.cycles}>
		<span>Cycles:</span>

		<div className={styles.cycleDots}>
			{cycleStep.map((_, index) => {
				const nextCycle = getNextCycle(index);
				const nextCycleType = getNextCycleType(nextCycle);
				return (
				<span
				key={nextCycle}
				className={`${styles.cycleDot} ${styles[nextCycleType]}`}
				aria-label= {`Indicator of ${cycleDescriptionMap[nextCycleType]} cycle`}
				title={`Indicator of ${cycleDescriptionMap[nextCycleType]} cycle`}
				></span>
			);
			})}


		</div>
	</div>
);
}