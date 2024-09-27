import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDribbble,
  } from "react-icons/fa6";
  
  import project1 from "../assets/Project1.png";
  import project2 from "../assets/Project2.png";
  import project3 from "../assets/Project3.png";
  
  export const LINKS = [
    { id: "projects", name: "projects" },
    { id: "about", name: "about" },
    { id: "letsTalk", name: "let's talk" },
    { id: "contact", name: "Contact" },
  ];
  
  export const MARQUEE_TEXT =
    `React, Next.js, Node.js, Express, MongoDb, Tailwind, Mongoose, Javascript, PostMan, Redux,`;
  
  export const PROJECTS = [
    {
      id: 1,
      title: "Hanover",
      description:
        "A full-featured order tracking website built with Next.js and Node.js.",
      imgSrc: project1,
      link: "https://hanover-lilac.vercel.app/",
    },
    {
      id: 2,
      title: "A Chat App",
      description:
        "A chat application with real-time chat and notifications.",
      imgSrc: project2,
      link: "https://github.com/Sanjiep/KuraKani",
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        "A job portal with user authentication and job posting features.",
      imgSrc: project3,
      link: "#",
    },
    {
      id: 4,
      title: "Something",
      description:
        "Something Coming Soon!",
      videoSrc: "https://cdn.dribbble.com/userupload/14523432/file/original-d3ccbc9d10c716bebf705aa441d13204.mp4",
      link: "#",
    },

  ];
  
  export const ABOUT =
    "I am a full stack developer that specializes in JavaScript and associated frameworks, such as ReactJS, NextJS, and Node. I specialize in developing dynamic, responsive web apps using Express for backend development and MongoDB with Mongoose for effective data management.";
  
  export const EXPERIENCES = [
    {
      company: "Google",
      role: "Software Engineer",
      year: "12/2023 - Present",
      description:
        "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
    },
    {
      company: "Facebook",
      role: "Frontend Developer",
      year: "01/2021 - 11/2023",
      description:
        "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://github.com/sanjiep/",
      icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://dribbble.com/sanjeev_magar",
      icon: <FaDribbble fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://instagram.com/uisanjiep",
      icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/magarsanjeev",
      icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/sanjiepM",
      icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
    },
  ];
  
  export const CONTACT = {
    text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
    email: "whoissanjiep@gmail.com",
    phone: "+358-415776010",
  };
  