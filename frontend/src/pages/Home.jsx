import React from "react";
import MainHeader from "../components/MainHeader";
import Programs from "../components/Programs";
import Values from "../components/Values";
import FAQs from "../components/FAQs";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
const Home = () => {
   return (
      <Container>
         <Navbar />
         <MainHeader />
         <Programs />
         <Values />
         <FAQs />
         <Testimonials />
         <Footer />
      </Container>
   );
};

export default Home;

const Container = styled.div`
   .main__header {
      height: calc(100vh-3rem);
      width: 100vw;
      display: grid;
      place-items: center;
      margin-top: 3rem;
   }

   .main__header-container {
      height: 100%;
      display: flex;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: space-between;
      gap: 6rem;
   }

   .main__header-left {
      margin-top: -3rem;
   }

   .main__header-left h4 {
      margin-bottom: 1rem;
      color: var(--color-secondary);
      font-weight: 400;
   }

   .main__header-left p {
      margin: 1rem 0 3.5rem;
      font-size: 1.1rem;
   }

   .main__header-right {
      display: flex;
      place-items: center;
      position: relative;
   }

   /* ============PROGRAMS======= */
   .progams {
      margin-top: 4rem;
   }
   .programs__wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      margin-top: 4rem;
   }
   .programs__program a {
      margin-top: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .programs__program:hover a {
      background: var(--color-secondary);
      color: var(--color-gray-600);
   }

   /* ============VALUES======= */

   .values__container {
      display: grid;
      grid-template-columns: 38% 50%;
      gap: 12%;
   }

   .values__image {
      filter: saturate(0.25);
      transition: var(--transition);
   }
   .values__image:hover {
      filter: saturate(1);
   }
   .values__right > p {
      margin: 1.5rem 0 5rem;
   }
   .values__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.4rem 2.4rem;
   }
   .card.values__value {
      padding-top: 3.5rem;
      text-align: left;
      position: relative;
   }
   .card.values__value span {
      position: absolute;
      top: -1.5rem;
   }

   /* ============FAQs======= */

   .faqs__wrapper {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem 5rem;
      align-items: flex-start;
   }
   .faq {
      background: var(--color-secondary);
      padding: 2rem;
      border-radius: 1rem;
      cursor: pointer;
   }
   .faq div {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .faq__icon {
      background: transparent;
      color: var(--color-gray-100);
      font-size: 1.5rem;
   }
   .faq p {
      margin-top: 1.5rem;
   }

   /* ============TESTIMONIALS======= */

   .testimonials {
      width: 50rem;
      margin-inline: auto;
   }
   .testimonials__head {
      justify-content: center;
   }
   .card.testimonial {
      position: relative;
      text-align: left;
      margin-top: 5rem;
   }
   .testimonial__avatar {
      width: 4rem;
      height: 4rem;
      border: 2px solid transparent;
      border-radius: 1.5rem;
      overflow: hidden;
      position: absolute;
      top: -2rem;
      box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.4);
      transition: var(--transition);
   }
   .testimonial:hover .testimonial__avatar {
      border-radius: 50%;
      border-color: var(--color-gray-400);
   }
   .testimonial__quote {
      font-style: italic;
      margin: 1rem 0 2rem;
   }
   .card small.testimonial__title {
      margin-top: 0.3rem;
   }
   .testimonials__btn-container {
      width: fit-content;
      margin: 2.5rem auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
   }
   .testimonials__btn {
      background: transparent;
      cursor: pointer;
   }
   .testimonials__btn svg {
      fill: var(--color-primary);
      font-size: 1.8rem;
      width: 3rem;
      height: 3rem;
   }

   /* MEDIA QUERIES(medium screens) */
   @media screen and (max-width: 1024px) {
      /*  MAIN HEADER */
      .main__header {
         height: fit-content;
         padding: 12rem 0;
      }
      .main__header-container {
         gap: 0;
      }
      .main__header-circle {
         width: 16rem;
         height: 16rem;
      }
      /* PROGRAMS */

      .programs__wrapper {
         grid-template-columns: 1fr 1fr;
      }

      /* VALUES */

      .values__container {
         grid-template-columns: 1fr;
         justify-content: center;
         gap: 4rem;
      }

      .values__image {
         display: none;
      }
      /* FAQs */

      .faqs__wrapper {
         grid-template-columns: 1fr;
      }

      /* TESTIMONIALS */
      .testimonials {
         width: 75%;
      }
   }

   /* MEDIA QUERIES (small screens) */

   @media screen and (max-width: 600px) {
      .main__header {
         margin-top: 0;
         padding: 12rem 0 0;
         height: 100vh;
      }
      .main__header-image,
      .main__header-circle {
         display: none;
      }
      .main__header-container {
         grid-template-columns: 1fr;
      }

      /* PROGRAMS */
      .programs__wrapper {
         grid-template-columns: 1fr;
         gap: 2rem;
         margin-top: 3rem;
      }
      .programs__program {
         width: 84%;
         margin: 0 auto;
      }

      /* VALUES */

      .values__wrapper {
         grid-template-columns: 1fr;
         gap: 3rem;
      }
      .card.values__value {
         width: 84%;
         margin-inline: auto;
      }

      /* FAQs */
      .faq__wrapper {
         gap: 1rem;
         margin-top: 3rem;
      }

      /* TESTIMONIALS */

      .testimonials {
         width: 100%;
      }
   }
`;
