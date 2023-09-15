import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateRoute } from "../utils/ApiRoutes";
import { styled } from "styled-components";
import { useState } from "react";

const UpdateForm = ({ id, showUpdateUser, setIsShowUpdate }) => {
   const [values, setValues] = useState({
      username: "",
      email: "",
      role: "",
      password: "",
   });
   const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
   };
   const validateForm = () => {
      const { username, email, role, password } = values;
      if (username === "" || email === "" || role === "" || password === "") {
         toast.error("username,email and password are required", toastOptions);
         return false;
      }
      if (username < 3) {
         toast.error(
            "username should be greater than 3 characters",
            toastOptions
         );
         return false;
      }

      return true;
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (validateForm()) {
         const { email, username, role, password } = values;
         const { data } = await axios.put(`${updateRoute}/${id}`, {
            username,
            email,
            role,
            password,
         });
         console.log(data);
         if (data.status === false) {
            toast.error(data.message, toastOptions);
         }
         if (data.status === true) {
            showUpdateUser();
         }
      }
   };
   const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
   };
   return (
      <Container>
         <div className='container register__container update-form'>
            <form onSubmit={(event) => handleSubmit(event)}>
               <div>
                  <label htmlFor='username'>Username</label>
                  <input
                     type='text'
                     name='username'
                     onChange={(e) => handleChange(e)}
                     placeholder='Enter your username'
                  />
               </div>
               <div>
                  <label htmlFor='email'>Email</label>
                  <input
                     type='text'
                     name='email'
                     onChange={(e) => handleChange(e)}
                     placeholder='Enter your email'
                  />
               </div>
               <div>
                  <label htmlFor='role'>Role</label>
                  <input
                     type='text'
                     name='role'
                     onChange={(e) => handleChange(e)}
                     placeholder='Enter your role'
                  />
               </div>
               <div>
                  <label htmlFor='password'>Password</label>
                  <input
                     type='password'
                     name='password'
                     onChange={(e) => handleChange(e)}
                     placeholder='Enter your email'
                  />
               </div>
               <div>
                  <button
                     type='submit'
                     className='form-btn'
                  >
                     Update
                  </button>
               </div>
               <div>
                  <h5 onClick={() => setIsShowUpdate(false)}>Close</h5>
               </div>
            </form>
            <ToastContainer />
         </div>
      </Container>
   );
};
export default UpdateForm;

const Container = styled.div`
   h5 {
      color: var(--color-primary);
      cursor: pointer;
   }
   .update-form {
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translate(-50%);
      display: grid;
      place-items: center;
      padding: 2rem 0;
   }
   form {
      width: 50%;
      background: white;
   }
`;
