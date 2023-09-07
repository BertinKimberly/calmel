import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import UserPage from "./pages/Userpage";
import About from "./pages/About";
const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/'
               element={<Home />}
            />
            <Route
               path='/about'
               element={<About />}
            />
            <Route
               path='/contact'
               element={<Contact />}
            />

            <Route
               path='/plans'
               element={<Plans />}
            />
            <Route
               path='/login'
               element={<Login />}
            />
            <Route
               path='/register'
               element={<Register />}
            />
            <Route
               path='/userpage'
               element={<UserPage />}
            />
            <Route
               path='*'
               element={<NotFound />}
            />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
