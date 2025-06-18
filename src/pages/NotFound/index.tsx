import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from "../../components/RouterLink";

export function NotFound() {
	return (
		<MainTemplate>
			<Container>

				<GenericHtml>
					<Heading>Oops! This page drifted into space... 🚀</Heading>
					<p>
					Looks like the page you're looking for has taken a detour through the galaxy.
					It might be:
						<ul>
							<li> Chilling on Mars 😎.</li>
							<li> Hiding behind a comet ☄️</li>
							<li> Or stuck in a time loop with a confused robot 🤖</li>
						</ul>
					</p>
					<p>
					Don’t worry — your mission isn’t over. </p>
					<p>
					<RouterLink href='/'> Click here to return to Earth (aka the homepage) </RouterLink>
					 or {' '} <RouterLink href='/history/'> here to check the History </RouterLink> ✨
					</p>

					<p>
						<em>"If a page doesn't exist on the internet, did it ever truly exist?"</em> 🤔💭
					</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
}