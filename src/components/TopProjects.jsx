import "./TopProjects.css";

import gpt from "../../Assets/gpt.png";

export default function TopProjects() {
	return (
		<div className="row d-flex justify-content-center text-center">
			<div className="card col-lg-3 m-4">
				<div className="card-body">
					<h5 className="card-title project-title">Shred N' Style</h5>
					<p className="card-text">Winter Sports E-Commerce Site</p>
					<div className="d-flex flex-column">
						<div className="circular-pic mx-auto mb-3">
							<img
								src="https://shrednstyle-a1ce73eecb82.herokuapp.com/images/ShrednKens.png"
								alt="screenshot"
							/>
						</div>
						<h5 className="tech">Technologies:</h5>
						<ul>
							<li>HTML - CSS</li>
							<li>JavaScript - Bootstrap</li>
							<li>Handlebars</li>
							<li>mySQL - Node</li>
							<li>Express - bCrypt</li>
							<li>Sequalize</li>
						</ul>
					</div>
					<div className="mb-2 mt-2 card-buttons d-flex justify-content-center">
						<a
							href="https://github.com/nlad218/ShredNStyle"
							className="transparent-button"
							target="_blank"
						>
							Repo
						</a>
						<a
							href="https://shrednstyle-a1ce73eecb82.herokuapp.com/"
							className="transparent-button mt-2"
							target="_blank"
						>
							Demo
						</a>
					</div>
				</div>
			</div>
			<div className="card col-lg-3 m-4">
				<div className="card-body">
					<h5 className="card-title project-title">Game Seekers</h5>
					<p className="card-text">Video Game Recommendation App</p>
					<div className="d-flex flex-column">
						<div className="gs-pic mx-auto mb-3">
							<img
								src="https://ljkahn.github.io/videoGameProj/assets/images/devil-may-cry-dead-space-mirror-s-edge-metal-gear-solid-wallpaper-preview.jpg"
								alt="screenshot"
							/>
						</div>
						<h5 className="tech">Technologies:</h5>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>Bootstrap</li>
							<li>JQuery</li>
							<li>RAWG API</li>
						</ul>
					</div>
					<div className="mb-2 mt-2 card-buttons d-flex justify-content-center">
						<a
							href="https://github.com/ljkahn/videoGameProj"
							className="transparent-button"
							target="_blank"
						>
							Repo
						</a>
						<a
							href="https://ljkahn.github.io/videoGameProj/"
							className="transparent-button"
							target="_blank"
						>
							Demo
						</a>
					</div>
				</div>
			</div>
			<div className="card col-lg-3 m-4">
				<div className="card-body">
					<h5 className="card-title project-title">ZookGPT</h5>
					<p className="card-text">ChatGPT clone using OpenAI API</p>
					<div className="d-flex flex-column">
						<div className="vc-pic mx-auto mb-3">
							<img src={gpt} alt="screenshot" />
						</div>
						<h5 className="tech">Technologies:</h5>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>Bootstrap</li>
							<li>React</li>
							<li>OpenAI</li>
						</ul>
					</div>
					<div className="mb-2 mt-2 card-buttons d-flex justify-content-center">
						<a
							href="https://github.com/JakeZook/AI-ChatBot"
							className="transparent-button"
							target="_blank"
						>
							Repo
						</a>
						<a
							href="https://zookgpt.netlify.app/"
							className="transparent-button"
							target="_blank"
						>
							Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
