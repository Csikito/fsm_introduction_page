// "I'm a Full Stack Web Developer with a passion for building web applications. I have a passion for learning new technologies, and I love learning new technologies."
import { foodBar } from "../assets/img";
import { trans } from "../assets/img";
import { flashcard } from "../assets/img";
import { TicTacToe } from "../assets/img";
import { randomUser } from "../assets/img";

const Eng = {
  nav: {
    home: "Home",
    about: "About",
    resume: "Resume",
    projects: "Projects",
    contact: "Contact",
  },
  home: {
    title_h4: "Welcome to my World.",
    title_h1_1: "Hi, I'm",
    title_h1_2: "",
    title_span: "Ronald Csikós",
    moti_text1:
      "„Everyone knew it was impossible, until a fool who didn’t know came along and did it.”",
    moti_text2:
      "“The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”",
    contact: "Find to ",
    contact_span: "me",
  },
  about: {
    title: "About Me",
    subtitle: "GET TO KNOW ME",
    title_h1_1: "I'm",
    title_h1_2: "",
    title_span: "Ronald Csikós",
    description: `A Self-taught Front-end Programmer who is motivated to 
    learn new skills and take on new challenges at the next level of his web development carrier. 
    I started my career as a mechanical engineer. About a year and half ago, I decided to take a new 
    direction in my career, I started my learning journey in web development. 
    I acquired the basic tools of web development through my own projects, 
    such as HTML, CSS, JavaScript, and I've done some projects with React.`,
  },
  projects: {
    title: "My Projects",
    subtitle: "VISIT MY PORTFOLIO",
    foodbar: {
      title: "FoodBar",
      description: `Simple recipe web application. Built using HTML, CSS, JavaScript and TheMealDB API.`,
      src: foodBar,
      linkWeb: "https://csikito.github.io/Csikito-Food-Bar/",
      linkGit: "https://github.com/Csikito/Csikito-Food-Bar",
    },
    trans: {
      title: "Trans",
      description: `This is a simple landing page of an delivery company. Built using HTML, CSS.`,
      src: trans,
      linkWeb: "https://csikito.github.io/Csikito-Trans/",
      linkGit: "https://github.com/Csikito/Csikito-Trans",
    },
    ticGame: {
      title: "TIC-TAC-TOE",
      description: `This is a simple tic-tac-toe game. Built using HTML, CSS JavaScript`,
      src: TicTacToe,
      linkWeb: "https://csikito.github.io/csikito_tic-tac-toe/",
      linkGit: "https://github.com/Csikito/csikito_tic-tac-toe",
    },
    flashcard: {
      title: "FLASHCARD",
      description: `Simple flashcard application. Built using HTML, CSS, JavaScript, React.`,
      src: flashcard,
      linkWeb: "https://csikito.github.io/csikito_flashcard/",
      linkGit: "https://github.com/Csikito/csikito_flashcard",
    },
    randomUser: {
      title: "RANDOM USER",
      description: `Random user generator web application. Built using HTML, CSS, JavaScript, React and randomuser API.`,
      src: randomUser,
      linkWeb: "https://csikito.github.io/random_user/",
      linkGit: "https://github.com/Csikito/random_user",
    },
  },
  resume: {
    title: "Resume",
    subtitle: "1+ YEARS OF EXPERIENCE",
    resumeBtn: {
      education: "Education",
      hobby: "Hobby",
      skill: "Skill",
      language: "Language",
    },
    education: {
      title: "Education Quality",
      subtitle: "2011 - ",

      item1: {
        title: "Online Web Development",
        subtitle: "Programozaskarrier.hu (2022 - )",
        description: `Bootcamp and mentoring programme with high quality mentors`,
      },
      item2: {
        title: "BSc in Mechanical Engineering",
        subtitle: "Subotica Tech - College of Applied Sciences (2015 - 2019)",
        description: `I graduated from college in Subotica as a mechanical engineer (Product Development).`,
      },
      item3: {
        title: "Secondary School Education",
        subtitle: "Ivan Sarić Technical Secondary School (2011 - 2015)",
        description: `I graduated from secondary school as a computer editor-engineering technician,
        where I learned 3D modelling and the basics of computer science`,
      },
    },
    hobby: {
      title: "Hobbies",
      subtitle: "Favourite",
    },
    skill: {
      title: "Development Skills",
      subtitle: "Features",
    },
    language: {
      title: "Languages",
      subtitle: "Features",
      lan: {
        eng: "English",
        hun: "Hungarian",
      },
      exp: {
        native: "Native",
        elementary: "Elementary",
      },
    },
  },
  contact: {
    title: "CONTACT",
    subtitle: "Contact With Me",
    name: "Your name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    contact: "Find to ",
    contactSpan: "me",
    error: {
      name: "Please enter your name!",
      email: "Please enter your valid email!",
      subject: "Please enter your subject!",
      message: "Please enter your message!",
      succesMassage: "Your Messages has been sent Successfully!",
    },
  },
};

export default Eng;
