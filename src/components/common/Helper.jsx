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

//ALL HEROS PAGES IMAGES
import talkimage from "../../assets/images/webp/hero-football.webp";
import aboutUsimage from "../../assets/images/webp/hero-aboutus-img.webp";
import clubimage from "../../assets/images/webp/hero-culbinvestment-img.webp";
import debtfundingimage from "../../assets/images/webp/hero-debtfunding-img.webp";
import ememtoringimage from "../../assets/images/webp/hero-ememtoring-img.webp";
import wealthimage from "../../assets/images/webp/hero-wealth-img.webp";
import playpathwaimage from "../../assets/images/webp/hero-play-pathwa-img.webp";
import faqimage from "../../assets/images/webp/hero-faq-img.webp";
import homepageimage from "../../assets/images/webp/herohomepage-img.webp";

//SLIDER IMAGES
import clubslider from "../../assets/images/webp/club-drivingslider-image.webp";
import debtslider from "../../assets/images/webp/debt-drivingslider-image.webp";
import playerslider from "../../assets/images/webp/player-drivingslider-image.webp";

//COMMON CARDS IMAGES
import PlayerClub from "../../assets/images/webp/player-dreamscard-club-image.webp";
import PlayerEnchanced from "../../assets/images/webp/player-dreamscard-enchanced-image.webp";
import Playerascensions from "../../assets/images/webp/player-dreamscard-playerascensions-image.webp";
import wealthrisk from "../../assets/images/webp/wealth-offeringcard-risk-image.webp";
import wealthflexible from "../../assets/images/webp/wealth-offeringcard-flexible-image.webp";
import wealthshariah from "../../assets/images/webp/wealth-offeringcard-shariah-image.webp";
import Mentoringresiliency from "../../assets/images/webp/ementoring-puttingcard-resiliency-image.webp";
import Mentoringlearing from "../../assets/images/webp/ementoring-puttingcard-learning-image.webp";
import Mentoringoptimal from "../../assets/images/webp/ementoring-puttingcard-optimal-image.webp";
import Investmentminimized from "../../assets/images/webp/club-upsidecard-minimized-image.webp";
import Investmentmeticulous from "../../assets/images/webp/club-upsidecard-meticulous-image.webp";
import Investmentholistic from "../../assets/images/webp/club-upsidecard-holistic-image.webp";
import Fundingfinancing from "../../assets/images/webp/debfunding-ongoingclub-financing-image.webp";
import Fundingsharing from "../../assets/images/webp/debfunding-ongoingclub-sharing-image.webp";
import Fundingunderwrite from "../../assets/images/webp/debfunding-ongoingclub-underwrite-image.webp";

//COMMON TEAM IMAGE
import wealImage from "../../assets/images/webp/wael-khattab-team-image.webp";
import drHussaImage from "../../assets/images/webp/dr-hussa-team-image.webp";

