import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
	const options = useMemo(() => {
		return {
			fpsLimit: 60,
			fullScreen: {
				enable: true,
				zIndex: -1,
			},
			particles: {
				color: { value: "#ffffff" },
				move: {
					direction: "none",
					enable: true,
					outModes: "out",
					random: true,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 100,
				},
				opacity: {
					animation: {
						enable: true,
						speed: 0.05,
						sync: true,
						startValue: "max",
						count: 1,
						destroy: "min",
					},
					value: {
						min: 0.1,
						max: 1,
					},
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 1.5 },
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
