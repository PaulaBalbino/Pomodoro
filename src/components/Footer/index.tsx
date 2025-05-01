import styles from './styles.module.css';

export function Footer() {
	return (
	<footer className={styles.footer}>
		<a href=''>How does the Pomodoro technique work? </a>
		<a href=''>Made by Paula Balbino - Pomodoro &copy; {new Date().getFullYear()} </a>
	</footer>
	);
}