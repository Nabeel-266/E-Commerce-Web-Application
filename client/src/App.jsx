import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import Page & Components
import ScrollToTop from "./components/Layout/ScrollToTop";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Footer from "./components/Layout/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import Account from "./components/UI/Account";
import Orders from "./components/UI/Orders";
import Wishlist from "./components/UI/Wishlist";
import Product from "./pages/Product";

const AppLayout = () => {
  return (
    <div className="w-full relative z-[1]">
      <Navbar />
      <ScrollToTop />
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
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <UserDashboard />,
        children: [
          {
            path: "/user/account",
            element: <Account />,
          },
          {
            path: "/user/orders",
            element: <Orders />,
          },
          {
            path: "/user/wishlist",
            element: <Wishlist />,
          },
        ],
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
