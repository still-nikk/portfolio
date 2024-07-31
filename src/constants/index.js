import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    youtubeBG,
    unidriveBG1,
    unidriveBG2,
    nikeBG,
    bookBG,
    digitalTwinBG,
    chromecast,
    cpp,
    cplusplus,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    htmlSVG,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    css,
    git,
    html,
    mongodb,
    mysql,
    react,
    tailwind,
    js,
    aws
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#hero",
    },
    {
      id: "1",
      title: "Skills",
      url: "#skills",
    },
    {
      id: "2",
      title: "About Me",
      url: "#aboutme",
    },
    {
      id: "3",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "4",
      title: "Contact Me",
      url: "#contact",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [   
    {
      src: homeSmile,
      id: "0",
      title: "Home",
      url: "/home",
    },
    {
      src: file02,
      id: "1",
      title: "About Me",
      url: "/aboutme",
    },
    {
      src: searchMd,
      id: "2",
      title: "Projects",
      url: "/projects",
    },
    {
      src: plusSquare,
      id: "3",
      title: "Ideas",
      url: "/ideas",
    },
  ];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    htmlSVG,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "As a frontend developer, I possess a diverse set of technical skills and expertise to create engaging and interactive web experiences.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Cloud 101 [ Amazon Web Services ]",
      url: "https://www.credly.com/badges/edd7511b-5c52-48ba-8cfb-3035bc52791a/linked_in_profile"
      // text: collabText,
    },
    {
      id: "1",
      title: "Github Essentials [ Github ]",
      url: "https://www.linkedin.com/learning/certificates/85f5c0c0c9b43555b0c9798d39ffa089f83c670a116d70ba3cf75f2c8acf1d55"
    },
    {
      id: "2",
      title: "Career Essentials in Software Development [ Microsoft ]",
      url: "https://www.linkedin.com/learning/certificates/3f28eae211c36b3027bac0a7e26281694a8e2c3932ee86cd942f285ccac77122"
    },
    {
      id: "3",
      title: "Agile Project Management [ Google ]",
      url: "https://coursera.org/share/0b0d3e1b4309e686330cec57ccfa1f7f"
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "react",
      icon: react,
      // icon: cpp,
      width: 36,
      height: 36,
      url: "https://react.dev"
    },
    {
      id: "1",
      title: "html",
      icon: html,
      width: 36,
      height: 36,
      url: "https://en.wikipedia.org/wiki/HTML"
    },
    {
      id: "2",
      title: "Js",
      icon: js,
      width: 36,
      height: 28,
      url: "https://en.wikipedia.org/wiki/JavaScript"
    },
    {
      id: "3",
      title: "aws",
      icon: aws,
      width: 34,
      height: 35,
      url: "https://aws.amazon.com/"
    },
    {
      id: "4",
      title: "git",
      icon: git,
      width: 34,
      height: 34,
      url: "https://git-scm.com/"
    },
    {
      id: "5",
      title: "cpp",
      icon: cplusplus,
      width: 34,
      height: 34,
      url: "https://en.wikipedia.org/wiki/C%2B%2B"
    },
    {
      id: "6",
      title: "css",
      icon: css,
      width: 34,
      height: 34,
      url: "https://en.wikipedia.org/wiki/CSS"
    },
    {
      id: "7",
      title: "tailwind",
      icon: tailwind,
      width: 38,
      height: 32,
      url: "https://tailwindcss.com"
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "UniDrive",
      text: "UniDrive is a fully responsive ride-sharing web application designed for college-going students. It is built using HTML and CSS for the front end, Node.js and Express.js for the backend, and integrates MapBox for mapping functionality. Stripe is used as the payment gateway for transactions.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: unidriveBG1,
      gitURL: "https://github.com/still-nikk/UniDrive"
    },
    {
      id: "1",
      title: "Digital Twin",
      text: "Digital Twin is a decentralized blockchain application developed on the Zbyte platform. It utilizes IPFS for file storage and smart contracts written in Solidity for decentralized transactions. The app aims to provide a secure and transparent platform for managing digital assets.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: digitalTwinBG,
      // light: true,
      gitURL: "https://github.com/still-nikk/Digital-Twin"
    },
    {
      id: "2",
      title: "Employee Manager",
      text: "The Employee Management System is a basic Java application developed using Apache NetBeans and JDBC for database connectivity with MySQL. It allows for the management of employee records, including adding, updating, and deleting employee information.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
      gitURL: "https://github.com/still-nikk/Basic-Employee-Management-System"
    },
    {
      id: "3",
      title: "Responsive Book Website",
      text: "This project is a responsive website for browsing and purchasing books, built using React and Tailwind CSS. It provides a user-friendly interface for exploring a catalog of books and making purchases online. This Project kickstarted my React journey",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: bookBG,
      // light: true,
      gitURL: "https://github.com/still-nikk/Book-shop-website"
    },
    {
      id: "4",
      title: "Nike Landing Page",
      text: "This project is a landing page clone of Nike's website, built using React and Tailwind CSS. It replicates the design and style of Nike's landing page, providing an immersive experience for users.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: nikeBG,
      gitURL: "https://github.com/still-nikk/Nike-Clone"
    },
    {
      id: "5",
      title: "YouTube Clone",
      text: "A simple YouTube clone created using basic HTML and CSS. This project mimics the basic layout and functionality of YouTube, allowing users to view videos and interact with the interface. This was my first hands-on front-end project.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: youtubeBG,
      gitURL: "https://github.com/still-nikk/YouTube-Clone"
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];
  