// ACCORDIANS DATA START
export const accordionItems = [
  {
    title: "What is the primary focus of your club investments?",
    description:
      "We invest in high-potential football clubs, leagues, and adjacent real estate with meaningful upside potential for investors. Fill out the form on our Club Investments page or book an appointment to learn more.",
  },
  {
    title: "How do you minimize risks for sports investors?",
    description:
      "We diversify positions in under-exposed clubs, conduct due diligence, and employ proven strategies to minimize financial risks.",
  },
  {
    title: "How does your e-mentoring platform work?",
    description:
      "By connecting players with a network of mentors, including staff and former players, we foster player growth, resiliency, and well-being.",
  },
  {
    title: "What is your philosophy in terms of wealth management?",
    description:
      "We understand the lifecycle of an athlete’s career. In turn, we tailor our approach to lifestyle goals, time horizon, and values.",
  },
  {
    title:
      "Which investments are included as part of your wealth management offering?",
    description:
      "We offer personalized wealth management, including Shariah-compliant products, real estate, and frontier investments tailored to financial goals",
  },
  {
    title: "Who can benefit from your wealth management solutions?",
    description:
      "Whether you’re a football player, executive, or staff member, we empower individuals across any stage of their career to invest with confidence",
  },
  {
    title: "What is the objective of your player pathways program?",
    description:
      "Our program supports well-rounded player development while factoring into the ecosystem we use to build more competitive clubs.",
  },
  {
    title: "How do your debt funding solutions work?",
    description:
      "We provide working capital for operational expenses and player transfers through fair and attractive debt funding solutions checked by reputable underwriters",
  },
];
// ACCORDIANS DATA END
// NAVLINK DATA START
export const navLinks = [
  {
    navLink: "Club Investments",
    path: "/club-investments",
  },
  {
    navLink: "E-Mentoring",
    path: "/e-mentoring",
  },
  {
    navLink: "About Us",
    path: "/about-us",
  },
  {
    navLink: "FAQ",
    path: "/faq",
  },
  {
    navLink: "Player Pathwa",
    path: "/player-pathwa",
  },
  {
    navLink: "Wealth Management",
    path: "/wealth-management",
  },
  {
    navLink: "Debt Funding",
    path: "/debt-funding",
  },
];
// NAVLINK DATA END
// BORDER CARDS DATA START
export const borderCardData = [
  {
    path: "/player-pathwa",
    title: "Guiding Players to the Next Level",
    description: (
      <>
        While players within our athlete network focus on honing their{" "}
        <span className="d-lg-block"> football skills, we:</span>
      </>
    ),
    submap: [
      {
        cardstyle: "ms-xxl-3 px-xxl-3",
        aosDelay: "200",
        image: <PositiveIcon />,
        description:
          "Maintain positive exposure through our marketing packages",
        descriptionStyle: "py-3 mt-lg-2 py-md-4",
      },
      {
        cardstyle: "ms-xxl-3 px-xxl-3",
        aosDelay: "400",
        image: <PeopleIcon />,
        description: "Outline the road to playing in international leagues",
        descriptionStyle: "py-3 mt-lg-2 py-md-4",
      },
      {
        cardstyle: "ms-xxl-3 px-xxl-3",
        aosDelay: "600",
        image: <GrowIcon />,
        description: "Grow our clubs by focusing on existing talent",
        descriptionStyle: "py-3 mt-lg-2 py-md-4",
      },
    ],
  },
  {
    path: "/e-mentoring",
    title: "Fostering Community, One Player at a Time",
    description: "Our e-mentorship platform connects mentors with mentees who",
    submap: [
      {
        cardstyle: "px-xl-3 mx-xl-2 mx-xxl-3",
        aosDelay: "200",
        image: <SupportIcon />,
        description: "Support new player acquisitions and transfers alike",
      },
      {
        cardstyle: "px-xl-3 mx-xl-2 mx-xxl-3",
        aosDelay: "400",
        image: <DevelopIcon />,
        description: "Develop versatile players on and off the field",
        descriptionStyle: "pe-xxl-5 pe-xl-4 pb-2 me-xxl-4",
      },
      {
        cardstyle: "px-xl-3 mx-xl-2 mx-xxl-3",
        aosDelay: "600",
        image: <SherpenIcon />,
        description: "Sharpen the competitive edge of our clubs",
        descriptionStyle: "pe-xxl-5 pe-xl-2 pb-2 me-xxl-2",
      },
      {
        cardstyle: "px-xl-3 mx-xl-2 mx-xxl-3",
        aosDelay: "800",
        image: <PreventIcon />,
        description:
          "Prevent mental health obstacles from derailing player focus",
        descriptionStyle: "pe-xl-4 pb-2 me-xxl-4",
      },
    ],
  },
  {
    path: "/debt-funding",
    title: "Going Beyond Capital Alone",
    description: (
      <>
        Our background in private equity and sports management uniquely
        <span className="d-lg-block">positions us to:</span>
      </>
    ),
    submap: [
      {
        cardstyle: "mx-xxl-4 px-xxl-4",
        aosDelay: "200",
        image: <IdentifyIcon />,
        description: "Identify and cover essential club operations",
        descriptionStyle: "",
      },
      {
        cardstyle: "mx-xxl-4 px-xxl-4",
        aosDelay: "400",
        image: <ArrangeIcon />,
        description: "Arrange win-win financing solutions",
        descriptionStyle: "pe-xxl-3",
      },
      {
        cardstyle: "mx-xxl-4 px-xxl-4",
        aosDelay: "600",
        image: <MitigateIcon />,
        description: "Mitigate and manage financing risks",
      },
      {
        cardstyle: "mx-xxl-4 px-xxl-4",
        aosDelay: "800",
        image: <ServeIcon />,
        description: "Serve in the best interests of both clubs and investors",
        descriptionStyle: "pe-xxl-1",
      },
    ],
  },
  {
    path: "/about-us",
    sectionClass: "py-5 my-lg-5",
    title: "United By Our Mission",
    description:
      "Our mission is to make a lasting positive impact on the clubs, players, fans, and communities we invest in. We couple our proven managerial and operational strategies with our commitment to preserving club traditions, upholding responsible ESG practices, and developing underserved areas such as women’s football. Our core values include:",
    submap: [
      {
        cardstyle: "px-xl-4 mx-xl-4",
        aosDelay: "200",
        image: <TransparencyIcon />,
        description: (
          <>
            <span className="fw-medium">Transparency</span> for those we serve
          </>
        ),
        descriptionStyle: "pe-xl-5 pt-2 pb-3 pb-md-4",
      },
      {
        cardstyle: "px-xl-4 mx-xl-4",
        aosDelay: "400",
        image: <ArrangeIcon />,
        description: (
          <>
            {" "}
            <span className="fw-medium">Integrity</span> with our value-driven
            approach
          </>
        ),
        descriptionStyle: "pe-xl-4 pt-2 pb-3 pb-md-4",
      },
      {
        cardstyle: "px-xl-4 mx-xl-4",
        aosDelay: "600",
        image: <CommunicationIcon />,
        description: (
          <>
            {" "}
            <span className="fw-medium">Communication</span> with the utmost
            respect
          </>
        ),
        descriptionStyle: "pe-xl-4 pt-2 pb-3 pb-md-4",
      },
      {
        cardstyle: "px-xl-4 mx-xl-4",
        aosDelay: "800",
        image: <AccountabilityIcon />,
        description: (
          <>
            {" "}
            <span className="fw-medium">Accountability</span> through measurable
            performance
          </>
        ),
        descriptionStyle: "pt-2 pb-3 pb-md-4",
      },
    ],
  },
  {
    path: "/wealth-management",
    heading: "Combining Expertise and Personalization",
    description: "Through our tailored wealth management solutions, we:",
    Style: "pt-xl-3",
    submap: [
      {
        cardstyle: "px-xl-4 mx-xl-4 me-xl-5",
        aosDelay: "200",
        image: <UnderStandIcon />,
        description: "Understand your unique financial aspirations",
        descriptionStyle: "py-3 py-md-4",
      },
      {
        cardstyle: "px-xl-4 mx-xl-4",
        aosDelay: "400",
        image: <FactorIcon />,
        description: "Factor your time horizon into each investment decision",
        descriptionStyle: "py-3 py-md-4",
      },
      {
        cardstyle: "px-xl-4 mx-xl-4 me-xl-5",
        aosDelay: "600",
        image: <BulbIcon />,
        description: "Maximize your ROI through strategic products",
        descriptionStyle: "py-3 py-md-4",
      },
      {
        cardstyle: "px-xl-4 mx-xl-4 me-xl-5",
        aosDelay: "800",
        image: <MaintainIcon />,
        description: "Maintain a diversified and well-balanced portfolio",
        descriptionStyle: "py-3 py-md-4",
      },
    ],
  },
];
// BORDER CARDS DATA END
// HERO SECTION DATA START
export const heroData = [
  {
    path: "/",
    headingwidth: "628px",
    headingwidth1: "550px",
    imageStyle: "homepage-image ",
    heading: (
      <>
        Unlocking High Impact Sports
        <span className="clr-yellow"> Investment</span> Opportunities
      </>
    ),
    description:
      "With a global reach, Sporticos Capital offers solutions for growth in the sports industry with players and clubs at heart.",
    button: "Book Appointment",
    transparentButton: "Get in touch",
    image: homepageimage,
  },
  {
    path: "/about-us",
    headingwidth: "625px",
    imageStyle: "abotus-image",
    heading: (
      <>
        A Thriving <span className="clr-yellow"> Ecosystem</span> of
        <span className="clr-yellow"> Sports</span> Investment
        <span className="clr-yellow"> Opportunities</span>
      </>
    ),

    description:
      "At Sporticos Capital, we embrace decades of combined private equity and sports management expertise to put previously inaccessible sports investment opportunities within reach for those we serve.",
    button: "Book Appointment",
    transparentButton: "Get in touch",
    image: aboutUsimage,
  },

  {
    path: "/debt-funding",
    headingwidth: "525px",
    imageStyle: "debt-image",
    heading: (
      <>
        <span className="clr-yellow">Facilitating</span> Seamless Club
        <span className="clr-yellow"> Operations</span>
      </>
    ),
    description:
      "We support key operational expenses, player transfers, and beyond by making working capital available through our debt funding solutions.",
    button: "Book Appointment",
    image: debtfundingimage,
  },
  {
    path: "/club-investments",
    headingwidth: "516px",
    imageStyle: "culb-image",
    heading: (
      <>
        Invest In <span className="clr-yellow">Vetted Football</span> Clubs
      </>
    ),
    description:
      "Our portfolio of high-potential clubs, leagues, and adjacent real estate drives ROI for investors while making a noteworthy impact.",
    button: "Book Appointment",
    image: clubimage,
  },
  {
    path: "/e-mentoring",
    headingwidth: "600px",
    imageStyle: "ementoring-image",
    heading: (
      <>
        Bringing <span className="clr-yellow">Players</span> and
        <span className="clr-yellow"> Mentors</span> Together
      </>
    ),
    description:
      "Through the power of unity, our e-mentorship platform sparks significant player growth with connections to professionals and former players who have been in their shoes.",
    button: "Book Appointment",
    image: ememtoringimage,
  },
  {
    path: "/wealth-management",
    headingwidth: "525px",
    imageStyle: "wealth-image",
    heading: (
      <>
        Investments <span className="clr-yellow">Tailored</span> to Your
        Financial <span className="clr-yellow">Goals</span>
      </>
    ),
    description:
      "We empower football players, executives, and staff alike to invest with confidence through our personalized wealth management solutions.",
    button: "Book Appointment",
    image: wealthimage,
  },
  {
    path: "/player-pathwa",
    headingwidth: "571px",
    imageStyle: "player-image",
    headingStyle: "pe-lg-5 me-lg-3",
    heading: (
      <>
        Proudly
        <span className="clr-yellow"> Prioritizing</span> Player Performance
      </>
    ),
    description:
      "We believe in the power of well-rounded players both on and off the field to support thriving football clubs.",
    button: "Book Appointment",
    image: playpathwaimage,
  },
  {
    path: "/faq",
    headingwidth: "548px",
    imageStyle: "faq-image",
    mainheading: (
      <>
        Frequently <span className="clr-yellow">Asked</span> Questions
      </>
    ),
    image: faqimage,
  },
  {
    path: "/contact",
    headingwidth: "545px",
    imageStyle: "contact-image",
    mainheading: (
      <>
        Talk to The <span className="clr-yellow">Team</span>
      </>
    ),
    button: "Book Appointment",
    image: talkimage,
  },
];
// HERO SECTION DATA END
// CONTACT US DATA START
export const contactData = [
  {
    path: "/",
    title: "Discover the Advantage of Sporticos Capital",
    descriptionStyle: "home-contact-us-description",
    description:
      "We invite growth-minded investors, club executives, and players to reach out today for  accelerated growth tomorrow.",
    button: "CONTACT  US",
  },
  {
    path: "/about-us",
    title: "Reach Out",
    descriptionStyle: "aboutus-contact-us-description",
    description:
      "For inquiries, investment opportunities, and general questions, we invite you to get in touch today.",
    button: "CONTACT  US",
  },
  {
    path: "/faq",
    descriptionStyle: "faq-contact-us-description",
    title: "My question isn’t listed above...",
    description:
      "We encourage you to reach out using the button below for additional questions. Thank you",
    button: "CONTACT  US",
  },
];
// CONTACT US DATA END
// SLIDER DATA START
export const sliderData = [
  {
    image: clubslider,
    title: "Club Investments",
    description:
      "Delivering meaningful returns to investors by taking a direct stake in a network of under-exposed clubs with high potential.",
  },
  {
    image: debtslider,
    title: "Debt Funding",
    description:
      "Financing clubs to carry out key operations and player transfers while securing fair interest income for our investors.",
  },
  {
    image: playerslider,
    title: "Player Pathways",
    description:
      "Nurturing holistic player development to support each club’s success, creating a win-win for players and investors alike.",
  },
  {
    image: debtslider,
    title: "Debt Funding",
    description:
      "Financing clubs to carry out key operations and player transfers while securing fair interest income for our investors.",
  },
];
// SLIDER DATA END
// FORM SUBMISSION DATA START
export const formdata = [
  {
    title:
      "Submit your Information and a Member of our Team will Follow Up As Soon As Possible",
    path: "/contact",
  },
  {
    title: "Unlock Each Player’s Full Potential",
    description:
      "To get in touch about our player pathways, we encourage you to submit the form below.",
    path: "/player-pathwa",
  },
  {
    paramaxwidth: "600px",
    title: "Leave Your Portfolio In Trusted Hands",
    description:
      "Take the first step toward our wealth management solutions by submitting the form below.",
    path: "/wealth-management",
    paddingStyle: "pt-xl-5 mt-lg-3",
  },
  {
    title: "Discover the Advantage of E-Mentoring",
    description:
      "For more information about joining our e-mentoring program, simply fill out the form below.",
    path: "/e-mentoring",
  },
  {
    title: "Winning Investment Portfolios Start Here",
    description:
      "Fill out the form below to learn more about our club investment opportunities.",
    path: "/club-investments",
  },
  {
    title: "Secure Favorable Debt Funding Terms",
    description:
      "Submit the form below for more information about our debt funding solutions.",
    path: "/debt-funding",
  },
];
// FORM SUBMISSION DATA END
// FORM SUBMISSION INPUTS START
export const inputdata = [
  {
    email: "Email*",
    name: "Name",
    subject: "Subject",
    apointment: "Set an Appointment",
    path: "/contact",
  },
  {
    email: "Email*",
    name: "Name",
    subject: "Subject",
    apointment: "Player Pathway - Potential",
    path: "/player-pathwa",
  },
  {
    email: "Email*",
    name: "Name",
    subject: "Subject",
    apointment: "Wealth Management - Potential",
    path: "/wealth-management",
  },
  {
    email: "Email*",
    name: "Name",
    subject: "Subject",
    apointment: "Mentoring - Potential",
    path: "/e-mentoring",
  },
  {
    email: "Email*",
    name: "Name",
    subject: "Subject",
    apointment: "Club Investment - Potential",
    path: "/club-investments",
  },
  {
    email: "Email*",
    name: "Name",
    subject: "Subject",
    apointment: "Private Lending - Potential",
    path: "/debt-funding",
  },
];
// FORM SUBMISSION DATA END
// COMMON CARDS DATA START
export const commonCardData = [
  {
    parawidth: "500px",
    cardStyle: "mt-md-2",
    path: "/player-pathwa",
    title: "Bringing Player Dreams to Fruition",
    description:
      "Our player pathways achieve two key outcomes, including player development and overarching club success.",
    cardImage1: PlayerClub,
    cardImage2: PlayerEnchanced,
    cardImage3: Playerascensions,
    subtitle: "Club Synergies",
    subdescription:
      "Improving the ROI of our club investments by connecting budding players with opportunities for measurable growth.",
    subtitle2: "Enhanced Exposure",
    subdescription2:
      "Training players on media engagements while leveraging our marketing packages to improve public sentiment, scouting potential, and club branding.",
    subtitle3: "Player Ascensions",
    subdescription3:
      "Coordinating with our global network of partner agencies and football industry contacts to ascend players into elite leagues.",
  },
  {
    parawidth: "600px",
    path: "/wealth-management",
    title: "Offering a Mosaic of Investment Options",
    description:
      "We believe in finding the right investment solutions to make the most of the compensation you’ve received from the football industry.",
    cardImage1: wealthrisk,
    cardImage2: wealthflexible,
    cardImage3: wealthshariah,
    subtitle: "Shariah-Compliant Options",
    subdescription:
      "Supporting the ever-expanding base of Muslim and conservative players through value-aligned, Shariah-compliant investment options.",
    subtitle2: "Flexible Products",
    subdescription2:
      "Pairing our clients with the optimal investment products, whether that’s real estate, fixed income, or frontier investments.",
    subtitle3: "Risk Protection",
    subdescription3:
      "Mitigating risk while elevating potential returns through reputable, diversified investments with a track record of high performance.",
  },
  {
    parawidth: "620px",
    path: "/e-mentoring",
    title: "Putting Wisdom Within Reach",
    description:
      "Our network of experts, coaches, and former players unite for the betterment of the players we serve.",
    cardImage1: Mentoringresiliency,
    cardImage2: Mentoringlearing,
    cardImage3: Mentoringoptimal,
    subtitle: "Resiliency Building",
    subdescription:
      "Priming players to not only endure, but also thrive throughout the most competitive levels of football.",
    subtitle2: "Accelerated Learning",
    subdescription2:
      "Cultivating off-field skills for more impactful players while building a sense of community among our clubs.",
    subtitle3: "Optimal Performance",
    subdescription3:
      "Fortifying player mental health, recovery and growth through our dedicated network of leading sports professionals.",
  },
  {
    parawidth: "750px",
    path: "/club-investments",
    cardStyle: "mt-md-2",
    title: "Maximizing Your Upside Potential",
    description:
      "As we expand our portfolio of  clubs , we drive exceptional value through proven operational, managerial, and PR strategies.",
    para1: " Here’s what you can expect.",
    cardImage1: Investmentminimized,
    cardImage2: Investmentmeticulous,
    cardImage3: Investmentholistic,
    subtitle: "Minimized Risk",
    subdescription:
      "Establishing diverse positions in under-exposed clubs with immense untapped value to minimize financial risks.",
    subtitle2: "Meticulous Research",
    subdescription2:
      "Conducting extensive due diligence to ensure the performance potential of each investment before buying a stake.",
    subtitle3: "Holistic Growth",
    subdescription3:
      "Leveraging synergies to develop players, cultivate exposure, and engage fans in an ecosystem of sustainable growth.",
  },
  {
    parawidth: "680px",
    path: "/debt-funding",
    cardStyle: "mt-md-3",
    title: "Ensuring Ongoing Club Growth",
    description:
      "Through fair rates for clubs and attractive interest income for our investors, we facilitate mutually agreeable debt funding terms.",
    cardImage1: Fundingfinancing,
    cardImage2: Fundingsharing,
    cardImage3: Fundingunderwrite,
    subtitle: "Strategic Financing",
    subdescription:
      "Supporting high-impact activities such as player transfers to sharpen the competitive edge of the clubs we work with.",
    subtitle2: "Revenue Sharing",
    subdescription2:
      "Allocating working capital into revenue-generating operations to secure meaningful value for both parties.",
    subtitle3: "Reputable Underwriters",
    subdescription3:
      "Leaning on our partnerships with vetted underwriters to evaluate risk and determine the appropriate terms.",
  },
];
// COMMON CARDS DATA END
// SPORTICOSE TEAM DATA START
export const sporticoseTeam = [
  // ABOUS US DATA
  {
    path: "/about-us",
    title: "The Sporticos Team",
    image: wealImage,
    titlename: "Wael Khattab",
    subtitle: "Founder & Executive Director",
    subdescription:
      "Private equity veteran with over two decades of experience and approximately USD 1Bn of capital deployed throughout the Middle East, including 14 buyout transactions across six jurisdictions.",
    imageGirl: drHussaImage,
    titlename2: (
      <>
        Dr. Hussa K. Al<span>&#8209;</span>Khalifa
      </>
    ),
    subtitle: "Founder & Executive Director",
    descriptionpara:
      "Award-winning leader and women’s sports advocate with over two decades of board experience for Arabian Gulf and international football institutions. Published thought leader focused on the role of sports in achieving development goals within the UN framework.",
  },

  // HOME PAGE DATA
  {
    path: "/",
    title: "Founding Team",
    description:
      "Sporticos Capital combines decades of experience across private equity, professional sport management and impact-making to deliver meaningful gains across our portfolio",
    image: wealImage,
    titlename: "Wael Khattab",
    subtitle: "Founder & Executive Director",
    subdescription:
      "Private equity veteran with over two decades of experience and approximately USD 1Bn of capital deployed throughout the Middle East.",
    imageGirl: drHussaImage,
    titlename2: (
      <>
        Dr. Hussa K. Al<span>&#8209;</span>Khalifa
      </>
    ),
    subtitle: "Founder & Executive Director",
    buttonAbout: "about us",
    descriptionpara:
      "Award-winning leader and women’s sports advocate with over two decades of board experience for Arabian Gulf and international football institutions.",
  },
];
// SPORTICOSE TEAM DATA END
// HERO BACKGROUND IMAGE DATA START
export const heroBackground = [
  {
    path: "/",
    backgroundImage: "heroall-background-image",
  },
  {
    path: "/about-us",
    backgroundImage: "heroall-background-image",
  },
  {
    backgroundImage: "heroall-background-image",
    path: "/club-investments",
  },
  {
    backgroundImage: "heroall-background-image",
    path: "/e-mentoring",
  },
  {
    backgroundImage: "heroall-background-image",
    path: "/faq",
  },
  {
    backgroundImage: "heroall-background-image",
    path: "/player-pathwa",
  },
  {
    backgroundImage: "heroall-background-image",
    path: "/wealth-management",
  },
  {
    backgroundImage: "heroall-background-image",
    path: "/debt-funding",
  },
  {
    backgroundImage: "heroall-background-image-contact",
    path: "/contact",
  },
];
// HERO BACKGROUND IMAGE DATA END
