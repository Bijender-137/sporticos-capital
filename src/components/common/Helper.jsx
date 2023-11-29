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
import sliderimg1 from "../../assets/images/webp/club-drivingslider-image.webp";
import sliderimg2 from "../../assets/images/webp/debt-drivingslider-image.webp";
import sliderimg3 from "../../assets/images/webp/player-drivingslider-image.webp";
// helper_2
import PlayerFirst from "../../assets/images/webp/player-dreamscard-club-image.webp";
import PlayerSecond from "../../assets/images/webp/player-dreamscard-enchanced-image.webp";
import PlayerThird from "../../assets/images/webp/player-dreamscard-playerascensions-image.webp";
import ManagmentPlay1 from "../../assets/images/webp/wealth-offeringcard-risk-image.webp";
import ManagmentPlay2 from "../../assets/images/webp/wealth-offeringcard-flexible-image.webp";
import ManagmentPlay3 from "../../assets/images/webp/wealth-offeringcard-shariah-image.webp";
import Mentoring1 from "../../assets/images/webp/ementoring-puttingcard-resiliency-image.webp";
import Mentoring2 from "../../assets/images/webp/ementoring-puttingcard-learning-image.webp";
import Mentoring3 from "../../assets/images/webp/ementoring-puttingcard-optimal-image.webp";
import Investment1 from "../../assets/images/webp/club-upsidecard-minimized-image.webp";
import Investment2 from "../../assets/images/webp/club-upsidecard-meticulous-image.webp";
import Investment3 from "../../assets/images/webp/club-upsidecard-holistic-image.webp";
import Funding1 from "../../assets/images/webp/debfunding-ongoingclub-financing-image.webp";
import Funding2 from "../../assets/images/webp/debfunding-ongoingclub-sharing-image.webp";
import Funding3 from "../../assets/images/webp/debfunding-ongoingclub-underwrite-image.webp";
import TeamMember1 from "../../assets/images/webp/wael-khattab-team-image.webp";
import TeamMember2 from "../../assets/images/webp/dr-hussa-team-image.webp";

export const accordionItems = [
  {
    title: "What is the primary focus of your club investments?",
    content:
      "We invest in high-potential football clubs, leagues, and adjacent real estate with meaningful upside potential for investors. Fill out the form on our Club Investments page or book an appointment to learn more.",
  },
  {
    title: "How do you minimize risks for sports investors?",
    content:
      "We diversify positions in under-exposed clubs, conduct due diligence, and employ proven strategies to minimize financial risks.",
  },
  {
    title: "How does your e-mentoring platform work?",
    content:
      "By connecting players with a network of mentors, including staff and former players, we foster player growth, resiliency, and well-being.",
  },
  {
    title: "What is your philosophy in terms of wealth management?",
    content:
      "We understand the lifecycle of an athlete’s career. In turn, we tailor our approach to lifestyle goals, time horizon, and values.",
  },
  {
    title:
      "Which investments are included as part of your wealth management offering?",
    content:
      "We offer personalized wealth management, including Shariah-compliant products, real estate, and frontier investments tailored to financial goals",
  },
  {
    title: "Who can benefit from your wealth management solutions?",
    content:
      "Whether you’re a football player, executive, or staff member, we empower individuals across any stage of their career to invest with confidence",
  },
  {
    title: "What is the objective of your player pathways program?",
    content:
      "Our program supports well-rounded player development while factoring into the ecosystem we use to build more competitive clubs.",
  },
  {
    title: "How do your debt funding solutions work?",
    content:
      "We provide working capital for operational expenses and player transfers through fair and attractive debt funding solutions checked by reputable underwriters",
  },
];

export const navLinks = [
  {
    NavName: "Club Investments",
    path: "/club-investments",
  },
  {
    NavName: "E-Mentoring",
    path: "/e-mentoring",
  },
  {
    NavName: "About Us",
    path: "/about-us",
  },
  {
    NavName: "FAQ",
    path: "/faq",
  },
  {
    NavName: "Player Pathwa",
    path: "/player-pathwa",
  },
  {
    NavName: "Wealth Management",
    path: "/wealth-management",
  },
  {
    NavName: "Debt Funding",
    path: "/debt-funding",
  },
];

