import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

//import { StopCircleIcon } from 'lucide-react';
//import { Heading } from './components/Heading';
import { Footer } from './components/Footer';
import { MainForm } from './components/MainForm';

export function MainTemplate() {

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
			<MainForm />
		</Container>

		<Container>
			<div className='formRow'>
				<Footer />
			</div>
		</Container>
		</>
	);
}