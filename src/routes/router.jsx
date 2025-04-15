import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Store from "../pages/Store/Store";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blog from "../pages/Blog/blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import ProductAuthor from "../pages/ProductAuthor/ProductAuthor";
import Faq from "../pages/Faq/Faq";
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
  {
    path: "/Store",
    element: <Store></Store>,
  },
  {
    path: "/ProductDetails",
    element: <ProductDetails></ProductDetails>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/Registration",
    element: <Registration></Registration>,
  },
  {
    path: "/Blog",
    element: <Blog></Blog>,
  },
  {
    path: "/BlogDetails",
    element: <BlogDetails></BlogDetails>,
  },
  {
    path: "/ProductAuthor",
    element: <ProductAuthor></ProductAuthor>,
  },
  {
    path: "/Faq",
    element: <Faq></Faq>,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

export default router;