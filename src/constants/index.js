import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    django,
    angular,
    postgresql,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    reviewsado,
    healthsync,
    threejs,
    voicesnap,
    mes,
    mic,
    shopkart,
    bookingapp,
    mes1,
    otherproducts,
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
      title: "Django Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Angular Developer",
      icon: backend,
    },
    {
      title: "Node.JS Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Django",
      icon: django,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
  ];
  
  const experiences = [
    {
      title: "Web Dev Co-Lead",
      company_name: "Microsoft Innovations Club VITC",
      icon: mic,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Developing a networking app for college using Django as backend.",
        "Collaborating with Co-Leads to make a work assigner website for the club using React and Django.",
        "Leading the web development department members of Microsoft Innovations Club.",
      ],
    },
    {
      title: "Technical Consultant",
      company_name: "Ministon Engineering Services",
      icon: mes,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Developing and maintaining a web application using Django.",
        "Collaborating with a teammate to make a salary calculator for the company.",
        "Used Pandas to import and export a csv file to make a salary slip in a particular format.",
      ],
    },
    {
      title: "Intern",
      company_name: "Voice Snap",
      icon: voicesnap,
      iconBg: "#383E56",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using Angular, Node.js and PostgreSQL.",
        "Made a E-Commerce website (Shopkart) using Angular, Node.JS and PostgreSQL.",
        "Created a user friendly webpage to connect with Voice Snap's partners using HTML, CSS, DenoJS and PostgreSQL.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HealthSync",
      description:
        "A fitness application that has an array of features designed to empower both clients and trainers. A submitted idea for Smart India Hackathon which got selected in top 30 out of 286 teams.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: healthsync,
      source_code_link: "https://github.com/Santhoshcv19/HealthSync",
    },
    {
      name: "Shopkart",
      description:
        "An E-Commerce web application created during the internship at Voice Snap. Includes CRUD operations, Authentication and dynamically takes the product details from PostgreSQL database",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: shopkart,
      source_code_link: "https://github.com/Santhoshcv19/ShopKart",
    },
    {
      name: "Booking App",
      description:
        "A comprehensive travel booking platform that allows users to book hotels for popular destinations. Includes an admin page for CRUD operations connected with MongoDB database.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: bookingapp,
      source_code_link: "https://github.com/Santhoshcv19/Booking_App",
    },
    {
      name: "Payslip Generator",
      description:
        "A payslip generator created for Ministon Engineering Services while being a technical consultant. Includes creating and adding employee details, importing attendance csv file and exporting a formatted payslip.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mes1,
      source_code_link: "https://github.com/Santhoshcv19/PayRoll-System-Project",
    },
    {
      name: "Partners Web Page",
      description:
        "A dynamic user-friendly web page created during the internship at Voice Snap. Users can simply click a button and contact the partners of the company. A request is sent to the database with the user details.",
      tags: [
        {
          name: "denojs",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: otherproducts,
      source_code_link: "https://schoolchimes.com/vs_web/other_products/?instituteId=5512&staffId=10000",
    },
    {
      name: "Reviewsado",
      description:
        "A dynamic user-friendly created using Django. Includes our reviews of some of the famous T.V.Shows. Users can check out the reviews or click a button to check the imdb reviews of the same.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: reviewsado,
      source_code_link: "https://schoolchimes.com/vs_web/other_products/?instituteId=5512&staffId=10000",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };