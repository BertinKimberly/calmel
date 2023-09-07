import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const NotFound = () => {
   return (
      <Container>
         <div className='container notfound__container'>
            <h2>Page Not Found</h2>
            <Link
               to='/'
               className='btn'
            >
               Go Back Home
            </Link>
         </div>
      </Container>
   );
};

export default NotFound;

const Container = styled.div`
   .notfound__container {
      text-align: center;
      padding-top: 8rem;
   }

   .notfound__container .btn {
      margin-top: 2rem;
      display: inline-block;
   }
`;
