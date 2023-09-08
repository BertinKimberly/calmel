import React, { useState } from "react";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { styled } from "styled-components";
const Navbar = () => {
   const [isNavShowing, setIsNavShowing] = useState(false);
   return (
      <Container>
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
      </Container>
   );
};

export default Navbar;

const Container = styled.div`
   .nav__toggle-btn {
      display: none;
   }
   .nav__container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
   }

   .logo {
      width: 7rem;
   }

   .nav__links {
      display: flex;
      gap: 3.5rem;
      align-items: center;
      transition: var(--transition);
   }
   .nav__links a:hover {
      color: var(--color-secondary);
   }

   .active-nav {
      position: relative;
   }
   .active-nav::after {
      content: "";
      display: block;
      width: 1.2rem;
      height: 0.8rem;
      background: var(--color-secondary);
      position: absolute;
      margin-top: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
   }

   .login-link a {
      color: var(--color-gray-100);
      background: transparent;
      border: 1px solid var(--color-secondary);
      border-radius: 1.2rem;
      padding: 0.5rem;
      transition: var(--transition);
   }
   .login-link a:hover {
      background: var(--color-gray-100);
   }
   /* MEDIA QUERIES */

   @media screen and (max-width: 1024px) {
      .nav__toggle-btn {
         display: inline-block;
         background: transparent;
         font-size: 1.8rem;
         cursor: pointer;
      }
      .nav__toggle-btn svg {
         color: var(--color-gray-100);
      }
      .nav__links {
         position: absolute;
         top: 100%;
         right: 0;
         flex-direction: column;
         gap: 0;
         perspective: 400px;
      }
      .active-nav,
      .active-nav::after {
         display: none;
      }
      .nav__links li {
         height: 4rem;
         width: 100%;
         box-shadow: -2rem 2rem 5rem rgba(0, 0, 0, 0.4);
         animation: navAnimation 600ms ease forwards;
         transform: rotate(90deg);
         opacity: 0;
         transform-origin: top;
      }
      .nav__links li:nth-child(2) {
         animation-delay: 200ms;
      }
      .nav__links li:nth-child(3) {
         animation-delay: 400ms;
      }
      .nav__links li:nth-child(4) {
         animation-delay: 600ms;
      }
      .nav__links li:nth-child(5) {
         animation-delay: 800ms;
      }
      .nav__links li:nth-child(6) {
         animation-delay: 1s;
      }
      @keyframes navAnimation {
         to {
            transform: rotateX(0);
            opacity: 1;
         }
      }
      .nav__links li a {
         background-color: var(--color-primary);
         height: 100%;
         width: 100%;
         display: flex;
         align-items: center;
         padding: 1rem 5rem 1rem 3rem;
      }
      .show__nav {
         display: flex;
      }
      .hide__nav {
         display: none;
      }
   }
`;
