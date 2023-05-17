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
    title: "Weddings",
    icon: web,
  },
  {
    title: "Naming Ceremonies",
    icon: mobile,
  },
  {
    title: "Vow Renewals",
    icon: backend,
  },
  {
    title: "Custom Ceremonies",
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
    title: "Naming Ceremony",
    company_name: "Some random jerk",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2022",
    points: [
      "I named some jerk baby and tolerated their stupid [arents for a day",
      "I uppercutted the parents for looking at me the wrong way",
      "I made custom made candles for naming, lighting etc",
      "I got a McDonalds on the way home which was pretty sweet",
    ],
  },
  {
    title: "Wedding",
    company_name: "Stupid Jerk Face",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021",
    points: [
      "I named some jerk baby and tolerated their stupid [arents for a day",
      "I uppercutted the parents for looking at me the wrong way",
      "I made custom made candles for naming, lighting etc",
      "I got a McDonalds on the way home which was pretty sweet",
    ],
  },
  {
    title: "Naming Ceremony",
    company_name: "Hotel",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023",
    points: [
      "I named some jerk baby and tolerated their stupid [arents for a day",
      "I uppercutted the parents for looking at me the wrong way",
      "I made custom made candles for naming, lighting etc",
      "I got a McDonalds on the way home which was pretty sweet",
    ],
  },
  {
    title: "Wedding Ceremony",
    company_name: "Church",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "I named some jerk baby and tolerated their stupid [arents for a day",
      "I uppercutted the parents for looking at me the wrong way",
      "I made custom made candles for naming, lighting etc",
      "I got a McDonalds on the way home which was pretty sweet",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Maria showed up, round housed my granny, and stole the cake",
    name: "Sara Lee",
    designation: "Customer",
    company: "MelaQuinn",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "She Stole my dads car!.",
    name: "Chris Brown",
    designation: "Customer",
    company: "MelaQuinn",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "She told me my baby was ugly, then laughed for 30 minutes straight",
    name: "Lisa Wang",
    designation: "Customer",
    company: "MelaQuinn",
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
