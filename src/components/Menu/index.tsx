import { HistoryIcon, HouseIcon, SunIcon, Settings, MoonIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
	const[theme, setTheme] = useState<AvailableThemes>(() => {
		const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
		return storageTheme;
	});

	const nextThemeIcon = {
		dark: <SunIcon/>,
		light: <MoonIcon/>,
	}

	function handleThemeChange(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	){
		event.preventDefault();

		setTheme(prevTheme => {
			const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
			return (nextTheme);
		});
	}

	useEffect(() => {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}, [theme]);

	return (
	<div className={styles.menu}>
	<Link
		className={styles.menuLink}
		to='/'
		aria-label='Back to home'
		title='Back to home'>
		<HouseIcon />
	</Link>

	<a
	className={styles.menuLink}
	href='#'
	aria-label='Check history'
	title='Check history'>
		<HistoryIcon />
	</a>
	<a className={styles.menuLink} href='#' aria-label='Settings' title='Settings'>
		<Settings />
	</a>
	<a
	className={styles.menuLink}
	href='#'
	aria-label='Shift theme'
	title='Shift theme'
	onClick={handleThemeChange}
	>
		{nextThemeIcon[theme]}
	</a>
	</div>)
}