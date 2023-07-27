import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import PageNotFound from "./components/PageNotFound";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/work", element: <Work />, errorElement: <Error /> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000);
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