export const nextlevelData = [
  {
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
    path: "/",
    maxW: "628px",
    maxW1: "550px",
    className: "homepageImg ",
    heading: (
      <>
        Unlocking High Impact Sports
        <span className="clr-yellow">Investment</span> Opportunities
      </>
    ),
    subheading:
      "With a global reach, Sporticos Capital offers solutions for growth in the sports industry with players and clubs at heart.",
    button: "Book Appointment",
    buttonhero: "Get in touch",
    img: homepageImg,
  },
  {
    path: "/about-us",
    maxW: "625px",
    className: "abotusImg",
    heading: (
      <>
        A Thriving <span className="clr-yellow">Ecosystem</span> of
        <span className="clr-yellow">Sports</span> Investment
        <span className="clr-yellow">Opportunities</span>
      </>
    ),

    subheading:
      "At Sporticos Capital, we embrace decades of combined private equity and sports management expertise to put previously inaccessible sports investment opportunities within reach for those we serve.",
    button: "Book Appointment",
    buttonhero: "Get in touch",
    img: aboutUsImg,
  },

  {
    path: "/debt-funding",
    maxW: "525px",
    className: "debtImg",
    heading: (
      <>
        <span className="clr-yellow">Facilitating</span> Seamless Club
        <span className="clr-yellow">Operations</span>
      </>
    ),
    subheading:
      "We support key operational expenses, player transfers, and beyond by making working capital available through our debt funding solutions.",
    button: "Book Appointment",
    img: debtfundingImg,
  },
  {
    path: "/club-investments",
    maxW: "516px",
    className: "culbImg",
    heading: (
      <>
        Invest In <span className="clr-yellow">Vetted Football</span> Clubs
      </>
    ),
    subheading:
      "Our portfolio of high-potential clubs, leagues, and adjacent real estate drives ROI for investors while making a noteworthy impact.",
    button: "Book Appointment",
    img: clubImg,
  },
  {
    path: "/e-mentoring",
    maxW: "600px",
    className: "ementoringImg",
    heading: (
      <>
        Bringing <span className="clr-yellow">Players</span> and
        <span className="clr-yellow">Mentors</span> Together
      </>
    ),
    subheading:
      "Through the power of unity, our e-mentorship platform sparks significant player growth with connections to professionals and former players who have been in their shoes.",
    button: "Book Appointment",
    img: ememtoringImg,
  },
  {
    path: "/wealth-management",
    maxW: "525px",
    className: "wealthImg",
    heading: (
      <>
        Investments <span className="clr-yellow">Tailored</span> to Your
        Financial <span className="clr-yellow">Goals</span>
      </>
    ),
    subheading:
      "We empower football players, executives, and staff alike to invest with confidence through our personalized wealth management solutions.",
    button: "Book Appointment",
    img: wealthImg,
  },
  {
    path: "/player-pathwa",
    maxW: "571px",
    className: "playerImg",
    heading: (
      <>
        Proudly
        <span className="d-lg-block">
          <span className="clr-yellow">Prioritizing</span> Player
        </span>
        Performance
      </>
    ),
    subheading:
      "We believe in the power of well-rounded players both on and off the field to support thriving football clubs.",
    button: "Book Appointment",
    img: playpathwaImg,
  },
  {
    path: "/faq",
    maxW: "548px",
    className: ["faqImg","pt-5"],
    mainheading: (
      <>
        Frequently <span className="clr-yellow">Asked</span> Questions
      </>
    ),
    img: faqImg,
  },
  {
    path: "/contact",
    maxW: "545px",
    className: "contactImg",
    mainheading: (
      <>
        Talk to The <span className="clr-yellow">Team</span>
      </>
    ),
    button: "Book Appointment",
    img: talkImg,
  },
];

