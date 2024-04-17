import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#4A00FF]" : ""} ${
              isPending ? "text-[#FF09D5]" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#4A00FF]" : ""} ${
              isPending ? "text-[#FF09D5]" : ""
            }`
          }
        >
          Blogs
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink
          to="/bookmarks"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#4A00FF]" : ""} ${
              isPending ? "text-[#FF09D5]" : ""
            }`
          }
        >
          Bookmarks
        </NavLink>
      </Typography>
      <Switch
        id="custom-switch-component"
        ripple={false}
        className="h-full w-full checked:bg-[#1A103D]"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
      />
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 bg-white mx-auto max-w-full px-6 py-3 shadow-lg w-full rounded-none">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <Typography as="h1" variant="h4" className="py-1.5 text-[#4A00FF]">
            <span className="text-[#FF09D5]">Byte</span>Blaze
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-[#FF09D5]" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#4A00FF]" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
