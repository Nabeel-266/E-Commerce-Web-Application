import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import Page & Components
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Footer from "./components/Layout/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppLayout = () => {
  return (
    <div className="w-full relative z-[1]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={browserRouter} />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default App;
