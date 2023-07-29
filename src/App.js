import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideos from "./components/SearchVideos";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Head />
        <Body />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch/:channelId",
        element: <WatchPage />,
      },
      {
        path: "/search/:searchQuery",
        element: <SearchVideos />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
