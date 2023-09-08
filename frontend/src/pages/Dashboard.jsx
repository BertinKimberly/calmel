import React, { useState } from "react";
import {
   FaBell,
   FaBible,
   FaHome,
   FaComment,
   FaYoutubeSquare,
   FaUsers,
   FaAppStore,
   FaVideo,
} from "react-icons/fa";
import { SiChatbot, SiHelpdesk, SiMessenger, SiViadeo } from "react-icons/si";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Dashboard = () => {
   const [users, setUsers] = useState([]);
   return (
      <Container>
         <nav>
            <div className='container dashboard-header'>
               <Link to='/'>Calmel</Link>
               <h4>Calmel's dashboard</h4>
               <div className='nav-icons'>
                  <span>
                     <FaComment />
                  </span>
                  <span>
                     <FaBell />
                  </span>
               </div>
            </div>
         </nav>
         <main>
               <div className='sidebar'>
                  <div>
                     <FaHome />
                     <small>Home</small>
                  </div>
                  <div>
                     <FaUsers />
                     <small>Users</small>
                  </div>
                  <div>
                     <FaVideo/>
                     <small>Videos</small>
                  </div>
               </div>
            
         </main>
      </Container>
   );
};

export default Dashboard;

const Container = styled.div`
   .dashboard-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .nav-icons {
      display: flex;
      gap: 1rem;
   }
`;
