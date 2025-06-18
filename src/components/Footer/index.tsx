

import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
	return (
	<footer className={styles.footer}>
		<RouterLink href='/about-pomodoro'>How does the Pomodoro technique work?
		</RouterLink>

		<RouterLink href='/'>Made by Paula Balbino - Pomodoro &copy; {new Date().getFullYear()}
		</RouterLink>
	</footer>
	);
}