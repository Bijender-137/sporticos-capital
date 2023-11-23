import { GrowIcon, PeopleIcon, PositiveIcon } from "./Icons";

//All Heros Pages Images
import talkImg from '../../assets/images/webp/hero-football.webp'
import aboutUsImg from '../../assets/images/webp/hero-aboutus-img.webp'
import clubImg from '../../assets/images/webp/hero-culbinvestment-img.webp'
import debtfundingImg from '../../assets/images/webp/hero-debtfunding-img.webp'
import ememtoringImg from '../../assets/images/webp/hero-ememtoring-img.webp'
import wealthImg from '../../assets/images/webp/hero-wealth-img.webp'
import playpathwaImg from '../../assets/images/webp/hero-play-pathwa-img.webp'
import faqImg from '../../assets/images/webp/hero-faq-img.webp'

export const accordionItems = [
  {
    id: 1,
    title: "What is the primary focus of your club investments?",
    content:
      "We invest in high-potential football clubs, leagues, and adjacent real estate with meaningful upside potential for investors. Fill out the form on our Club Investments page or book an appointment to learn more.",
  },
  {
    id: 2,
    title: "How do you minimize risks for sports investors?",
    content:
      "We diversify positions in under-exposed clubs, conduct due diligence, and employ proven strategies to minimize financial risks.",
  },
  {
    id: 3,
    title: "How does your e-mentoring platform work?",
    content:
      "By connecting players with a network of mentors, including staff and former players, we foster player growth, resiliency, and well-being.",
  },
  {
    id: 4,
    title: "What is your philosophy in terms of wealth management?",
    content:
      "We understand the lifecycle of an athlete’s career. In turn, we tailor our approach to lifestyle goals, time horizon, and values.",
  },
  {
    id: 5,
    title:
      "Which investments are included as part of your wealth management offering?",
    content:
      "We offer personalized wealth management, including Shariah-compliant products, real estate, and frontier investments tailored to financial goals",
  },
  {
    id: 6,
    title: "Who can benefit from your wealth management solutions?",
    content:
      "Whether you’re a football player, executive, or staff member, we empower individuals across any stage of their career to invest with confidence",
  },
  {
    id: 7,
    title: "What is the objective of your player pathways program?",
    content:
      "Our program supports well-rounded player development while factoring into the ecosystem we use to build more competitive clubs.",
  },
  {
    id: 8,
    title: "How do your debt funding solutions work?",
    content:
      "We provide working capital for operational expenses and player transfers through fair and attractive debt funding solutions checked by reputable underwriters",
  },
];

export const navLinks = [
  {
    id: 1,
    NavName: "Club Investments",
    path: "/club-investments",
  },
  {
    id: 2,
    NavName: "E-Mentoring",
    path: "/e-mentoring",
  },
  {
    id: 3,
    NavName: "About",
    path: "/about-us",
  },
  {
    id: 4,
    NavName: "FAQ",
    path: "/faq",
  },
  {
    id: 5,
    NavName: "Play Pathwa",
    path: "/play-pathwa",
  },
  {
    id: 6,
    NavName: "Wealth Management",
    path: "/wealth-management",
  },
  {
    id: 7,
    NavName: "Debt Funding",
    path: "/debt-funding",
  },
];

export const nextlevelData = [
  {
    id: 1,
    heading: "Guiding Players to the Next Level",
    para: "While players within our athlete network focus on honing their ",
    spanpara: "football skills, we:",
    submap: [
      {
        icon: <PositiveIcon />,
        paraBox: "Maintain positive exposure through our marketing packages",
      },
      {
        icon: <PeopleIcon />,
        paraBox: "Outline the road to playing in international leagues",
      },
      {
        icon: <GrowIcon />,
        paraBox: "Grow our clubs by focusing on existing talent",
      },
    ],
  },
  // {
  //   id: 2,
  // },
  // {
  //   id: 3,
  // },
];
export const heroData = [
  {
    id: 1,
    path: "///",
    maxW: "550px",
    mainheading: "",
    heading: "Unlocking High Impact Sports ",
    heading1: "Investment",
    heading2: " Opportunities ",
    subheading: "With a global reach, Sporticos Capital offers solutions for growth in the sports industry with players and clubs at heart.",
    button: "Book Appointment",
    buttonhero: "Get in touch",
    img: "",
  },
  {
    id: 2,
    path: "/about-us",
    maxW: "625px",
    mainheading: "",
    heading: "A Thriving Ecosystem of",
    heading1: " Sports ",
    heading2: " Investment ",
    heading3: " Opportunities",
    subheading: "At Sporticos Capital, we embrace decades of combined private equity and sports management expertise to put previously inaccessible sports investment opportunities within reach for those we serve.",
    button: "Book Appointment",
    buttonhero: "Get in touch",
    img: aboutUsImg,
  },

  {
    id: 3,
    path: "/debt-funding",
    maxW: "525px",
    mainheading: "",
    heading: " ",
    heading1: "Facilitating ",
    heading2: " Seamless Club",
    heading3: " Operations",
    subheading: "We support key operational expenses, player transfers, and beyond by making working capital available through our debt funding solutions.",
    button: "Book Appointment",
    buttonhero: "",
    img: debtfundingImg,
  },
  {
    id: 4,
    path: "/club-investments",
    maxW: "516px",
    mainheading: "",
    heading: "Invest In",
    heading1: " Vetted Football",
    heading2: " Clubs",
    subheading: "Our portfolio of high-potential clubs, leagues, and adjacent real estate drives ROI for investors while making a noteworthy impact.",
    button: "Book Appointment",
    buttonhero: "",
    img: clubImg,
  },
  {
    id: 5,
    path: "/e-mentoring",
    maxW: "600px",
    mainheading: "",
    heading: "Bringing",
    heading1: " Players",
    heading2: " And",
    heading3: " Mentors",
    heading4: " Together ",
    subheading: "Through the power of unity, our e-mentorship platform sparks significant player growth with connections to professionals and former players who have been in their shoes.",
    button: "Book Appointment",
    buttonhero: "",
    img: ememtoringImg,
  },
  {
    id: 6,
    path: "/wealth-management",
    maxW: "525px",
    mainheading: "",
    heading: "Investments",
    heading1: " Tailored",
    heading2: " to Your Financial",
    heading3: " Goals ",
    subheading: "We empower football players, executives, and staff alike to invest with confidence through our personalized wealth management solutions.",
    button: "Book Appointment",
    buttonhero: "",
    img: wealthImg,
  },
  {
    id: 7,
    path: "/play-pathwa",
    maxW: "571px",
    mainheading: "",
    heading: "Proudly ",
    heading1: "Prioritizing ",
    headingspan: "Player ",
    heading2: "Performance ",
    subheading: "We believe in the power of well-rounded players both on and off the field to support thriving football clubs.",
    button: "Book Appointment",
    buttonhero: "",
    img: playpathwaImg,
  },
  {
    id: 8,
    path: "/faq",
    maxW: "100%",
    mainheading: "Frequently",
    mainheading1: " Asked",
    mainheading2: "Questions",
    heading: "",
    subheading: "",
    button: "",
    buttonhero: "",
    img1: faqImg,
  },
  {
    id: 9,
    path: "/",
    maxW: "100%",
    mainheading: "Talk to The",
    mainheading1: " Team",
    heading: "",
    subheading: "",
    button: "Book Appointment",
    buttonhero: "",
    img: talkImg,
  },

];

