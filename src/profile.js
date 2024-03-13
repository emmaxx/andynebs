const animation = {
  animate: true,
  duration: 750,
  once: false,
};
const header = {
  name: "Andrew Nebiosini",
};

const section2title = "About Me";
const about = {
  paragraph:
    "I'm web developer keen on making elegant development solutions. I like to use the most modern best-practices to craft modular,sensible code without sacrificing, well, anything.",
};

const skillsBar = [
  {
    name: "HTML5",
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "PHP",
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
];

const section3Title = "Past Projects";
const projects = [
  {
    id: "project1",
    name: "Mikey Mike Events",
    skills: ["HTML, CSS, JS, Wordpress"],
    url: "https://www.mikeymikeevents.com",
  },
  {
    id: "project2",
    name: "Emax Interactive",
    skills: ["HTML, CSS, JS"],
    url: "https://www.emaxinteractive.com",
  },
  {
    id: "project3",
    name: "Insuopops",
    skills: ["HTML, CSS, JS, Wordpress"],
    url: "https://www.infusopops.com",
  },
  {
    id: "project4",
    name: "411 Vintage",
    skills: ["HTML, CSS, JS, Wordpress"],
    url: "https://www.441vintage.com",
  },
  {
    id: "project5",
    name: "Anne Cole Landing Page",
    skills: ["HTML, CSS, JS, Shopify"],
    url: "https://www.annecole.com/",
  },
  {
    id: "project6",
    name: "Eastover Hotel & Resort",
    skills: ["HTML, CSS, JS, Wordpress"],
    url: "http://www.eastover.com/",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Feel free to contact me regarding any work opportunities!",
  copyright: "Andrew Nebiosini",
  contactUrl: "https://formspree.io/f/xleqnywe"
};
const social = {
  github: "https://www.github.com/emmaxx",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
export {
  animation,
  header,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
