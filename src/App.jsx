import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./layout/AppLayout";


const routes = createBrowserRouter(
  [{ path: "/", element: <AppLayout />, errorElement: <h1>404</h1> }]
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
