import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderImage from "../images/p13.jpeg";
import StoryImage from "../images/p11.jpeg";
import VisionImage from "../images/p9.jpeg";
import MissionImage from "../images/p10.jpeg";
import { styled } from "styled-components";
const About = () => {
   return (
      <>
         <Navbar />
         <Header
            title='About Us'
            image={HeaderImage}
         >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum
            beatae ipsum ab quo perspiciatis veritatis praesentium soluta!
            Voluptatem distinctio, quisquam beatae rerum dignissimos minus!
            Reiciendis numquam sit necessitatibus iure?
         </Header>
         <Container>
            <section className='about__story'>
               <div className='container about__story-container'>
                  <div className='about__section-image'>
                     <img
                        src={StoryImage}
                        alt='Our Story Pic '
                     />
                  </div>
                  <div className='about__section-content'>
                     <h1>Our Story</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum distinctio, aperiam cupiditate enim
                        numquam dignissimos eos ipsum excepturi facere.
                        Possimus.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum distinctio, aperiam cupiditate enim
                        numquam dignissimos eos ipsum excepturi facere.
                        Possimus.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                     </p>
                  </div>
               </div>
            </section>
            <section className='about__vision'>
               <div className='container about__vision-container'>
                  <div className='about__section-content'>
                     <h1>Our Vision</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum distinctio, aperiam cupiditate enim
                        numquam dignissimos eos ipsum excepturi facere.
                        Possimus.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum distinctio, aperiam cupiditate enim
                        numquam dignissimos eos ipsum excepturi facere.
                        Possimus.
                     </p>
                  </div>
                  <div className='about__section-image'>
                     <img
                        src={VisionImage}
                        alt='Our Vision Pic'
                     />
                  </div>
               </div>
            </section>
            <section className='about__mission'>
               <div className='container about__mission-container'>
                  <div className='about__section-image'>
                     <img
                        src={MissionImage}
                        alt='Our Mission Pic'
                     />
                  </div>
                  <div className='about__section-content'>
                     <h1>Our Mission</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum distinctio, aperiam cupiditate enim
                        numquam dignissimos eos ipsum excepturi facere.
                        Possimus.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum distinctio, aperiam cupiditate enim
                        numquam dignissimos eos ipsum excepturi facere.
                        Possimus.
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                     </p>
                  </div>
               </div>
            </section>
         </Container>
         <Footer />
      </>
   );
};

export default About;

const Container = styled.div`
   .about__section-image {
      border-radius: 50%;
      overflow: hidden;
      transform: skew(15deg);
      transition: var(--transition);
   }
   .about__section-image:nth-child(2) {
      transform: skew(-15deg);
   }
   .about__section-image:hover {
      transform: skew(0);
   }

   .about__section-content h1 {
      margin-bottom: 2rem;
   }

   .about__section-content p {
      margin-bottom: 4rem;
   }

   .about__story-container {
      display: grid;
      grid-template-columns: 40% 50%;
      gap: 10%;
   }
   .about__mission-container {
      display: grid;
      grid-template-columns: 40% 50%;
      gap: 10%;
   }

   .about__vision-container {
      display: grid;
      grid-template-columns: 50% 40%;
      gap: 10%;
   }

   /* MEDIA QUERIES (medium screens) */
   @media screen and (max-width: 1024px) {
      .about__section-image {
         width: 60%;
      }
      .about__section-content h1 {
         margin-bottom: 1.2rem;
      }
      .about__story-container,
      .about__vision-container,
      .about__mission-container {
         grid-template-columns: 1fr;
         gap: 3rem;
      }
      .about__vision .about__section-image {
         grid-row: 1;
      }
   }

   /* MEDIA QUERIES (small screens) */
   @media screen and (max-width: 600px) {
      .about__section-image {
         width: 80%;
         margin-inline: auto;
      }

      .about__story-container,
      .about__vision-container,
      .about__mission-container {
         gap: 2rem;
      }
   }
`;
