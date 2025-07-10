import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { useEffect } from "react";

export function Home() {
	useEffect(() => {
		document.title = 'Discover the Pomodoro Technique - Chronos Pomodoro';
	}, []);

	return (
		<MainTemplate>
			<Container>
				<CountDown />
			</Container>

			<Container>
				<MainForm />
			</Container>
		</MainTemplate>
	);
}