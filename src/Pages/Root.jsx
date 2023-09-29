import { Outlet } from "react-router";

import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
