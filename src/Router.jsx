import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import CodeOfConduct from "./pages/legal/CodeOfConduct";
import PrivacyPolicy from "./pages/legal/Privacy";
import License from "./pages/legal/License";
import DownloadIndex from "./pages/downloads/Index";
import Windows from "./pages/downloads/Windows";
import MacOS from "./pages/downloads/MacOS";
import Linux from "./pages/downloads/Linux";
import NotFound from "./pages/NotFound";

const Layout = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about/", element: <About /> },
        { path: "download/", element: <DownloadIndex /> },
        { path: "download/windows/", element: <Windows /> },
        { path: "download/macos/", element: <MacOS /> },
      { path: "download/linux/", element: <Linux /> },
        { path: "code-of-conduct/", element: <CodeOfConduct /> },
        { path: "privacy-policy/", element: <PrivacyPolicy /> },
        { path: "license/", element: <License /> },
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