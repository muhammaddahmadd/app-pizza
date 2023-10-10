import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import Home from "./features/ui/Home";
import CreateOrder from "./features/order/Order";
import Order from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./features/ui/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
