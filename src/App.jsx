import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./layout/AppLayout";
import { DarkModeProvider } from "./features/Navbar/DarkModeContext";

const routes = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <h1>404</h1> },
]);

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalStyle />
        <RouterProvider router={routes} />
      </DarkModeProvider>
    </>
  );
}

export default App;
