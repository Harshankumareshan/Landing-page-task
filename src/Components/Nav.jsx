import React, { useState } from "react";
import { ChevronDown } from 'react-feather'; // Import ChevronDown icon from Boxicons

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark sticky top-0 z-50`}>
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="w-80 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img src="\logoo.PNG" alt="log" className="wh-12" />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden text-black border border-black`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white border border-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white border border-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white border border-black"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItemWithDropdown NavLink="/#">Solutions and Services</ListItemWithDropdown>
                  <ListItemWithDropdown NavLink="/#">Resources</ListItemWithDropdown>
                  <ListItem NavLink="/#">Switch to Mailchimp</ListItem>
                  <ListItem NavLink="/#">Pricing</ListItem>
                  <ListItem NavLink="/#">Sales:+1(800)315-5939</ListItem>
                  <div className="flex items-center justify-end space-x-4 mt-6 lg:hidden">
                    <a
                      href="#"
                      className="text-black text-lg font-bold border border-black px-4 py-2 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
                    >
                      Log in
                    </a>
                    <a
                      href="#"
                      className="bg-yellow-300 text-lg font-bold text-black border border-black px-4 py-2 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
                    >
                      Sign up
                    </a>
                  </div>
                </ul>
              </nav>
            </div>
            <div className="hidden space-x-4 mr-0 pr-16 sm:flex lg:pr-0">
              <button
                href="#"
                className="text-black text-lg font-bold border border-black px-8 py-6 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
              >
                Log in
              </button>
              <button
    className="bg-yellow-400 border border-black text-black font-bold py-2 px-8 rounded-full transition duration-600 transform hover:translate-y-4 hover:shadow-inset-b-black hover:shadow-xl"
  >
    Sign Up
  </button>
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
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};

const ListItemWithDropdown = ({ children, NavLink }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <li className="relative">
        <a
          href={NavLink}
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
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
    </>
  );
};

      
    