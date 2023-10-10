import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import CreateOrder from "./features/order/Order";
import Order from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "/order/:orderid",
    element: <Order />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
