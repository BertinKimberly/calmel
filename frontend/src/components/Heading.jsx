import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Heading = ({ icon, name }) => {
   return (
      <Container>
         <header className='login__heading'>
            <h1>
               <Link to='/'>BRT</Link>
            </h1>
            <div>
               {icon}
               <p>{name}</p>
            </div>
         </header>
      </Container>
   );
};

export default Heading;

const Container = styled.div`
   .login__heading {
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      height: 120px;
      align-items: center;
      background: var(--color-primary);
   }
   .login__heading div {
      display: flex;
      align-items: center;
   }
   .login__heading div p {
      margin-left: 1rem;
   }
   h1 a {
      transition: var(--transition);
   }
   h1 a:hover {
      text-decoration: underline;
      color: var(--color-secondary);
   }
`;
