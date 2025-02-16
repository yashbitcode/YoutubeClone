import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />
	},
	{
		path: "/watch/:watchId",
		element: <WatchVideo />
	}
])

const App = () => {
	return (
		<div>
			<Header />
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default App;