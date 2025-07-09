import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { SaveIcon } from "lucide-react";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";

export function Settings() {
	const { state } = useTaskContext();
	const workTimeInput = useRef<HTMLInputElement>(null);
	const shortBreakTimeInput = useRef<HTMLInputElement>(null);
	const longBreakTimeInput = useRef<HTMLInputElement>(null);

function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
	e.preventDefault();
	showMessage.dismiss();
	const formErrors = [];

	const workTime = Number(workTimeInput.current?.value);
	const shortBreakTime = Number(shortBreakTimeInput.current?.value);
	const longBreakTime = Number(longBreakTimeInput.current?.value);

	if (isNaN(workTime) ) {
		formErrors.push('Please use only numbers');
		return;
	}

	if (isNaN(shortBreakTime) ) {
		showMessage.error('Please use only numbers');
		return;
	}
	if (isNaN(longBreakTime) ) {
		showMessage.error('Please use only numbers');
		return;
	}
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
						/>
					</div>
					<div className='formRow'>
						<DefaultInput id='shortBreakTime'
						labelText="Short Break Time"
						ref={shortBreakTimeInput}
						defaultValue={state.config.shortBreakTime}
						/>
					</div>
					<div className='formRow'>
						<DefaultInput id='longBreakTime'
						labelText="Long Break Time"
						ref={longBreakTimeInput}
						defaultValue={state.config.longBreakTime}/>
					</div>
					<div className='formRow'>
						<DefaultButton icon={<SaveIcon/>}
						aria-label="Apply Settings"
						title="Apply Settings"/>
					</div>
				</form>
			</Container>
		</MainTemplate>
	);
}

