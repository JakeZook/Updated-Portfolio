import TopProjects from "../components/TopProjects";
import GithubRepos from "../components/ProjectAPI";

export default function Projects() {
	return (
		<div className="mt-5 mb-5 text-center">
			<h1 style={{ color: "#ffff00" }}>Top Projects:</h1>
			<TopProjects />
			<div className="text-center m-5">
				<h1 style={{ color: "#ffff00" }}>All Projects:</h1>
				<div className="d-flex justify-content-center text-center mt-5 mb-5">
					<GithubRepos />
				</div>
			</div>
		</div>
	);
}
