import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  // redux,
  // tailwind,
  typescript,
  // threejs,
  // meta,
  // shopify,
  // starbucks,
  // tesla,
  // carrent,
  // jobit,
  // tripguide,
  jss,
  GoldmanSachs,
  nea,
  rstatisticalsoftware,
  azure,
  C,
  Cpp,
  Java,
  kubernetes,
  msoffice,
  python,
  swift,
  sqlite,
  webscrapertool,
  Flask,
  memory,
  LearnJava,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Electrical Engineer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Technical Services",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Microsoft Office",
    icon: msoffice,
  },
  {
    name: "Swift (ios)",
    icon: swift,
  },
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
    name: "Azure",
    icon: azure,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "R Statistical Software",
    icon: rstatisticalsoftware,
  },
];

const experiences = [
  {
    title: "Engineering Possibilities Summit",
    company_name: "Goldman Sachs",
    icon: GoldmanSachs,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Participated in an intensive apprenticeship program focused on financial services and technology.",
      "Engaged in hands-on projects and networked with 50+ industry professionals.",
      "Gained valuable insights into financial technology and enhanced my understanding of the industry.",
    ],
  },
  {
    title: "Science and Mathematics Teacher",
    company_name: "Janasewa Secondary School",
    icon: jss,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2020",
    points: [
      "Taught Mathematics, Science and Technology subjects to high school students.",
      "Developed 20+ lesson plans and conducted experiments to enhance learning.",
      "Improved students' understanding and interest in subjects, leading to 15% increase in average test scores.",
    ],
  },
  {
    title: "Electrical Engineering Intern",
    company_name: "Nepal Electriciy Authority",
    icon: nea,
    iconBg: "#383E56",
    date: "Jun 2023 - Dec 2023",
    points: [
      "Assisted in various electrical engineering projects.",
      "Conducted research and provided technical support to senior engineers, contributing to 20+ projects.",
      "Contributed to the successful completion of engineering projects, improving project efficiency by 10%.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Self",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Flask and other related technologies.",
      "Self taught programming with professional online resources including designing, product managing, etc. to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is an open minded person and well liked by his peers. Kamal is a perfect example of a balance between discipline and creativity.",
    name: "Saroj Shrestha",
    designation: "Head of Physics Department",
    company: "Janasewa Secondary School",
    image: "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/334777798_1897265397307834_7883077793363002296_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3i2lgLhXFKoQ7kNvgEDXYJa&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=AOemeXsUEHZ0BziJCFksrCx&oh=00_AYBJMEYFJFsYMzQ59pT2vHG9OUg9Au1cm4KzixS1QSb8KQ&oe=678B73DB",
  },
  {
    testimonial:
      "His ability to percieve things that other may overlook truly distinguishes him as an exceptional and out of the box student.",
    name: "Mina Bista",
    designation: "Head of Department of Social Studies",
    company: "Janasewa Secondary School",
    image: "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/438304458_3209212565889620_7674318923111813560_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DKMvj90_XiIQ7kNvgEdzPw6&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&_nc_gid=A_MClC1iB4ygfC-WQKtMaXU&oh=00_AYCO4af1tGYwZBoVYFaz7zA_midaSBNNd4J4XrPpY1-ZSQ&oe=678B7B1C",
  },
  {
    testimonial:
      "Beyond his academic achievements, Kamal has made significant contributions to the community through his active participation in various clubs and organizations.",
    name: "Rajen Maharjan",
    designation: "Head of ECA Department",
    company: "Janasewa Secondary School",
    image: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/472401928_1896174974525321_2522704127284586324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sPpambWbJswQ7kNvgEIXZRb&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=AD7ZvOWhxEJmyawSvVnXrTx&oh=00_AYAL4QgRGwyaww5nl8ISJYHpIPo2rbCAicI_M-RKUz5wiQ&oe=678B9C52",
  },
];

const projects = [
  {
    name: "Web Scraper Tool",
    description:
      "Developed a web scraper using Python and BeautifulSoup to extract data from e-commerce websites.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: webscrapertool,
    source_code_link: "https://github.com/Hdd5ps",
  },
  {
    name: "CS50 Finance",
    description:
      "A web app via which you can manage portfolios of stocks. Not only will this tool allow you to check real stocks’ prices and portfolios’ values, it will also let you buy (okay, “buy”) and sell (okay, “sell”) stocks by querying for stocks’ prices.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: Flask,
    source_code_link: "https://github.com/Hdd5ps",
  },
  {
    name: "Memory Recovery",
    description:
    "A program to recover deleted/corrupt JPEGs from a memory card.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: memory,
    source_code_link: "https://github.com/Hdd5ps",
  },
  {
    name: "Quiz App",
    description:
      "Learn Java course by educative.io has taught me how to code in Java, starting from scratch. It has tried to cement a solid conceptual foundation for procedural programming in Java. Furthermore, it gradually built every concept on top of that foundation, starting from built-in methods to user-defined methods and various program structures. By the end of this first programming journey, I have a holistic, integrated concept map of what it means to be able to code in Java.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "pink-text-gradient",
      },
    ],
    image: LearnJava,
    source_code_link: "https://github.com/Hdd5ps",
  },
];

export { services, technologies, experiences, testimonials, projects };