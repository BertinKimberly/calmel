import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/p1.jpeg";
const MainHeader = () => {
   return (
      <header className='main__header'>
         <div className='container main__header-container'>
            <div className='main__header-left'>
               <h4>Welcome To The House Of The Almighty</h4>
               <h1>The Name Of The Church And Slogan</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quibusdam saepe possimus illo{" "}
               </p>
               <Link
                  to='/register'
                  className='btn lg'
               >
                  Join Us
               </Link>
            </div>
            <div className='main__header-right'>
               <div className='main__header-image'>
                  <img
                     src={Image}
                     alt='Main Header Image'
                  />
               </div>
            </div>
         </div>
      </header>
   );
};

export default MainHeader;
