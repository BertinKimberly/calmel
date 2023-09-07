import React, { useState } from "react";
import "./navbar.css";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
   const [isNavShowing, setIsNavShowing] = useState(false);
   return (
      <nav>
         <div className='container nav__container'>
            <Link
               to='/'
               className='logo'
               onClick={() => setIsNavShowing(false)}
            >
               BRT
            </Link>
            <ul
               className={`nav__links ${
                  isNavShowing ? "show__nav" : "hide__nav"
               }`}
            >
               {links.map(({ name, path }, index) => (
                  <li
                     key={index}
                     className={name === "Login" ? "login-link" : ""}
                  >
                     <NavLink
                        to={path}
                        className={({ isActive }) =>
                           isActive ? "active-nav" : ""
                        }
                        onClick={() => setIsNavShowing((prev) => !prev)}
                     >
                        {name}
                     </NavLink>
                  </li>
               ))}
            </ul>
            <button
               className='nav__toggle-btn'
               onClick={() => setIsNavShowing((prev) => !prev)}
            >
               {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
            </button>
         </div>
      </nav>
   );
};

export default Navbar;
