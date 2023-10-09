import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./features/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";


const routes = createBrowserRouter(
  [{ path: "/", element: <Home />, errorElement: <h1>404</h1> }]
);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
