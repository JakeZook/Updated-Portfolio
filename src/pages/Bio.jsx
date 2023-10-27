import "./Bio.css";

export default function Bio() {
	return (
		<div>
			<div className="row d-flex justify-content-center mt-5 mb-5 pb-5">
				<h1 className="text-center mb-5">Bio</h1>
				<div className="col-lg-3 col-sm-12" id="header">
					<h1>Jake Zook</h1>
					<p id="header-bio">
						Full Stack Web Developer with a passion for tech and an eagerness to
						dive into any project. Effective at solving unique problems in a
						creative and constructive way. Known for being extremely hard
						working, an exceptionally quick learner, and someone who always
						pushes the boundaries in creativity and productivity.
					</p>
				</div>
				<div className="col-lg-3 col-sm-12 d-flex text-center justify-content-around align-items-center flex-column">
					<div className="circular-profile-pic mx-auto">
						<img src="../../Assets/pp.PNG" alt="Picture of Jake Zook" />
					</div>
					<div className="list">
						<h6>Languages I know:</h6>
						<ul className="langList">
							<li>HTML - CSS</li>
							<li>JavaScript - TypeScript</li>
							<li>C++ - C#</li>
							<li>Python</li>
							<li>SQL - NoSQL</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				className="row d-flex justify-content-center mt-5 mb-5 pb-5"
				id="projectsTab"
			>
				<div className="col-lg-3 col-sm-12 d-flex text-center justify-content-around align-items-center flex-column">
					<div className="circular-profile-pic mx-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="128"
							height="128"
							fill="currentColor"
							className="bi bi-gear-wide-connected"
							viewBox="0 0 16 16"
						>
							<path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
						</svg>
					</div>
					<a href="/projects" className="transparent-button m-2">
						View Projects
					</a>
				</div>
				<div className="col-lg-3 col-sm-12 text-end" id="header-projects">
					<h1>Background</h1>
					<p id="header-bio">
						I have always enjoyed working with tech. My interest in coding came
						from the desire to develop my own video games. I started learning
						C++ and made simple terminal games before deciding to take on the
						Unity Engine. At the time, I was also working with tech daily at my
						job at an escape room where I helped build and maintain dozens of
						props and puzzles that utilized Raspberry Pi and Arduino hardware
						and software.
					</p>
				</div>
			</div>
			<h2 className="text-center mb-5">Relevant Experience:</h2>
			<div
				className="d-flex justify-content-center text-center"
				id="workHistory"
			>
				<div className="card mb-5">
					<div className="card-body">
						<h5 className="card-title">Assistant Manager / Software Manager</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							EscapeWorks Denver
						</h6>
						<p className="card-text">2021 - 2023</p>
						<p className="card-text">
							Managed a staff of up to 15 employees. Handled recruitment,
							development, inventory, expense reporting, marketing, SEO
							optimization, and day to day operations. Was also responsible for
							managing large projects such as upgrading or building new customer
							experiences. This would include maintaining a custom, open source,
							server-side application to operate the customer experience,
							utilizing Arduino and Raspberry Pi hardware and software to create
							interactive puzzles, and wiring numerous props to MQTT relay
							devices to interact with our custom server.
						</p>
					</div>
				</div>
			</div>
			<h2 className="text-center mb-5">Education:</h2>
			<div className="d-flex justify-content-center text-center" id="education">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title mb-2">
							Full Stack Web Development Boot Camp Certificate
						</h5>
						<h6 className="card-subtitle mb-2 text-muted">Denver University</h6>
						<p className="card-text">November 2023</p>
						<p className="card-text">
							A 12-week, fully remote and highly intensive program that provided
							technical programming skills for Full Stack Web Development.
							Focused on multiple languages, frameworks, and libraries currently
							used in the industry. Developed multiple relevant projects solo
							and with teams of 4. Gained experience collaborating with other
							programmers and working with Git efficiently. Spent approximately
							50 hours/week on the program.
						</p>
					</div>
				</div>
			</div>
			<h2 className="text-center mt-5 mb-5">Other Info:</h2>
			<div className="d-flex justify-content-center text-center" id="education">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title mb-2">Other Proficiencies:</h5>
						<p className="card-text">
							Bootstrap, React, Handlebars, JQuery, REST, JSON, API, NODE,
							Express, Jest, MongoDB, Mern, Insomnia, NPM, Dom Maniulation,
							Scrum, Git
						</p>
						<h5 className="card-title mb-2">Interest:</h5>
						<p className="card-text">
							Video Games, Music, Horror Movies, 3D Printing
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
