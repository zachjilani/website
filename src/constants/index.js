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
    name: "StudLog",
    description:
      "Collaboration on a mobile and web application allowing students to monitor and modify study hours needed for each class.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "orange-text-gradient",
      }
    ],
    image: studlog,
    source_code_link: "https://github.com/gabe-santos/studlog",
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
  {
    name: "OpenAI API Call",
    description:
      "very simple and quick program that utilizes OpenAI's API to create a prompted image. Mainly used to build off of.",
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
    name: "Math SMS Game",
    description:
      "Text based game that asks users to solve math problems that become increasingly more difficult, and keeps track of your score.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "twilio",
        color: "orange-text-gradient",
      }
    ],
    image: mathgame,
    source_code_link: "https://github.com/zachjilani/math_game",
  },
  {
    name: "LeetCode and Algorithms",
    description:
      "An assortment of LeetCode problems, algorithms, and data structure work done over time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cpp",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "fsx",
        color: "orange-text-gradient"
      }
    ],
    image: code,
    source_code_link: "https://github.com/zachjilani/problems_algorithms",
  },
];

export { services, technologies, experiences, projects };
