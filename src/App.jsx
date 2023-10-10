import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./layout/AppLayout";
import AdminLayout from "./layout/AdminLayout";
import { DarkModeProvider } from "./features/Navbar/DarkModeContext";

const routes = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <h1>404</h1> },
  { path: "/admin", element: <AdminLayout />, errorElement: <h1>404</h1> },
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
