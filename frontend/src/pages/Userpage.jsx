import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   FaBars,
   FaBell,
   FaBible,
   FaHome,
   FaMusic,
   FaPenAlt,
   FaSearch,
   FaUpload,
   FaVideo,
   FaYoutubeSquare,
} from "react-icons/fa";
import { styled } from "styled-components";

import { SiChatbot, SiHelpdesk, SiMessenger, SiViadeo } from "react-icons/si";
import ProfileWidget from "../components/ProfileWidget";
const Userpage = () => {
   const navigate = useNavigate();
   const [currentUser, setCurrentUser] = useState("");
   const [showMenu, setShowMenu] = useState(false);
   const [isShowProfile, setIsShowProfile] = useState(false);
   useEffect(() => {
      if (!localStorage.getItem("current-user")) {
         navigate("/login");
      } else setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
   }, []);

   const showProfile = () => {
      setIsShowProfile((prev) => !prev);
   };
   return (
      <Container>
         <nav>
            <div className='container nav__container'>
               <div className='left-side'>
                  <FaBars onClick={() => setShowMenu((prev) => !prev)} />
                  <div className='logo'>BRT</div>
               </div>

               <div className='searchbar'>
                  <input type='text' />
                  <div className='srch'>
                     <FaSearch color='white' />
                  </div>
               </div>
               <div className='right-side'>
                  <div className='upload'>
                     <FaUpload />
                  </div>
                  <div className='notifications'>
                     <FaBell />
                  </div>
                  <div
                     className='user'
                     onClick={showProfile}
                  >
                     {currentUser.toUpperCase().split("")[0]}
                  </div>
               </div>
            </div>
            {isShowProfile && (
               <ProfileWidget
                  currentUser={currentUser}
                  showProfile={showProfile}
               />
            )}
         </nav>
         {showMenu ? (
            <div className='sidebar'>
               <div>
                  <FaHome />
                  <small>Home</small>
               </div>
               <div>
                  <FaVideo />
                  <small>Reels</small>
               </div>
               <div>
                  <FaYoutubeSquare />
                  <small>Videos</small>
               </div>
            </div>
         ) : (
            <div className='detailled-sidebar'>
               <section>
                  <div>
                     <FaHome />
                     <small>Home</small>
                  </div>
                  <div>
                     <FaVideo />
                     <small>Reels</small>
                  </div>
                  <div>
                     <FaYoutubeSquare />
                     <small>Videos</small>
                  </div>
               </section>
               <section>
                  <h5>Explore</h5>
                  <div>
                     <SiChatbot />
                     <small>Chatbot</small>
                  </div>
                  <div>
                     <FaBible />
                     <small>Bible</small>
                  </div>
                  <div>
                     <SiViadeo />
                     <small>Movies</small>
                  </div>
                  <div>
                     <FaPenAlt />
                     <small>BRT notes</small>
                  </div>
                  <div>
                     <SiMessenger />
                     <small>BRT chat</small>
                  </div>
                  <div>
                     <FaMusic />
                     <small>Music</small>
                  </div>
               </section>
               <section>
                  <h5>More info</h5>
                  <div>
                     <SiHelpdesk />
                     <small>Home</small>
                  </div>
                  <div>
                     <FaVideo />
                     <small>Reels</small>
                  </div>
                  <div>
                     <FaYoutubeSquare />
                     <small>Videos</small>
                  </div>
               </section>
               <section>
                  <div>
                     <FaHome />
                     <small>Home</small>
                  </div>
                  <div>
                     <FaVideo />
                     <small>Reels</small>
                  </div>
                  <div>
                     <FaYoutubeSquare />
                     <small>Videos</small>
                  </div>
               </section>
            </div>
         )}
      </Container>
   );
};

export default Userpage;

const Container = styled.div`
   .left-side {
      width: 100px;
      margin-right: 1rem;
      display: flex;
      align-items: center;
   }

   .logo {
      margin-left: 0.5rem;
   }
   .searchbar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      max-width: 600px;
   }
   .searchbar input {
      width: 80%;
      background: transparent;
      padding: 0.7rem;
      border: 1px solid var(--color-secondary);
      border-radius: 2rem 0 0 2rem;
      color: var(--color-gray-100);
   }
   .searchbar .srch {
      cursor: pointer;
      background: transparent;
      padding: 0.7rem;
      border: 1px solid var(--color-secondary);
      border-radius: 0 2rem 2rem 0;
      display: grid;
      place-items: center;
   }

   .right-side {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 0.4rem;
      margin-left: 1rem;
   }
   .right-side div {
      cursor: pointer;
      margin: 0 1rem;
   }
   .user {
      background: transparent;
      cursor: pointer;
      border: 1px solid var(--color-secondary);
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: var(--transition);
   }
   .user:hover {
      background: var(--color-secondary);
      color: black;
      font-weight: bold;
   }
   section div small {
      margin-left: 1rem;
   }
   section div h5 {
      margin-bottom: 2rem;
   }
   ::-webkit-scrollbar {
      display: none;
   }
   /* MEDIA QUERIES */
   /* ==========MEDIUM SCREENS=========== */
   @media screen and (max-width: 1024px) {
      .left-side {
         width: 50px;
         margin-right: 0;
      }
      .right-side {
         margin-left: 0.5rem;
         width: 150px;
      }
      .right-side div {
         margin: 0 0.5rem;
      }
   }

   /* ==========VERY SMALL SCREENS=========== */
   @media screen and (max-width: 400px) {
      .right-side div {
         margin: 0 0.3rem;
      }
      .right-side {
         width: 100px;
         margin-left: 0;
      }
      .searchbar input {
         padding: 0.5rem;
      }
      .searchbar .srch {
         padding: 0.5rem;
      }
      .user {
         width: 1rem;
         height: 1rem;
      }
   }
`;
