import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
	const options = useMemo(() => {
		return {
			background: {
				color: "none",
			},
			detectRetina: false,
			fpsLimit: 30,
			interactivity: {
				detectsOn: "canvas",
				events: {
					resize: true,
				},
			},
			particles: {
				color: {
					value: "#fff",
				},
				move: {
					direction: "none",
					enable: true,
					outModes: "out",
					random: false,
					speed: 0.1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 1080,
					},
					limit: 0,
					value: 400,
				},
				opacity: {
					animation: {
						enable: true,
						minimumValue: 0.05,
						speed: 1,
						sync: false,
					},
					random: {
						enable: true,
						minimumValue: 0.05,
					},
					value: 1,
				},
				shape: {
					type: "circle",
				},
				size: {
					random: {
						enable: true,
						minimumValue: 0.5,
					},
					value: 2,
				},
			},
		};
	}, []);

	// useCallback is not mandatory, but it's recommended since this callback can be memoized if static
	const particlesInit = useCallback((engine) => {
		loadSlim(engine);
		// loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
	}, []);

	// setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
	return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
