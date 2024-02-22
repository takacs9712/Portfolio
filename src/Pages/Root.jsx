import { Outlet } from "react-router";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
