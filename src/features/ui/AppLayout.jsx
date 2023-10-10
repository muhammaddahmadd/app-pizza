import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "../menu/Menu";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"; // Use === for comparison
  return (
    <div className="layout">
      {isLoading ? <Loader /> : null} {/* Conditionally render Loader */}
      <Header />
      <main>
        <h1>Pizza menu</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
