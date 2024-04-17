import { Outlet } from "react-router-dom";
import Nav from "../../components/Shared/Nav";

const Root = () => {
  return (
    <main className="text-pretty">
      <Nav />
      <Outlet />
    </main>
  );
};

export default Root;
