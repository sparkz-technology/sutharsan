import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./layout/AppLayout";
import { DarkModeProvider } from "./features/Navbar/DarkModeContext";
import AdminLayout from "./layout/AdminLayout";
import UserDataTable from "./features/User/UserDataTable";
import ProjectTable from "./features/Projects/ProjectTable";
import SkillsTable from "./features/Skills/SkillsTable";
import Login from "./features/Login/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Success from "./Pages/Success/";

const routes = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <h1>404</h1> },
  {
    path: "/login", element: <Login />,

  },
  { path: "/success/:token", element: <Success /> },
  {
    path: "/admin", element:
      <ProtectedRoute >
        <AdminLayout />
      </ProtectedRoute>,
    errorElement: <h1>404</h1>, children: [
      { index: true, element: <Navigate to="/admin/profile" /> },
      {
        path: "profile", element: <UserDataTable />,
        children: [
          { path: ":token", element: <Login /> }
        ]
      },
      { path: "skills", element: <SkillsTable /> },
      { path: "projects", element: <ProjectTable /> },
    ],
  }
], {
  basename: "/sutharsan/",
});

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,// this is to prevent refetching data when the user switches tabs
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
