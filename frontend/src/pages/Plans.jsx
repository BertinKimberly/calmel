import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { plans } from "../data";
import HeaderImage from "../images/post3.jpeg";
import Card from "../UI/Card";
import { styled } from "styled-components";
const Plans = () => {
   return (
      <>
         <Navbar />
         <Header
            title='Membership plans'
            image={HeaderImage}
         >
            aquo eos eaque saepe. Id magni repellat iste, maiores labore
            reiciendis asperiores.
         </Header>
         <Container>
            <section className='plans'>
               <div className='container plans__container'>
                  {plans.map(({ id, name, desc, price, features }) => (
                     <Card
                        key={id}
                        className='plan'
                     >
                        <h3>{name}</h3>
                        <small>{desc}</small>
                        <h1>{`$${price}`}</h1>
                        <h2>/mo</h2>
                        <h4>Features</h4>
                        {features.map(({ feature, available, index }) => (
                           <p
                              key={index}
                              className={!available ? "disabled" : ""}
                           >
                              {feature}
                           </p>
                        ))}
                        <button className='btn lg'>Choose Plan</button>
                     </Card>
                  ))}
               </div>
            </section>
         </Container>
         <Footer />
      </>
   );
};

export default Plans;

const Container = styled.div`
   .plans__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
   }
   .plans h3 {
      margin-bottom: 0.8rem;
   }
   .plans small {
      margin-bottom: 2rem;
   }
   .plans h1 {
      color: var(--color-primary);
      display: inline;
   }
   .plans h2 {
      display: inline;
      color: var(--color-gray-400);
   }

   .plans h4 {
      margin-top: 2rem;
   }
   .plans p {
      margin-top: 1rem;
      color: var(--color-gray-100);
   }
   .plans p.disabled {
      color: var(--color-gray-400);
   }
   .plans button {
      margin-top: 3rem;
   }
   /* 
MEDIA QUERIES (medium screens) */

   @media screen and (max-width: 1024px) {
      .plans__container {
         grid-template-columns: 1fr 1fr;
         gap: 2rem;
      }
   }

   /* 
MEDIA QUERIES (medium screens) */

   @media screen and (max-width: 600px) {
      .plans__container {
         grid-template-columns: 1fr;
      }
      .plans {
         width: 90%;
         margin-inline: auto;
      }
   }
`;
