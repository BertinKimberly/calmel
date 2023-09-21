import axios from "axios";

const host = "http://localhost:3001";

export const loginRoute = `${host}/auth/login`;
export const registerRoute = `${host}/auth/register`;
export const logoutRoute = `${host}/auth/logout/:id`;
export const displayUsersRoute = `${host}/auth/users`;
export const updateRoute = `${host}/auth/update`;
export const deleteRoute = `${host}/auth/delete`;

export const fetchUsers = () => {
   return axios
      .get(displayUsersRoute)
      .then((res) => {
         return res;
      })
      .catch((error) => {
         console.log(error);
      });
};
