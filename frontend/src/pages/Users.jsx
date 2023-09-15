import React, { useEffect, useState } from "react";
import axios from "axios";
import { displayUsersRoute } from "../utils/ApiRoutes";
import Table from "../components/Table";
const Users = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      getUsers();
   }, []);
   const getUsers = async () => {
      const response = await axios.get(displayUsersRoute);
      setUsers(response.data);
      console.log(response);
   };
   return (
      <div className='container table-container'>
         {users ? (
            users.map(({ _id, username, email, role }) => (
               <Table
                  key={_id}
                  username={username}
                  email={email}
                  role={role}
               />
            ))
         ) : (
            <h4>No Users found</h4>
         )}
      </div>
   );
};

export default Users;
