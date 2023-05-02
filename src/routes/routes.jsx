import Akbatan from "../pages/BranchPage/akbatan";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Search from "../pages/search";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/Cart", element: <Cart /> },
  { id: 3, path: "/signin", element: <SignIn /> },
  { id: 4, path: "/signup", element: <SignUp /> },
  { id: 4, path: "/akbatan", element: <Akbatan /> },
  { id: 5, path: "/search/:query", element: <Search /> },
  { id: 6, path: "/:name/:id", element: <Product /> },
  { id: 7, path: "*", element: <NotFound /> },
];

export default routes;
