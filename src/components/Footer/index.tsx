
import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
	return (
	<footer className={styles.footer}>
		<Link to='/about-pomodoro'>How does the Pomodoro technique work?
		</Link>

		<Link to='/'>Made by Paula Balbino - Pomodoro &copy; {new Date().getFullYear()}
		</Link>
	</footer>
	);
}