export const contactData = [
  {
    path: "/",
    heading: "Discover the Advantage of Sporticos Capital",
    paragraph:
      "We invite growth-minded investors, club executives, and players to reach out today for ",
    paragraph1: " accelerated growth tomorrow.",
    btn: "CONTACT  US",
  },
  {
    path: "/about-us",
    heading: "Reach Out",
    paragraph:
      "For inquiries, investment opportunities, and general questions, we ",
    paragraph1: " invite you to get in touch today.",
    btn: "CONTACT  US",
  },
  {
    path: "/faq",
    heading: "My question isn’t listed above...",
    paragraph: "We encourage you to reach out using the button below for",
    paragraph1: "additional questions. Thank you",
    btn: "CONTACT  US",
  },
];

export const sliderData = [
  {
    img: sliderimg1,
    sliderHeading: "Club Investments",
    sliderpara:
      "Delivering meaningful returns to investors by taking a direct stake in a network of under-exposed clubs with high potential.",
  },
  {
    img: sliderimg2,
    sliderHeading: "Debt Funding",
    sliderpara:
      "Financing clubs to carry out key operations and player transfers while securing fair interest income for our investors.",
  },
  {
    img: sliderimg3,
    sliderHeading: "Player Pathways",
    sliderpara:
      "Nurturing holistic player development to support each club’s success, creating a win-win for players and investors alike.",
  },
  {
    img: sliderimg2,
    sliderHeading: "Debt Funding",
    sliderpara:
      "Financing clubs to carry out key operations and player transfers while securing fair interest income for our investors.",
  },
];
// form submission data heading

