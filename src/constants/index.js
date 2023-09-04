import {
  mobile,
  creator,
  web,
  javascript,
  python,
  postgres,
  reactjs,
  java,
  git,
  quixi,
  boids,
  studlog,
  vr
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
    title: "Java/Spring Development",
    icon: web,
  },
  {
    title: "Python/Flask Development",
    icon: mobile,
  },
  {
    title: "JavaScript Development",
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
    icon: vr,
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
    icon: studlog,
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
      "Program that approximates the behavior of birds, fish, or anything else that may move to one another based off three main attributes.",
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
    name: "Weblog",
    description:
      "A Java/Spring web application that implements Vaadin framework and PostgreSQL server to keep track of online applications, and more.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "vaadin",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      }
    ],
    image: "",
    source_code_link: "https://github.com/zachjilani/weblog",
  },
  {
    name: "Node.js Vector Package",
    description:
      "A lightweight package for creation and modification of three dimensional vectors using Chai for TDD, and semantic-release for package release.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "chai",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "semantic",
        color: "orange-text-gradient",
      }
    ],
    image: "",
    source_code_link: "https://github.com/zachjilani/vector3.js",
  },
];

export { services, technologies, experiences, projects };
