import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Index";
import NotFound from "./pages/NotFound";

const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
      ],
    },
    { path: "*", element: <NotFound /> },
]);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export function AppRouter() {
    return <RouterProvider router={router} />;
}