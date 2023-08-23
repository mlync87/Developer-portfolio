import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Humanist Celebrant Business Website",
    icon: web,
  },
  {
    title: "To Do App",
    icon: mobile,
  },
  {
    title: "Humanist Group Website",
    icon: backend,
  },
  {
    title: "Personal Business Booking App",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Humanist Celebrant Website",
    company_name: "Mela Gra Humanist Celebrant Services",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2023",
    points: [
      "A local business website",
      "Clients are able to view details about the business",
      "Previous ceremonies",
      "Images of previously performed ceremonies",
      "An enquiry section where potential clients can send email queries",
    ],
  },
  {
    title: "Developer Portfolio",
    company_name: "Martin Lynch",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [
      "A Developer Portfolio showcasing skills in varying aspects of sofware developement",
      "Varying animations using TailwindCSS",
      "An email section for potential employers to contact myself",
      "Links to project github repositories",
    ],
  },
  {
    title: "Real Time Weather Application",
    company_name: "Martin Lynch",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023",
    points: [
      "A full stack weather application",
      "Enter location and app will return the current and future weather conditions",
      "Along with weather, the app will return a colloqial explaination",
      "Colloquial explaination will vary depending on the location in Ireland",
    ],
  },
  {
    title: "Todo Application",
    company_name: "Martin Lynch",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2023",
    points: [
      "A full stack Todo application",
      "Clients are able to enter details about tasks which will be stored and retrieved using a custom api",
      "Motivational messages appear upon completion of tasks",
      "Task list automatically creates a list of completed tasks a user can recall when they",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Martin was a delight to work with 10/10. Very efficient and professional",
    name: "Maria Quinn",
    designation: "Owner",
    company: "MelaQuinn Humanist celebrant services",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "This candidate showed up to the interview well prepared, with a VSCode IDE ready and prepared to complete the technical challenges in JavaScript ran using Node.",
    name: "Erin Sloan",
    designation: "Recruiter",
    company: "ESO",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I thoroughly enjoyed working with Martin. He really went above and beyond in all aspects. He will be sorely missed",
    name: "Stephanie Turkington",
    designation: "Manager - Previous Employer",
    company: "LaganValley Psychiatric Assessment Services",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
