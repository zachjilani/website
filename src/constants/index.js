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
    title: "Java/Spring",
    icon: web,
  },
  {
    title: "Python/Flask",
    icon: mobile,
  },
  {
    title: "JavaScript",
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
    title: "Software Engineer",
    company_name: "OTF",
    icon: depot,
    iconBg: "#151030",
    date: "January 2023 - May 2023",
    points: [
      "Implemented virtual reality UI using C# and Unity.",
      "Impacted player retention by 30% by improving movement controls.",
      "Administered Agile development methodologies, leading to a 30% improvement in team efficiency and a 20% decrease in average project completion time.",
      "Version control through Plastic SCM, and GitHub.",
      "Achieved application efficiency and simplicity.",
      "http://tinyurl.com/296rz48r"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "StudLog",
    icon: cvs,
    iconBg: "#151030",
    date: "August 2022 - December 2022",
    points: [
      "Developed web application front end UI using Java and Spring Boot.",
      "Version control through GitHub.",
      "Assisted with requirements, scoping, and documentation."
    ],
  },
  {
    title: "Full Stack Software Engineer Intern",
    company_name: "Quixi",
    icon: quixi,
    iconBg: "#151030",
    date: "June 2021 - January 2022",
    points: [
      "Improved user account creation and accessibility by implementing new automated system enrollment and company management.",
      "Increased productivity for customers by by over 65% by developing features to add, remove, or edit their own facilities.",
      "Creation of email templates with Postmark API, GoDaddy API for domain creation and Python for back-end logic.",
      "Introduced and maintained new and existing front end UI using HTML, CSS, Jinja2, and JavaScript.",
      "Utilization of Sentry for application performance, error monitoring, and issue tracking.",
      "Agile development process through Jira and Slack.",
      "Version control with GitHub."
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
