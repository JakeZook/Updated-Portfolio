import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/Bio",
				element: <Bio />,
			},
			{
				path: "/Projects",
				element: <Projects />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
