import axios from "axios";
import React from "react";
import { FaPenAlt, FaTrash } from "react-icons/fa";
import { deleteRoute } from "../utils/ApiRoutes";

const Tbody = ({ id, username, email, role, showUpdateUser }) => {
   const deleteUser = async () => {
      try {
         await axios.delete(`${deleteRoute}/${id}`);
      } catch (error) {
         console.log({ message: error.message });
      }
   };
   return (
      <>
         <tbody>
            <tr>
               <td>{username}</td>
               <td>{email}</td>
               <td>{role}</td>
               <td>
                  <FaPenAlt onClick={showUpdateUser} />
               </td>
               <td>
                  <FaTrash onClick={deleteUser} />
               </td>
            </tr>
         </tbody>
      </>
   );
};

export default Tbody;
