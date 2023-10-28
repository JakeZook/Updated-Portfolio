import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TopProjects.css";

const GithubRepos = () => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await axios.get(
					"https://api.github.com/users/JakeZook/repos",
					{
						headers: {
							Authorization: import.meta.env.VITE_API,
						},
					}
				);
				const sortedRepos = response.data.sort(
					(a, b) => new Date(b.created_at) - new Date(a.created_at)
				);

				for (const repo of sortedRepos) {
					try {
						const languageResponse = await axios.get(repo.languages_url);
						repo.languages = languageResponse.data;
					} catch (error) {
						console.error(
							`Error fetching language data for ${repo.name}`,
							error
						);
					}
				}

				setRepos(sortedRepos);
			} catch (error) {
				console.error("Error fetching GitHub repositories", error);
			}
		};

		fetchRepos();
	}, []);

	return (
		<div className="row d-flex justify-content-center text-center">
			{repos.map((repo) => (
				<div className="card col-sm-6 col-md-4 col-lg-3 m-2" key={repo.id}>
					<div className="card-body d-flex flex-column justify-content-between align-items-center">
						<h5 className="card-title project-title">{repo.name}</h5>
						<p className="card-text">{repo.description}</p>
						<div>
							<h5 id="langHeader">Languages:</h5>
							{Object.keys(repo.languages).map((language) => (
								<span key={language} className="badge badge-primary mr-2">
									{language}
								</span>
							))}
						</div>
						<div className="mt-2 mb-2" style={{ color: "#ffff00" }}>
							{new Date(repo.created_at).toLocaleDateString("en-US")}
						</div>
						<div className="mb-2 mt-2 card-buttons d-flex justify-content-center">
							<a
								href={repo.html_url}
								className="transparent-button"
								target="_blank"
							>
								Repo
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default GithubRepos;
