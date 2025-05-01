import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container';
import { Cycles } from './components/Cycles';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput'
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
//import { StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
	console.log('Oi');

	return(
		<>
		<Container>
			<Logo />
		</Container>

		<Container>
			<Menu />
		</Container>

		<Container>
			<CountDown />
		</Container>

		<Container>
			<form className='form' action="" >
				<div className='formRow'>
					<DefaultInput
						labelText='Test'
						id='input'
						type='text'
						placeholder='Write here...'/>
				</div>

				<div className='formRow'>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>

				<div className='formRow'>
					<Cycles />
				</div>

				<div className='formRow'>
					<DefaultButton icon={<PlayCircleIcon/>} />
					{/* <DefaultButton icon={<StopCircleIcon/>} color='red'/> */}
				</div>

				<div className='formRow'>
					<Footer />
				</div>


			</form>
		</Container>
		</>
	);
}