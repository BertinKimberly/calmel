import { SiOpenaigym } from "react-icons/si";
export const links = [
   { name: "Home", path: "/" },
   { name: "About", path: "/about" },
   { name: "Contact", path: "/contact" },
   { name: "Login", path: "/login" },
];

export const programs = [
   {
      id: 1,
      icon: <SiOpenaigym />,
      title: "Program One",
      info: "This is the damthat our Lord has made.We will rejoice!",
      path: "/programs/111",
   },
   {
      id: 2,
      icon: <SiOpenaigym />,
      title: "Program Two",
      info: "This is the damthat our Lord has made.We will rejoice!",
      path: "/programs/222",
   },
   {
      id: 3,
      icon: <SiOpenaigym />,
      title: "Program Three",
      info: "This is the damthat our Lord has made.We will rejoice!",
      path: "/programs/333",
   },
   {
      id: 4,
      icon: <SiOpenaigym />,
      title: "Program Four",
      info: "This is the damthat our Lord has made.We will rejoice!",
      path: "/programs/444",
   },
];

export const values = [
   {
      id: 1,
      icon: <SiOpenaigym />,
      title: "Value One",
      desc: "This is my value and it make me happy.",
   },
   {
      id: 2,
      icon: <SiOpenaigym />,
      title: "Value Two",
      desc: "This is my value and it make me happy.",
   },
   {
      id: 3,
      icon: <SiOpenaigym />,
      title: "Value Three",
      desc: "This is my value and it make me happy.",
   },
   {
      id: 4,
      icon: <SiOpenaigym />,
      title: "Value Four",
      desc: "This is my value and it make me happy.",
   },
];

export const faqs = [
   {
      id: 1,
      question: "How Often should I exercise?",
      answer:
         "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque facilis doloribus in? ",
   },
   {
      id: 2,
      question: "What time of the day is best to work out?",
      answer:
         "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque facilis doloribus in? ",
   },
   {
      id: 3,
      question: "With whom ca I make exercises?",
      answer:
         "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque facilis doloribus in? ",
   },
   {
      id: 4,
      question: "Are exercises important for our body?",
      answer:
         "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque facilis doloribus in? ",
   },
   {
      id: 5,
      question: "Should I do strength training,cardio or both",
      answer:
         "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque facilis doloribus in? ",
   },
   {
      id: 6,
      question: "Should I lift weights for strength training?",
      answer:
         "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque facilis doloribus in? ",
   },
];

export const testimonials = [
   {
      id: 1,
      name: "Diana Ayi",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil modi placeat, ex repellat, quia a eius blanditiis facere aliquam tenetur ducimus sequi ad iure dolorem qui iusto molestiae animi.",
      job: "Student",
      avatar: require("./images/p5.jpeg"),
   },
   {
      id: 2,
      name: "James Bond",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil modi placeat, ex repellat, quia a eius blanditiis facere aliquam tenetur ducimus sequi ad iure dolorem qui iusto molestiae animi.",
      job: "Teacher",
      avatar: require("./images/p6.jpeg"),
   },
   {
      id: 3,
      name: "Peter Quill",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil modi placeat, ex repellat, quia a eius blanditiis facere aliquam tenetur ducimus sequi ad iure dolorem qui iusto molestiae animi.",
      job: "Student",
      avatar: require("./images/p7.jpeg"),
   },
   {
      id: 4,
      name: "Daniel Vinyo",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil modi placeat, ex repellat, quia a eius blanditiis facere aliquam tenetur ducimus sequi ad iure dolorem qui iusto molestiae animi.",
      job: "Student",
      avatar: require("./images/p8.jpeg"),
   },
   {
      id: 5,
      name: "Michael G Jordan",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil modi placeat, ex repellat, quia a eius blanditiis facere aliquam tenetur ducimus sequi ad iure dolorem qui iusto molestiae animi.",
      job: "Student",
      avatar: require("./images/p9.jpeg"),
   },
];

