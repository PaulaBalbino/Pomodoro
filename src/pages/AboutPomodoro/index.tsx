
import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
	useEffect(() => {
		document.title = 'Discover the Pomodoro Technique - Chronos Pomodoro';
	}, []);

	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>🍅 The Pomodoro Technique 🍅</Heading>

					<p>
						The Pomodoro Technique is a productivity method created by <strong>Francesco Cirillo</strong>,
						which consists of dividing work into time blocks (the famous "Pomodoros") interspersed with breaks.
						The goal is to maintain full focus for a short period and ensure breaks to avoid mental fatigue.
					</p>

					<h2>How does the traditional Pomodoro work?</h2>
					<ul>
						<li><strong>1. Choose a task</strong> you want to work on.</li>
						<li><strong>2. Work on it for 25 minutes</strong> without interruptions.</li>
						<li><strong>3. Take a short 5-minute break</strong>.</li>
						<li><strong>4. Every 4 cycles, take a long break</strong> (usually 15 to 30 minutes).</li>
					</ul>

					<h2> But <strong>Chronos Pomodoro</strong> has a special twist 🚀</h2>

					<p>
					Our app follows the original concept but with some improvements and customizations to make
					the process even more efficient:
					</p>

					<h3>⚙️ Cycle customization</h3>
					<p>
						You can set your own focus time, short break, and long break durations! Just go to
						the{' '} <RouterLink href='/settings/'>settings page</RouterLink> and adjust the minutes as you prefer.
					</p>

					<h3>🔁 Cycles organized in sequence</h3>
					<p>
						With each completed cycle, a new task is automatically added to your history, and the app
						already suggests the next cycle (focus or break).
					</p>
					<p>
						<strong>Default option:</strong>
					</p>
					<ul>
						<li><strong>Odd cycles</strong>: Work (focus).</li>
						<li><strong>Even cycles</strong>: Short break.</li>
						<li><strong>Cycle 8</strong>: Special long break to reset the full cycle.</li>
					</ul>

					<h3>🍅 Cycle visualization</h3>
					<p>
						Just below the timer, you’ll see colored dots representing the cycles:
					</p>
					<ul>
						<li>🔴 Red: Work cycle (focus).</li>
						<li>🟣 Purple: Short break.</li>
						<li>🟡 Yellow: Long break (appears every 8 cycles).</li>
					</ul>

					<p>
					That way, you always know where you are in the process and what comes next.
					No need to write it down or calculate it in your head anymore!
					</p>

					<h3>📊 Automatic history</h3>
					<p>
					All your completed tasks and cycles are saved in the{' '}
					<RouterLink href='/history/'>history</RouterLink>, marked as completed or interrupted.
					This way, you can track your progress over time.
					</p>

					<h2>Why use Chronos Pomodoro?</h2>
				<ul>
					<li>✅ Organize your focus with clarity.</li>
					<li>✅ Work and rest in the right balance.</li>
					<li>✅ Customize your own cycles and durations.</li>
					<li>✅ Track your history automatically.</li>
				</ul>

				<p>
 					<strong>Ready to focus?</strong> Let’s go{' '}
					<RouterLink href='/'>back to the home page</RouterLink> and start your Pomodoro!
				</p>

				</GenericHtml>
			</Container>
		</MainTemplate>
	);
}