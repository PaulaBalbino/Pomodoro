import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { SaveIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
	const { state, dispatch } = useTaskContext();
	const workTimeInput = useRef<HTMLInputElement>(null);
	const shortBreakTimeInput = useRef<HTMLInputElement>(null);
	const longBreakTimeInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		document.title = 'Settings - Chronos Pomodoro';
	}, []);

	function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		showMessage.dismiss();
		const formErrors = [];

		const workTime = Number(workTimeInput.current?.value);
		const shortBreakTime = Number(shortBreakTimeInput.current?.value);
		const longBreakTime = Number(longBreakTimeInput.current?.value);

		if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
			formErrors.push('Type only numbers');
		}

		if ((workTime < 1 || workTime > 99) || (shortBreakTime < 1 || shortBreakTime > 99) || (longBreakTime < 1 || longBreakTime > 99)) {
			formErrors.push('Number must be between 1 and 99');
		}

		if (formErrors.length > 0) {
			formErrors.forEach(error => {
				showMessage.error(error);
			});
			return;
		}
		dispatch({type: TaskActionTypes.CHANGE_SETTINGS, payload: {
			workTime,
			shortBreakTime,
			longBreakTime,
		},
	})
	showMessage.success('Settings saved successfully.');
	}

	return (
		<MainTemplate>
			<Container>
				<Heading> Settings</Heading>
			</Container>
			<Container>
				<p style={{ textAlign: 'center' }}>
					Change the settings for focus time, short break, and long break.
				</p>
			</Container>

			<Container>
				<form onSubmit={handleSaveSettings} action='' className='form'>
					<div className='formRow'>
						<DefaultInput id='workTime'
							labelText="Focus"
							ref={workTimeInput}
							defaultValue={state.config.workTime}
							type='number'
						/>
					</div>
					<div className='formRow'>
						<DefaultInput id='shortBreakTime'
							labelText="Short Break Time"
							ref={shortBreakTimeInput}
							defaultValue={state.config.shortBreakTime}
							type='number'
						/>
					</div>
					<div className='formRow'>
						<DefaultInput id='longBreakTime'
							labelText="Long Break Time"
							ref={longBreakTimeInput}
							defaultValue={state.config.longBreakTime}
							type='number'
						/>
					</div>
					<div className='formRow'>
						<DefaultButton icon={<SaveIcon />}
							aria-label="Apply Settings"
							title="Apply Settings" />
					</div>
				</form>
			</Container>
		</MainTemplate>
	);
}

