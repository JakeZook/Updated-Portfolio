import Particles from "../Utils/Particles";
import CursorGlow from "../Utils/CursorGlow";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Four0Four from "../components/404";

export default function Error() {
	return (
		<div>
			<Particles id="tsparticles" />
			<CursorGlow />
			<Nav />
			<main className="p-5">
				<Four0Four />
			</main>
			<Footer />
		</div>
	);
}
