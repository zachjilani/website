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
  code
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
      ".",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      }
    ],
    image: "none",
    source_code_link: "",
  },
  {
    name: "Website",
    description:
      ".",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      }
    ],
    image: "none",
    source_code_link: "",
  },
  {
    name: "VR Tower Defense Game",
    description:
      ".",
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
    image: "none",
    source_code_link: "",
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
