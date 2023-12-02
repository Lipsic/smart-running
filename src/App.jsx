import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MapPage from "./pages/Map";
import Statistics from "./pages/Statistics";
// O marcador permanece sem o formulário ser preenchido

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <MapPage /> },
      { path: 'statistics', element: <Statistics /> }
    ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
