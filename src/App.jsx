import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000); // Set the delay time in milliseconds (2 seconds in this example)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
