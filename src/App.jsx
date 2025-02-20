import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SearchResult from "./components/SearchResult";
import Test from "./components/Test";

const AppLayout = () => {
	return (
		<Provider store={appStore}>
			<Header />
			<Outlet />
		</Provider>
	)
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: "/watch/:watchId",
				element: <WatchVideo />
			},
			{
				path: "/result/:userSearch",
				element: <SearchResult />
			}
		]	
	}
]);

const App = () => {
	return (
		<RouterProvider router={appRouter} />
	);
};

export default App;