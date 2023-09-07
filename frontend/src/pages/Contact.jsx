import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderImage from "../images/p1.jpeg";
import { styled } from "styled-components";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
   return (
      <>
         <Navbar />
         <Header
            title='Get In Touch'
            image={HeaderImage}
         >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio
            explicabo id illum vero rerum soluta facilis officia, possimus
            reiciendis.
         </Header>
         <Container>
            <section className='contact'>
               <div className='container contact__container'>
                  <div className='contact__wrapper'>
                     <a
                        href='mailto:iradukundabertin082@gmail.com'
                        target='_blank'
                        rel='noreferrer noopener'
                     >
                        <MdEmail />
                     </a>
                     <a
                        href='https://m.me/bertinIradukunda'
                        target='_blank'
                        rel='noreferrer noopener'
                     >
                        <BsMessenger />
                     </a>
                     <a
                        href='https://wa.me/+250079000000'
                        target='_blank'
                        rel='noreferrer noopener'
                     >
                        <IoLogoWhatsapp />
                     </a>
                  </div>
               </div>
            </section>
         </Container>
         <Footer />
      </>
   );
};

export default Contact;

const Container = styled.div`
   .contact__container {
      display: grid;
      place-items: center;
      height: 60vh;
   }

   .contact__wrapper {
      width: fit-content;
      display: flex;
      gap: 2rem;
   }

   .contact__wrapper a {
      background: var(--color-primary);
      font-size: 2rem;
      border: 2px solid transparent;
      transition: var(--transition);
      padding: 2rem;
      border-radius: 1.5rem;
   }

   .contact__wrapper a:hover {
      background: transparent;
      border-color: var(--color-gray-100);
   }

   /* MEDIA QUERIES(small screens) */

   @media screen and (max-width: 600px) {
      .contact__wrapper {
         gap: 1.5rem;
      }
      .contact__wrapper a {
         padding: 1rem;
         font-size: 1.2rem;
         border-radius: 1rem;
      }
   }
`;
