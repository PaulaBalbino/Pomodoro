import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from "react";


export function MainForm() {
	const taskNameInput = useRef<HTMLInputElement>(null);

	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
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
		/>
</div>

<div className='formRow'>
	<p>Lorem ipsum dolor sit amet.</p>
</div>

<div className='formRow'>
	<Cycles />
</div>

<div className='formRow'>
	<DefaultButton icon={<PlayCircleIcon/>} />
</div>
</form>
)
}