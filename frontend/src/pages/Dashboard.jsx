import React from "react";
import {
   FaBell,
   FaHome,
   FaComment,
   FaUsers,
   FaMusic,
   FaUserSlash,
} from "react-icons/fa";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Users from "../components/Users";

const Dashboard = () => {
   return (
      <Container>
         <nav>
            <div className='container dashboard-header'>
               <Link to='/'>Calmel</Link>
               <h4>Calmel's dashboard</h4>
               <div className='head-icons'>
                  <span>
                     <FaComment />
                  </span>
                  <span>
                     <FaBell />
                  </span>
               </div>
            </div>
         </nav>
         <div className='sidebar'>
            <div>
               <FaHome />
               <small>Home</small>
            </div>
            <Link to='/users'>
               <div>
                  <FaUsers />
                  <small>Users</small>
               </div>
            </Link>
            <Link to='/choirs'>
               <div>
                  <FaMusic />
                  <small>Choirs</small>
               </div>
            </Link>
            <Link to='/ushers'>
               <div>
                  <FaUserSlash />
                  <small>Ushers</small>
               </div>
            </Link>
         </div>

         <div className='container main-container'>
            <div className='overview-container'>
               <h1>Dashboard</h1>
               <div className='overview-cards'>
                  <Card className='overview-card'>
                     <span>
                        <FaUsers />
                     </span>
                     <p>400</p>
                     <small>Users</small>
                  </Card>
                  <Card className='overview-card'>
                     <span>
                        <FaMusic />
                     </span>
                     <p>3</p>
                     <small>Choirs</small>
                  </Card>
                  <Card className='overview-card'>
                     <span>
                        <FaUsers />
                     </span>
                     <p>40</p>
                     <small>ushers</small>
                  </Card>
               </div>
            </div>
            <div className='all-users'>
               <h4>All Users:</h4>
               <Users />
            </div>
         </div>
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
   .head-icons {
      display: flex;
      gap: 1rem;
   }
   .overview-container {
      width: 90%;
      margin-top: 0;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
   }
   .main-container {
      margin-top: 100px;
      margin-left: 100px;
      height: 100%;
      width: 100%;
      overflow: scroll;
   }
   .overview-cards {
      display: flex;
      gap: 2rem;
   }
   .overview-card {
      width: 10rem;
      padding: 1rem 0;
   }
   h4 {
      margin-left: 2rem;
   }
`;
