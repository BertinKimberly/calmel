import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Tbody from "./Tbody";
import { displayUsersRoute } from "../utils/ApiRoutes";
import UpdateForm from "./UpdateForm";
const Users = () => {
   const [users, setUsers] = useState([]);
   const [userId, setUserId] = useState("");
   const [isShowUpdate, setIsShowUpdate] = useState(false);

   const showUpdateUser = (id) => {
      setUserId(id);
      setIsShowUpdate(true);
   };
   useEffect(() => {
      getUsers();
   }, []);
   const getUsers = async () => {
      const response = await axios.get(displayUsersRoute);
      setUsers(response.data);
   };
   return (
      <Container>
         <div className='container table-container'>
            <table>
               <thead>
                  <tr>
                     <th>Username</th>
                     <th>Email</th>
                     <th>role</th>
                     <th>Update a user</th>
                     <th>Delete a user</th>
                  </tr>
               </thead>
               {users ? (
                  users.map(({ _id, username, email, role }) => (
                     <Tbody
                        key={_id}
                        username={username}
                        email={email}
                        role={role}
                        showUpdateUser={() => showUpdateUser(_id)}
                        id={_id}
                     />
                  ))
               ) : (
                  <h4>No Users found</h4>
               )}
            </table>
         </div>
         {isShowUpdate && (
            <UpdateForm
               id={userId}
               setIsShowUpdate={setIsShowUpdate}
            />
         )}
      </Container>
   );
};

export default Users;

const Container = styled.div`
   .table-container {
      width: 100%;
      height: 100%;
      overflow: scroll;
      padding: 2rem;
   }
   table {
      border-collapse: collapse;
      width: 30%;
   }

   th,
   td {
      border: 1px solid var(--color-primary);
      text-align: left;
      padding: 1rem;
      min-width: 200px;
   }

   th {
      background-color: #f2f2f2;
   }
`;
