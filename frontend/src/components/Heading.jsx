import React from "react";
import "./heading.css";
import { Link } from "react-router-dom";
const Heading = ({ icon, name }) => {
   return (
      <header className='login__heading'>
         <h1>
            <Link to='/'>BRT</Link>
         </h1>
         <div>
            {icon}
            <p>{name}</p>
         </div>
      </header>
   );
};

export default Heading;
