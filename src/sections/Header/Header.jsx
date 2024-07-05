import React from "react";
import { Link, NavLink } from "react-router-dom";
import lionLogo from "../../assets/lionlogo.jpg";

function Header() {
  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className=" bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex flex-center">
              <img src={lionLogo} alt="logo" className=" w-12 h-12 rounded-full" />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                to="https://www.linkedin.com/in/paras-shrestha-37a333266/"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Linkdein
              </Link>
              <Link
                to="https://github.com/parasnever"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Github
              </Link>
            </div>

            <div
              className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id=" mobile-menu-2"
            >
              <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`;
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }
                                        border-b border-gray-100 $hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }
                                        border-b border-gray-100 $hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact-us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
