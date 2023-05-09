import { foodBar } from "../assets/img";
import { trans } from "../assets/img";
import { flashcard } from "../assets/img";
import { TicTacToe } from "../assets/img";
import { randomUser } from "../assets/img";

const Hun = {
  nav: {
    home: "Home",
    about: "Rólam",
    resume: "Önéletrajz",
    projects: "Projectek",
    contact: "Kapcsolat",
  },
  home: {
    title_h4: "üdvözöllek a világomban.",
    title_h1_1: "Hello,",
    title_h1_2: "vagyok",
    title_span: "Csikós Ronald",
    moti_text1:
      "„Mindenki tudja, hogy bizonyos dolgokat nem lehet megvalósítani, mígnem jön valaki, aki erről nem tud, és megvalósítja.”",
    moti_text2:
      "“A legnagyobb kockázat az, ha nem vállalsz semmilyen kockázatot. Egy gyorsan változó világban az egyetlen stratégia, ami biztosan sikertelen, az, ha soha nem kockáztatsz.”",

    contact: "Keress",
    contact_span: "fel",
  },
  about: {
    title: "Rólam",
    subtitle: "Tudj meg többet",
    title_h1_1: "",
    title_h1_2: "vagyok",
    title_span: "Csikós Ronald",
    description: `Fiatal motivált karrierváltó vagyok, kiváló szociális készségekkel.
    Pályámat gépészmérnökként kezdtem. Másfél éve jelentkeztem egy online
    webfejlesztői tanfolyamra, ahol elsajátítottam a webfejlesztés alap 
    eszközeit, mint például: HTML, CSS, JS, valamint készítettem projekteket 
    Reactben is`,
  },
  projects: {
    title: "Projectek",
    subtitle: "Portfolio munkáim",
    foodbar: {
      title: "FoodBar",
      description: `Egyszerű recept webes alkalmazás. HTML, CSS, JavaScript és TheMealDB API használatával készült.`,
      src: foodBar,
      linkWeb: "https://csikito.github.io/Csikito-Food-Bar/",
      linkGit: "https://github.com/Csikito/Csikito-Food-Bar",
    },
    trans: {
      title: "Trans",
      description: `Ez egy szállítási vállalat egyszerű weboldala. HTML, CSS használatával készült.`,
      src: trans,
      linkWeb: "https://csikito.github.io/Csikito-Trans/",
      linkGit: "https://github.com/Csikito/Csikito-Trans",
    },
    ticGame: {
      title: "TIC-TAC-TOE",
      description: `Ez egy egyszerű tic-tac-toe játék. HTML, CSS JavaScript használatával készült.`,
      src: TicTacToe,
      linkWeb: "https://csikito.github.io/csikito_tic-tac-toe/",
      linkGit: "https://github.com/Csikito/csikito_tic-tac-toe",
    },
    flashcard: {
      title: "FLASHCARD",
      description: `Egyszerű tanulókártya alkalmazás. HTML, CSS, JavaScript, React használatával készült.`,
      src: flashcard,
      linkWeb: "https://csikito.github.io/csikito_flashcard/",
      linkGit: "https://github.com/Csikito/csikito_flashcard",
    },
    randomUser: {
      title: "RANDOM USER",
      description: `Véletlen felhasználó generátor webes alkalmazás. HTML, CSS, JavaScript, React és randomuser API felhasználásával készült.`,
      src: randomUser,
      linkWeb: "https://csikito.github.io/random_user/",
      linkGit: "https://github.com/Csikito/random_user",
    },
  },
  resume: {
    title: "Önéletrajz",
    subtitle: "Tapasztalataim",
    resumeBtn: {
      education: "Tanulmányok",
      hobby: "Hobbi",
      skill: "Készség",
      language: "Nyelv",
    },
    education: {
      title: "Oktatás",
      subtitle: "2011 - ",
      item1: {
        title: "Online Webfejlesztés",
        subtitle: "Programozaskarrier.hu (2022 - )",
        description: `Bootcamp és mentorprogram, kitűnő mentorokkal!`,
      },
      item2: {
        title: "BSc - Gépészmérnöki",
        subtitle:
          "Szabadkai Műszaki Szakfőiskola Felsőoktatási intézmény (2015 - 2019)",
        description: `Elvégeztem a főiskolát gépészmérnőként (Termékfejlesztés).`,
      },
      item3: {
        title: "Középiskola - Gépészteknukus ",
        subtitle: "Ivan Sarić Müszaki iskola (2011 - 2015)",
        description: `Elvégeztem a Középiskola számítógépes szerkesztő-gépésztechnikus ként,
        ahol elsajátítottam a 3D modellezést és az informatika alapjait.`,
      },
    },
    hobby: {
      title: "Hobbik",
      subtitle: "Kedvenc",
    },
    skill: {
      title: "Fejlesztési készség",
      subtitle: "Jellemzők",
    },
    language: {
      title: "Nyelvek",
      subtitle: "Jellemzők",
      lan: {
        eng: "Angol",
        hun: "Magyar",
      },
      exp: {
        native: "Anyanyelvi",
        elementary: "Alapfokú",
      },
    },
  },
  contact: {
    title: "Kapcsolat",
    subtitle: "Vedd fel velem a kapcsolatot",
    name: "Neved",
    email: "Email",
    subject: "Tárgy",
    message: "Üzenet",
    send: "Küldés",
    contact: "Keress ",
    contactSpan: "fel",
    error: {
      name: "Kérem írja be a nevét!",
      email: "Kérem adja meg az érvényes e-mail címét!",
      subject: "Kérem adja meg tárgyát!",
      message: "Kérjük, adja meg üzenetét!",
      succesMassage: "Üzeneteit sikeresen elküldtük!",
    },
  },
};

export default Hun;
