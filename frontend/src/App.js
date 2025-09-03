import { createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import EdonationPage from "./pages/Edonation";
import AdminPage from "./pages/Admin";
import About from "./pages/About";
// import Feedback from "./pages/Feedback";
import FeedbackModal from "./components/Home UI/FeedbackModal";
import AppRoutes from "./AppRoutes";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/edonation", element: <EdonationPage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/about", element: <About /> },
      { path: "/feedback", element: <FeedbackModal /> }
    ],
  },
];

function App() {

  // const location= useLocation();
  // const background= location.state?.backgroundLocation;

  const router= createBrowserRouter([
    {
      path:"/*",
      element:<AppRoutes/>
    }
  ]);

  return (
  <>
  <RouterProvider router={router}/>
  </>);

}

export default App;
