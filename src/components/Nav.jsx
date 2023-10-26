export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Jake Zook
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto text-center">
						<a
							className="nav-link active hoverable"
							aria-current="page"
							href="#"
						>
							Bio
						</a>
						<a className="nav-link hoverable" href="#">
							Projects
						</a>
						<a className="nav-link hoverable" href="#">
							Contact
						</a>
						<a className="nav-link hoverable" href="#">
							Resume
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
