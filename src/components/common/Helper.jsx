import {
  AccountabilityIcon,
  ArrangeIcon,
  BulbIcon,
  CommunicationIcon,
  DevelopIcon,
  FactorIcon,
  GrowIcon,
  IdentifyIcon,
  MaintainIcon,
  MitigateIcon,
  PeopleIcon,
  PositiveIcon,
  PreventIcon,
  ServeIcon,
  SherpenIcon,
  SupportIcon,
  TransparencyIcon,
  UnderStandIcon,
} from "./Icons";

//All Heros Pages Images
import talkImg from "../../assets/images/webp/hero-football.webp";
import aboutUsImg from "../../assets/images/webp/hero-aboutus-img.webp";
import clubImg from "../../assets/images/webp/hero-culbinvestment-img.webp";
import debtfundingImg from "../../assets/images/webp/hero-debtfunding-img.webp";
import ememtoringImg from "../../assets/images/webp/hero-ememtoring-img.webp";
import wealthImg from "../../assets/images/webp/hero-wealth-img.webp";
import playpathwaImg from "../../assets/images/webp/hero-play-pathwa-img.webp";
import faqImg from "../../assets/images/webp/hero-faq-img.webp";
import homepageImg from "../../assets/images/webp/herohomepage-img.webp";

//slider Images
import sliderimg1 from "../../assets/images/webp/hero-slider-img1.webp";
import sliderimg2 from "../../assets/images/webp/hero-slider-img2.webp";
import sliderimg3 from "../../assets/images/webp/hero-slider-img3.webp";

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
    NavName: "About Us",
    path: "/about-us",
  },
  {
    id: 4,
    NavName: "FAQ",
    path: "/faq",
  },
  {
    id: 5,
    NavName: "Player Pathwa",
    path: "/player-pathwa",
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
    path: "/player-pathwa",
    heading: "Guiding Players to the Next Level",
    para: "While players within our athlete network focus on honing their ",
    spanpara: "football skills, we:",
    submap: [
      {
        aosDelay: "200",
        icon: <PositiveIcon />,
        paraBox: "Maintain positive exposure through our marketing packages",
      },
      {
        aosDelay: "400",
        icon: <PeopleIcon />,
        paraBox: "Outline the road to playing in international leagues",
      },
      {
        aosDelay: "600",
        icon: <GrowIcon />,
        paraBox: "Grow our clubs by focusing on existing talent",
      },
    ],
  },
  {
    id: 2,
    path: "/e-mentoring",
    heading: "Fostering Community, One Player at a Time",
    para: "Our e-mentorship platform connects mentors with mentees who",
    submap: [
      {
        aosDelay: "200",
        icon: <SupportIcon />,
        paraBox: "Support new player acquisitions and transfers alike",
      },
      {
        aosDelay: "400",
        icon: <DevelopIcon />,
        paraBox: "Develop versatile players on and off the field",
      },
      {
        aosDelay: "600",
        icon: <SherpenIcon />,
        paraBox: "Sharpen the competitive edge of our clubs",
      },
      {
        aosDelay: "800",
        icon: <PreventIcon />,
        paraBox: "Prevent mental health obstacles from derailing player focus",
      },
    ],
  },
  {
    id: 3,
    path: "/debt-funding",
    heading: "Going Beyond Capital Alone",
    para: "Our background in private equity and sports management uniquely",
    spanpara: "positions us to:",
    submap: [
      {
        aosDelay: "200",
        icon: <IdentifyIcon />,
        paraBox: "Identify and cover essential club operations",
      },
      {
        aosDelay: "400",
        icon: <ArrangeIcon />,
        paraBox: "Arrange win-win financing solutions",
      },
      {
        aosDelay: "600",
        icon: <MitigateIcon />,
        paraBox: "Mitigate and manage financing risks",
      },
      {
        aosDelay: "800",
        icon: <ServeIcon />,
        paraBox: "Serve in the best interests of both clubs and investors",
      },
    ],
  },
  {
    id: 4,
    path: "/about-us",
    heading: "United By Our Mission",
    para: "Our mission is to make a lasting positive impact on the clubs, players, fans, and communities we invest in. We couple our proven managerial and operational strategies with our commitment to preserving club traditions, upholding responsible ESG practices, and developing underserved areas such as women’s football. Our core values include:",
    submap: [
      {
        aosDelay: "200",
        icon: <TransparencyIcon />,
        paraBox: "Transparency for those we serve",
      },
      {
        aosDelay: "400",
        icon: <ArrangeIcon />,
        paraBox: "Integrity with our value-driven approach",
      },
      {
        aosDelay: "600",
        icon: <CommunicationIcon />,
        paraBox: "Communication with the utmost respect",
      },
      {
        aosDelay: "800",
        icon: <AccountabilityIcon />,
        paraBox: "Accountability through measurable performance",
      },
    ],
  },
  {
    id: 5,
    path: "/wealth-management",
    heading: "Combining Expertise and Personalization",
    para: "Through our tailored wealth management solutions, we:",
    submap: [
      {
        aosDelay: "200",
        icon: <UnderStandIcon />,
        paraBox: "Understand your unique financial aspirations",
      },
      {
        aosDelay: "400",
        icon: <FactorIcon />,
        paraBox: "Factor your time horizon into each investment decision",
      },
      {
        aosDelay: "600",
        icon: <BulbIcon />,
        paraBox: "Maximize your ROI through strategic products",
      },
      {
        aosDelay: "800",
        icon: <MaintainIcon />,
        paraBox: "Maintain a diversified and well-balanced portfolio",
      },
    ],
  },
];
export const heroData = [
  {
    id: 1,
    path: "/",
    maxW: "628px",
    maxW1: "550px",
    className: "homepageImg ",
    heading: <>Unlocking High Impact Sports <span className="clr-yellow">Investment</span> Opportunities </>,
    subheading:
      "With a global reach, Sporticos Capital offers solutions for growth in the sports industry with players and clubs at heart.",
    button: "Book Appointment",
    buttonhero: "Get in touch",
    img: homepageImg,
  },
  {
    id: 2,
    path: "/about-us",
    maxW: "625px",
    className: "abotusImg",
    heading: <>A Thriving <span className="clr-yellow">Ecosystem</span> of <span className="clr-yellow">Sports</span> Investment <span className="clr-yellow">Opportunities</span> </>,

    subheading:
      "At Sporticos Capital, we embrace decades of combined private equity and sports management expertise to put previously inaccessible sports investment opportunities within reach for those we serve.",
    button: "Book Appointment",
    buttonhero: "Get in touch",
    img: aboutUsImg,
  },

  {
    id: 3,
    path: "/debt-funding",
    maxW: "525px",
    className: "debtImg",
    heading: <><span className="clr-yellow">Facilitating</span> Seamless Club <span className="clr-yellow">Operations</span> </>,
    subheading:
      "We support key operational expenses, player transfers, and beyond by making working capital available through our debt funding solutions.",
    button: "Book Appointment",
    img: debtfundingImg,
  },
  {
    id: 4,
    path: "/club-investments",
    maxW: "516px",
    className: "culbImg",
    heading: <>Invest In <span className="clr-yellow">Vetted Football</span> Clubs</>,
    subheading:
      "Our portfolio of high-potential clubs, leagues, and adjacent real estate drives ROI for investors while making a noteworthy impact.",
    button: "Book Appointment",
    img: clubImg,
  },
  {
    id: 5,
    path: "/e-mentoring",
    maxW: "600px",
    className: "ementoringImg",
    heading: <>Bringing <span className="clr-yellow">Players</span> and <span className="clr-yellow">Mentors</span> Together </>,
    subheading:
      "Through the power of unity, our e-mentorship platform sparks significant player growth with connections to professionals and former players who have been in their shoes.",
    button: "Book Appointment",
    img: ememtoringImg,
  },
  {
    id: 6,
    path: "/wealth-management",
    maxW: "525px",
    className: "wealthImg",
    heading: <>Investments <span className="clr-yellow">Tailored</span> to Your Financial <span className="clr-yellow">Goals</span> </>,
    subheading:
      "We empower football players, executives, and staff alike to invest with confidence through our personalized wealth management solutions.",
    button: "Book Appointment",
    img: wealthImg,
  },
  {
    id: 7,
    path: "/player-pathwa",
    maxW: "571px",
    className: "playerImg",
    heading: <>Proudly <span className="d-lg-block"><span className="clr-yellow">Prioritizing</span> Player</span> Performance </>,
    subheading:
      "We believe in the power of well-rounded players both on and off the field to support thriving football clubs.",
    button: "Book Appointment",
    img: playpathwaImg,
  },
  {
    id: 8,
    path: "/faq",
    maxW: "548px",
    className: "faqImg",
    mainheading: <>Frequently <span className="clr-yellow">Asked</span> Questions</>,
    img: faqImg,
  },
  {
    id: 9,
    path: "/contact",
    maxW: "545px",
    className: "contactImg",
    mainheading: <>Talk to The <span className="clr-yellow">Team</span></>,
    button: "Book Appointment",
    img: talkImg,
  },
];

