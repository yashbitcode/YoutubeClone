import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />
	},
	{
		path: "/watch/:watchId",
		element: <WatchVideo />
	}
]);

const App = () => {
	return (
		<Provider store={appStore}>
			<div>
				<Header />
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
};

export default App;