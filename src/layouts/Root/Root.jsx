import { Outlet } from "react-router-dom";
import Nav from "../../components/Shared/Nav";
import Footer from "../../components/Shared/Footer";

const Root = () => {
  return (
    <main className="text-pretty">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