export const plans = [
   {
      id: 1,
      name: "Silver Package",
      desc: "This package is perfect for beginners who need constant help",
      price: 29.99,
      features: [
         { feature: "First Feature", available: true },
         { feature: "Second Feature", available: true },
         { feature: "Third Feature", available: true },
         { feature: "Fourth Feature", available: true },
         { feature: "Fifth Feature", available: false },
         { feature: "Sixth Feature", available: false },
         { feature: "Seventh Feature", available: false },
         { feature: "Eight Feature", available: false },
         { feature: "Nineth Feature", available: false },
         { feature: "Tenth ture", available: false },
         { feature: "Eleventh Feature", available: false },
      ],
   },
   {
      id: 2,
      name: "Gold Package",
      desc: "This package is perfect for beginners who know what they are doing",
      price: 49.99,
      features: [
         { feature: "First Feature", available: true },
         { feature: "Second Feature", available: true },
         { feature: "Third Feature", available: true },
         { feature: "Fourth Feature", available: true },
         { feature: "Fifth Feature", available: true },
         { feature: "Sixth Feature", available: true },
         { feature: "Seventh Feature", available: true },
         { feature: "Eight Feature", available: false },
         { feature: "Nineth Feature", available: false },
         { feature: "Tenth ture", available: false },
         { feature: "Eleventh Feature", available: false },
      ],
   },
   {
      id: 3,
      name: "Platinum Package",
      desc: "This package is perfect for busy people who need home services",
      price: 89.99,
      features: [
         { feature: "First Feature", available: true },
         { feature: "Second Feature", available: true },
         { feature: "Third Feature", available: true },
         { feature: "Fourth Feature", available: true },
         { feature: "Fifth Feature", available: true },
         { feature: "Sixth Feature", available: true },
         { feature: "Seventh Feature", available: true },
         { feature: "Eight Feature", available: true },
         { feature: "Nineth Feature", available: true },
         { feature: "Tenth ture", available: true },
         { feature: "Eleventh Feature", available: true },
      ],
   },
];

const Trainer1 = require("./images/p1.jpeg");
const Trainer2 = require("./images/p2.jpeg");
const Trainer3 = require("./images/p3.jpeg");
const Trainer4 = require("./images/p4.jpeg");
const Trainer5 = require("./images/p5.jpeg");
const Trainer6 = require("./images/p6.jpeg");
export const trainers = [
   {
      id: 1,
      image: Trainer1,
      name: "James K",
      job: "Aerobic Trainer",
      socials: [
         "https://instagram.com",
         "https://twitter.com",
         "https://facebook.com",
         "https://linkedin.com",
      ],
   },
   {
      id: 2,
      image: Trainer2,
      name: "Dwayne Johnson",
      job: "Speed Trainer",
      socials: [
         "https://instagram.com",
         "https://twitter.com",
         "https://facebook.com",
         "https://linkedin.com",
      ],
   },
   {
      id: 3,
      image: Trainer3,
      name: "Daniel Vinyo",
      job: "Flexibility Trainer",
      socials: [
         "https://instagram.com",
         "https://twitter.com",
         "https://facebook.com",
         "https://linkedin.com",
      ],
   },
   {
      id: 4,
      image: Trainer4,
      name: "James K",
      job: "Aerobic Trainer",
      socials: [
         "https://instagram.com",
         "https://twitter.com",
         "https://facebook.com",
         "https://linkedin.com",
      ],
   },
   {
      id: 5,
      image: Trainer5,
      name: "James K",
      job: "Aerobic Trainer",
      socials: [
         "https://instagram.com",
         "https://twitter.com",
         "https://facebook.com",
         "https://linkedin.com",
      ],
   },
   {
      id: 6,
      image: Trainer6,
      name: "James K",
      job: "Aerobic Trainer",
      socials: [
         "https://instagram.com",
         "https://twitter.com",
         "https://facebook.com",
         "https://linkedin.com",
      ],
   },
];
