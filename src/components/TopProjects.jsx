import "./TopProjects.css";

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
								alt=""
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
								alt=""
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
					<h5 className="card-title project-title">ZookChat</h5>
					<p className="card-text">Video and Text Chat Application</p>
					<div className="d-flex flex-column">
						<div className="vc-pic mx-auto mb-3">
							<img
								src="data:image/jpeg;base64,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"
								alt=""
							/>
						</div>
						<h5 className="tech">Technologies:</h5>
						<ul>
							<li>???</li>
							<li>???</li>
							<li>???</li>
							<li>???</li>
							<li>???</li>
							<li>???</li>
						</ul>
					</div>
					<div className="mb-2 mt-2 card-buttons d-flex justify-content-center">
						<a href="#" className="transparent-button" target="_blank">
							Repo
						</a>
						<a href="#" className="transparent-button" target="_blank">
							Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
