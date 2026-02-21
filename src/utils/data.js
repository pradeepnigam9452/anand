// ===================== ICON IMPORTS =====================
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import PROJECT_IMG_1 from '../assets/images/pro.png'
import PROJECT_IMG_2 from '../assets/images/portfolio.png'
// ===================== TECH STACK =====================
export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "",
  "Webpack",
  "Vite",,
  "React",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
 
];

// ===================== STATS =====================
export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
];


// ===================== CERTIFICATES =====================

import CERT_1 from '../assets/JAVA.png';
import CERT_2 from '../assets/DSA.png';

// // …add more as needed!

export const CERTIFICATES = [
  {
    title: "java programming certificate by NPTEL",
    issuer: "NPTEL",
    year: "jan, 2024",
    image: CERT_1,
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    year: "oct  2024",
    image: CERT_2,
  },
  // {
  //   title: "Coding thinker: Problem Solving and Programming",
  //   issuer: "Codeing Thinker | SimpliLearn",
  //   year: "26th July 2025",
  //   image: CERT_3,
  // },
  
 
];



// ===================== PROJECTS =====================
export const PROJECTS = [
  {
    id: 1,
    title: "Property Finder ",
    description:
      "A Property finder web app where we can easily find new Property .",
    image: PROJECT_IMG_1,
    tags: ["Node.js  express.js , ejs , mongoDB"],
    liveUrl: "https://property-finder-rose.vercel.app/listings",
    githubUrl: "https://github.com/anandpatle330-web",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Persnal Portfolio",
    description:
      "A personal portfolio built with React and Tailwind CSS.",
    image: PROJECT_IMG_2,
    tags: ["react js"],
     liveUrl: "#",
    githubUrl: "https://github.com/anandpatle330-web",
    featured: true,
    category: "Full Stack",
  },
  //  {
  //   id: 4,
  //   title: "Weather App",
  //   description:
  //     "Developed a responsive weather app with city/postcode search, autocomplete functionality, and dynamic UI that adapts to weather conditions.",
  //   image: PROJECT_IMG_2,
  //   tags: ["HTML 5", "CSS","JavaScript","WeatherAPI"],
  //   liveUrl: "",
  //   githubUrl: "",
  //   featured: false,
  //   category: "Web App",
  // },
  
 
];

// ===================== JOURNEY =====================
export const JOURNEY_STEPS = [
  {
    year: "2020",
    title: "Completed 10th",
    company: "Self-taught",
    description:
      "Completed 10th at satna MP 86 %.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "Completed 12th",
    company: "Self-taught",
    description:
      "Completed My 12th with 85 %.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Started coding Journey by taking admission to the course  ... B tech (CSE) in IES UNIVERSITY BHOPAL.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  
//   
];

// ===================== PASSIONS =====================
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices.",
  },
];

// ===================== SOCIAL LINKS =====================
export const SOCIAL_LINKS = [
  { name: "GitHub", icon: FiGithub, url: "https://github.com/anandpatle330-web", color: "hover:text-gray-400", bgColor: "hover:bg-gray-800" },
  { name: "LinkedIn", icon: FiLinkedin, url: "", color: "hover:text-blue-400", bgColor: "hover:bg-blue-500/10" },
  { name: "LeetCode", icon: FiTwitter, url: "https://leetcode.com/u/Anand_patle/", color: "hover:text-sky-400", bgColor: "hover:bg-sky-500/10" },
  { name: "Email", icon: Mail, url: "anandpatle2005@gmail.com", color: "hover:text-red-400", bgColor: "hover:bg-red-100" },
];

// ===================== CONTACT INFO =====================
export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Bhopal" },
  { icon: Mail, label: "Email", value: "anandpatle2005@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7489424529" },
];
