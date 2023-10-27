import "./Home.css";

export default function Home() {
	return (
		<div className="row d-flex justify-content-center">
			<div className="col-3" id="header">
				<h1>Jake Zook</h1>
				<h2 className="mt-3 mb-3">Full Stack Web Developer</h2>
				<p id="header-bio">
					Recent graduate of DU Full Stack Dev Bootcamp. proficient in numerous
					languages and technologies. Game dev on the side.
				</p>
			</div>
			<div className="col-2"></div>
			<div className="col-3 d-flex text-center justify-content-around align-items-center flex-column">
				<div className="circular-profile-pic mx-auto">
					<img src="../../Assets/pp.PNG" alt="" />
				</div>
				<a href="/bio" className="transparent-button m-2">
					Learn More
				</a>
			</div>
		</div>
	);
}
