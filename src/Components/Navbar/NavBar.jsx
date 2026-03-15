import React from 'react';

import logo from "../../Image/logo.png"
import { Link, NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className="navbar bg-white text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/appointList"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                }
              >
                My Booking
              </NavLink>
            </li>
            <li><a>Blogs</a></li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                }
              >
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
        <img className='w-8 h-8' src={logo} alt="" />

        <Link to="/" className="btn btn-ghost text-xl"> Phudu</Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointList"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-500"
              }
            >
              My Booking
            </NavLink>
          </li>
          <li><a>Blogs</a></li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-500"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded rounded-xl">Emergency</a>
      </div>
    </div>
  );
};

export default NavBar;