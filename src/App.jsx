import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Particles from "./Utils/Particles";
import CursorGlow from "./Utils/CursorGlow";

import "./app.css";

function App() {
	return (
		<div>
			<Particles id="tsparticles" />
			<CursorGlow />
			<Nav />
			<main className="p-5">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