export const contactData = [
  {
    id: 1,
    path: "/",
    heading: "Discover the Advantage of Sporticos Capital",
    paragraph:
      "We invite growth-minded investors, club executives, and players to reach out today for ",
    paragraph1: " accelerated growth tomorrow.",
    btn: "CONTACT  US",
  },
  {
    id: 2,
    path: "/about-us",
    heading: "Reach Out",
    paragraph:
      "For inquiries, investment opportunities, and general questions, we ",
    paragraph1: " invite you to get in touch today.",
    btn: "CONTACT  US",
  },
  {
    id: 3,
    path: "/faq",
    heading: "My question isn’t listed above...",
    paragraph: "We encourage you to reach out using the button below for",
    paragraph1: "additional questions. Thank you",
    btn: "CONTACT  US",
  },
];

export const sliderData = [
  {
    id: 1,
    img: sliderimg1,
    sliderHeading: "Club Investments",
    sliderpara:
      "Delivering meaningful returns to investors by taking a direct stake in a network of under-exposed clubs with high potential.",
  },
  {
    id: 2,
    img: sliderimg2,
    sliderHeading: "Debt Funding",
    sliderpara:
      "Financing clubs to carry out key operations and player transfers while securing fair interest income for our investors.",
  },
  {
    id: 3,
    img: sliderimg3,
    sliderHeading: "Player Pathways",
    sliderpara:
      "Nurturing holistic player development to support each club’s success, creating a win-win for players and investors alike.",
  },
  {
    id: 4,
    img: sliderimg2,
    sliderHeading: "Debt Funding",
    sliderpara:
      "Financing clubs to carry out key operations and player transfers while securing fair interest income for our investors.",
  },
];
