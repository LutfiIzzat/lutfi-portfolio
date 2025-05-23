import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white" // Light text color
        className="p-1 font-medium"
      >
        <a href="#hero" className="flex items-center hover:text-[#F5F5F5] transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Light text color
        className="p-1 font-medium"
      >
        <a href="#introduction" className="flex items-center hover:text-[#F5F5F5] transition-colors">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Light text color
        className="p-1 font-medium"
      >
        <a href="#projects" className="flex items-center hover:text-[#F5F5F5] transition-colors">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Light text color
        className="p-1 font-medium"
      >
        <a href="#experience" className="flex items-center hover:text-[#F5F5F5] transition-colors">
          Experience
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Light text color
        className="p-1 font-medium"
      >
        <a href="#contact" className="flex items-center hover:text-[#F5F5F5] transition-colors">
          Contacts
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="fixed top-0 z-50 w-full px-6 py-3 bg-[#130918] text-[#F5F5F5]">
      <div className="flex items-center justify-between text-[#F5F5F5]">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          {/* Update with your logo name */}
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-[#F5F5F5] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
