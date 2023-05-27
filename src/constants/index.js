import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cpp,
  csharp,
  python,
  postgres,
  reactjs,
  java,
  git,
  quixi,
  cvs,
  studlog,
  mathgame,
  tuner,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Engineer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "React Developer",
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
    name: "C#",
    icon: csharp,
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
    name: "StudLog",
    description:
      "Collaboration on a mobile and web application that allows students to monitor the amount of study hours needed for each class, and can modify the difficulties of each class.",
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
  {
    name: "Guitar Tuner",
    description:
      "Guitar tuning application that simply played the notes of tuned guitar strings for self tuning.",
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
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient"
      }
    ],
    image: tuner,
    source_code_link: "https://github.com/zachjilani/tuner-app",
  },
];

export { services, technologies, experiences, projects };
