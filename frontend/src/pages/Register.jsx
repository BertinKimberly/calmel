import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Heading from "../components/Heading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { getRolesRoute, registerRoute } from "../utils/ApiRoutes";
const Register = () => {
   const navigate = useNavigate();
   const [roles, setRoles] = useState([]);
   useEffect(() => {
      if (localStorage.getItem("current-user")) {
         navigate("/userpage");
      }
   }, []);

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
         toast.error(
            "username,email,role and password are required",
            toastOptions
         );
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

   useEffect(() => {
      axios
         .get(getRolesRoute)
         .then((response) => {
            setRoles(response.data);
         })
         .catch((error) => {
            console.error("Error fetching roles:", error);
         });
   }, []);

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (validateForm()) {
         const { email, username, role, password } = values;
         const { data } = await axios.post(registerRoute, {
            username,
            email,
            roleName: role,
            password,
         });
         if (data.status === false) {
            toast.error(data.message, toastOptions);
         }
         if (data.status === true) {
            localStorage.setItem(
               "current-user",
               JSON.stringify(data.newUser.username)
            );

            navigate("/userpage");
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
         <div className='container register__container'>
            <Heading
               icon={<FaUser />}
               name='Register'
            />
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
                  <select
                     id='role'
                     name='role'
                     onChange={(e) => handleChange(e)}
                     required
                  >
                     <option value=''>Select a role</option>
                     {roles.map((role) => (
                        <option
                           key={role._id}
                           value={role.name}
                        >
                           {role.name}
                        </option>
                     ))}
                  </select>
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
                     Register
                  </button>
               </div>
               <div>
                  <small>Already have an account? </small>
                  <Link to='/login'>Login</Link>
               </div>
            </form>
            <ToastContainer />
         </div>
      </Container>
   );
};

export default Register;

const Container = styled.div`
   .register__container {
      margin-top: 9rem;
      display: grid;
      place-items: center;
      padding: 2rem;
      margin-bottom: 6rem;
   }

   .register__container h1 {
      margin-bottom: 1.2rem;
   }

   a {
      transition: var(--transition);
   }
   a:hover {
      color: var(--color-primary);
      text-decoration: underline;
      display: inline;
   }
   @media screen and (max-width: 600px) {
      .register__container {
         width: 100%;
         padding: 0.3rem;
      }
   }
`;