export const formdata = [
  {
    heading:
      "Submit your Information and a Member of our Team will Follow Up As Soon As Possible",
    path: "/contact",
  },
  {
    heading: "Unlock Each Player’s Full Potential",
    para: "To get in touch about our player pathways, we encourage you to submit the form below.",
    path: "/player-pathwa",
  },
  {
    maxW: "600px",
    heading: "Leave Your Portfolio In Trusted Hands",
    para: "Take the first step toward our wealth management solutions by submitting the form below.",
    path: "/wealth-management",
  },
  {
    heading: "Discover the Advantage of E-Mentoring",
    para: "For more information about joining our e-mentoring program, simply fill out the form below.",
    path: "/e-mentoring",
  },
  {
    heading: "Winning Investment Portfolios Start Here",
    para: "Fill out the form below to learn more about our club investment opportunities.",
    path: "/club-investments",
  },
  {
    heading: "Secure Favorable Debt Funding Terms",
    para: "Submit the form below for more information about our debt funding solutions.",
    path: "/debt-funding",
  },
];
// form submission enputs
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
// common cards data
export const dreams = [
  {
    maxW: "500px",
    path: "/player-pathwa",
    heading: "Bringing Player Dreams to Fruition",
    para: "Our player pathways achieve two key outcomes, including player development and overarching club success.",
    dremImg: PlayerFirst,
    dremImg2: PlayerSecond,
    dremImg3: PlayerThird,
    subHead: "Club Synergies",
    paragraph:
      "Improving the ROI of our club investments by connecting budding players with opportunities for measurable growth.",
    subHead2: "Enhanced Exposure",
    paragraph2:
      "Training players on media engagements while leveraging our marketing packages to improve public sentiment, scouting potential, and club branding.",
    subHead3: "Player Ascensions",
    paragraph3:
      "Coordinating with our global network of partner agencies and football industry contacts to ascend players into elite leagues.",
  },
  {
    maxW: "600px",
    path: "/wealth-management",
    heading: "Offering a Mosaic of Investment Options",
    para: "We believe in finding the right investment solutions to make the most of the compensation you’ve received from the football industry.",
    dremImg: ManagmentPlay1,
    dremImg2: ManagmentPlay2,
    dremImg3: ManagmentPlay3,
    subHead: "Shariah-Compliant Options",
    paragraph:
      "Supporting the ever-expanding base of Muslim and conservative players through value-aligned, Shariah-compliant investment options.",
    subHead2: "Flexible Products",
    paragraph2:
      "Pairing our clients with the optimal investment products, whether that’s real estate, fixed income, or frontier investments.",
    subHead3: "Risk Protection",
    paragraph3:
      "Mitigating risk while elevating potential returns through reputable, diversified investments with a track record of high performance.",
  },
  {
    maxW: "620px",
    path: "/e-mentoring",
    heading: "Putting Wisdom Within Reach",
    para: "Our network of experts, coaches, and former players unite for the betterment of the players we serve.",
    dremImg: Mentoring1,
    dremImg2: Mentoring2,
    dremImg3: Mentoring3,
    subHead: "Resiliency Building",
    paragraph:
      "Priming players to not only endure, but also thrive throughout the most competitive levels of football.",
    subHead2: "Accelerated Learning",
    paragraph2:
      "Cultivating off-field skills for more impactful players while building a sense of community among our clubs.",
    subHead3: "Optimal Performance",
    paragraph3:
      "Fortifying player mental health, recovery and growth through our dedicated network of leading sports professionals.",
  },
  {
    maxW: "750px",
    path: "/club-investments",
    heading: "Maximizing Your Upside Potential",
    para: "As we expand our portfolio of  clubs , we drive exceptional value through proven operational, managerial, and PR strategies.",
    para1: " Here’s what you can expect.",
    dremImg: Investment1,
    dremImg2: Investment2,
    dremImg3: Investment3,
    subHead: "Minimized Risk",
    paragraph:
      "Establishing diverse positions in under-exposed clubs with immense untapped value to minimize financial risks.",
    subHead2: "Meticulous Research",
    paragraph2:
      "Conducting extensive due diligence to ensure the performance potential of each investment before buying a stake.",
    subHead3: "Holistic Growth",
    paragraph3:
      "Leveraging synergies to develop players, cultivate exposure, and engage fans in an ecosystem of sustainable growth.",
  },
  {
    maxW: "680px",
    path: "/debt-funding",
    heading: "Ensuring Ongoing Club Growth",
    para: "Through fair rates for clubs and attractive interest income for our investors, we facilitate mutually agreeable debt funding terms.",
    dremImg: Funding1,
    dremImg2: Funding2,
    dremImg3: Funding3,
    subHead: "Strategic Financing",
    paragraph:
      "Supporting high-impact activities such as player transfers to sharpen the competitive edge of the clubs we work with.",
    subHead2: "Revenue Sharing",
    paragraph2:
      "Allocating working capital into revenue-generating operations to secure meaningful value for both parties.",
    subHead3: "Reputable Underwriters",
    paragraph3:
      "Leaning on our partnerships with vetted underwriters to evaluate risk and determine the appropriate terms.",
  },
];
// sporticose team data
export const sporticoseTeam = [
  {
    path: "/about-us",
    title: "The Sporticos Team",
    image: TeamMember1,
    titlename: "Wael Khattab",
    subtitle: "Founder & Executive Director",
    subdescription:
      "Private equity veteran with over two decades of experience and approximately USD 1Bn of capital deployed throughout the Middle East, including 14 buyout transactions across six jurisdictions.",
    imageGirl: TeamMember2,
    titlename2: "Dr. Hussa K. Al-Khalifa",
    subtitle: "Founder & Executive Director",
    descriptionpara:
      "Award-winning leader and women’s sports advocate with over two decades of board experience for Arabian Gulf and international football institutions. Published thought leader focused on the role of sports in achieving development goals within the UN framework.",
  },

  // home
  {
    path: "/",
    title: "Founding Team",
    description:
      "Sporticos Capital combines decades of experience across private equity, professional sport management and impact-making to deliver meaningful gains across our portfolio",
    image: TeamMember1,
    titlename: "Wael Khattab",
    subtitle: "Founder & Executive Director",
    subdescription:
      "Private equity veteran with over two decades of experience and approximately USD 1Bn of capital deployed throughout the Middle East.",
    imageGirl: TeamMember2,
    titlename2: "Dr. Hussa K. Al-Khalifa",
    subtitle: "Founder & Executive Director",
    buttonAbout: "about us",
    descriptionpara:
      "Award-winning leader and women’s sports advocate with over two decades of board experience for Arabian Gulf and international football institutions.",
  },
];
