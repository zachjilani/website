import {
  mobile,
  creator,
  web,
  javascript,
  cpp,
  python,
  postgres,
  reactjs,
  java,
  git,
  quixi,
  cvs,
  studlog,
  mathgame,
  depot,
  code,
  boids,
  vr,
  openai
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
    title: "Software Development",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PostGres",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "Deliveries",
    company_name: "Home Depot",
    icon: depot,
    iconBg: "#151030",
    date: "March 2022 - May 2023",
    points: [
      "Responsible for pulling, and verifying deliveries meant to be sent on delivery trucks.",
      "Worked while finishing degree."
    ],
  },
  {
    title: "Full stack Software Engineer",
    company_name: "Quixi",
    icon: quixi,
    iconBg: "#151030",
    date: "June 2021 - December 2021",
    points: [
      "Maintained web application using Python and Flask along with other related technologies.",
      "Helped with creating full end to end automation of services.",
      "Handled issues with Jira, Github, and Sentry.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Manager",
    company_name: "CVS",
    icon: cvs,
    iconBg: "#151030",
    date: "Jan 2018 - July 2021",
    points: [
      "Management of scheduling and employee tasks.",
      "Oversight on financial decisions and processes at store level."
    ],
  },
];

const projects = [
  {
    name: "Flocking Simulation",
    description:
      "Program that approximates the behaivors of birds, fish, or anything else that may move to one another based off three main attributes.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      }
    ],
    image: boids,
    source_code_link: "https://github.com/zachjilani/sprite-and-boids",
  },
  {
    name: "OpenAI API Calling",
    description:
      "Python program utilizing OpenAI API to create a prompted image. Can be used as a base for other projects using OpenAI imaging.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "dall-e",
        color: "orange-text-gradient",
      }
    ],
    image: openai,
    source_code_link: "https://github.com/zachjilani/openai_api_call",
  },
  {
    name: "VR Tower Defense Game",
    description:
      "Collaboration on a virtual reality tower defense game where the player will build during the day, and defend during the night.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "vrif",
        color: "pink-text-gradient",
      },
      {
        name: "emeraldai",
        color: "orange-text-gradient",
      }
    ],
    image: vr,
    source_code_link: "https://github.com/jordansprojects/On-the-Farm",
  },
];

export { services, technologies, experiences, projects };
