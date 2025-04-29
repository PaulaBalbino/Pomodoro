import { HistoryIcon, HouseIcon, MoonStarIcon, Settings } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
	return (
	<div className={styles.menu}>
	<a className={styles.menuLink} href='#'>
		<HouseIcon />
	</a>
	<a className={styles.menuLink} href='#'>
		<HistoryIcon />
	</a>
	<a className={styles.menuLink} href='#'>
		<Settings />
	</a>
	<a className={styles.menuLink} href='#'>
		<MoonStarIcon />
	</a>
	</div>)
}