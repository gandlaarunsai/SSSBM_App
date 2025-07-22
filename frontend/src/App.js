import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import EdonationPage from "./pages/Edonation";
import AdminPage from "./pages/Admin";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/edonation", element: <EdonationPage /> },
        { path: "/admin", element: <AdminPage /> },
        { path: "/about", element: <About /> },
        { path: "/feedback", element: <Feedback /> }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
