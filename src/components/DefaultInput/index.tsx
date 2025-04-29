type DefaultInput = {
	type: 'text' | 'number' | 'search';
	id: string;
}	& React.ComponentProps<'input'>;


export function DefaultInput({id, type }: DefaultInput) {
	return (
		<>
		<label htmlFor={id}>Task</label>
		<input id={id} type={type}></input>
		</>
	);
}

