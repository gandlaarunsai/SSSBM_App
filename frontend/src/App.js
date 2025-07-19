import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import EdonationPage from "./pages/Edonation";
import AdminPage from "./pages/Admin";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/edonation", element: <EdonationPage /> },
        { path: "/admin", element: <AdminPage /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
