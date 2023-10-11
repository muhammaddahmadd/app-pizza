import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading ? <Loading /> : null}
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
