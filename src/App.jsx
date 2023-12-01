import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MapPage from "./pages/Map";
// O marcador permanece sem o formulário ser preenchido

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <MapPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
