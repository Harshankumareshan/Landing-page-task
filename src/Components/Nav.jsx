import React, { useState } from "react";
import { ChevronDown } from 'react-feather'; // Import ChevronDown icon from react-feather

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-white dark:bg-dark sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          <div className="w-60 max-w-full">
            <a href="/#" className="block py-3">
              <img src="\logoo.PNG" alt="log" className="h-15" />
            </a>
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden ${open && "navbarTogglerActive"} 
                absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-3 py-2 ring-primary focus:ring-2 text-black border border-black`}
            >
              <span className="block h-1 w-6 bg-body-color dark:bg-white my-1"></span>
              <span className="block h-1 w-6 bg-body-color dark:bg-white my-1"></span>
              <span className="block h-1 w-6 bg-body-color dark:bg-white my-1"></span>
            </button>
            <nav
              id="navbarCollapse"
              className={`absolute right-4 top-full w-full max-w-xs rounded-lg bg-white p-6 shadow dark:bg-dark-2 lg:static lg:block lg:w-auto lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"}`}
            >
              <ul className="block lg:flex lg:space-x-4">
                <ListItemWithDropdown NavLink="/#">Solutions and Services</ListItemWithDropdown>
                <ListItemWithDropdown NavLink="/#">Resources</ListItemWithDropdown>
                <ListItem NavLink="/#">Switch to Mailchimp</ListItem>
                <ListItem NavLink="/#">Pricing</ListItem>
                <ListItem NavLink="/#">Sales: +1 (800) 315-5939</ListItem>
                <div className="flex flex-col space-y-4 mt-6 lg:hidden">
                  <a
                    href="#"
                    className="text-black text-lg font-bold border border-black px-4 py-2 rounded-full transition hover:bg-gray-100"
                  >
                    Log in
                  </a>
                  <a
                    href="#"
                    className="bg-yellow-300 text-lg font-bold text-black border border-black px-4 py-2 rounded-full transition hover:bg-yellow-400"
                  >
                    Sign up
                  </a>
                </div>
              </ul>
            </nav>
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <a
                href="#"
                className="text-black font-bold border border-black px-6 py-4 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
              >
                Log in
              </a>
              <a
                href="#"
                className="bg-yellow-400 text-black font-bold border border-black px-4 py-4 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};

const ListItemWithDropdown = ({ children, NavLink }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <li className="relative">
      <a
        href={NavLink}
        onMouseEnter={() => setOpenDropdown(true)}
        onMouseLeave={() => setOpenDropdown(false)}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
      >
        <span>{children}</span>
        <ChevronDown size={20} className="ml-1 mt-1" />
      </a>
      {openDropdown && (
        <div className="absolute top-full left-0 bg-white shadow-md mt-2 py-2 w-full">
          <a href="/#" className="block px-4 py-2 hover:bg-gray-100">Dropdown Item 1</a>
          <a href="/#" className="block px-4 py-2 hover:bg-gray-100">Dropdown Item 2</a>
          <a href="/#" className="block px-4 py-2 hover:bg-gray-100">Dropdown Item 3</a>
        </div>
      )}
    </li>
  );
};
