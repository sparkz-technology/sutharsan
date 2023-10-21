import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./layout/AppLayout";
import { DarkModeProvider } from "./features/Navbar/DarkModeContext";
import AdminLayout from "./layout/AdminLayout";
import Data from "./features/User/Data";
import GetProjects from "./features/Projects/GetProject";
import GetSkills from "./features/Skills/GetSkills";

const routes = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <h1>404</h1> },
  {
    path: "/admin", element: <AdminLayout />, errorElement: <h1>404</h1>, children: [
      { path: "profile", element: <Data /> },
      { path: "skills", element: <GetSkills /> },
      { path: "projects", element: <GetProjects /> },

    ]
  }
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <GlobalStyle />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={routes} />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
