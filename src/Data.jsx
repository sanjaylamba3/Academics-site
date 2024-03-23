import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.webp";
import courses2 from "./assets/courses2.webp";
import courses3 from "./assets/courses3.webp";
import courses4 from "./assets/courses4.webp";
import courses5 from "./assets/courses5.webp";
import courses6 from "./assets/courses6.webp";
import courses7 from "./assets/courses7.webp";
import courses8 from "./assets/courses8.webp";

import book1 from "./assets/book-img/book1.jpg";
import book2 from "./assets/book-img/book2.jpg";
import book3 from "./assets/book-img/book3.jpg";
import book4 from "./assets/book-img/book4.jpg";
import book5 from "./assets/book-img/book5.png";
import book6 from "./assets/book-img/book6.png";
import book7 from "./assets/book-img/book7.png";
import book8 from "./assets/book-img/book8.png";
import book9 from "./assets/book-img/book9.png";
import book10 from "./assets/book-img/book10.png";
import book11 from "./assets/book-img/book11.png";

import ISWlogo from "./assets/logos/logo.png";
import logo1 from "./assets/logos/logo1.png";
import logo2 from "./assets/logos/logo2.png";
import logo3 from "./assets/logos/logo3.png";
import logo4 from "./assets/logos/logo4.png";
import logo5 from "./assets/logos/logo5.png";
import logo6 from "./assets/logos/logo6.png";
import logo7 from "./assets/logos/logo7.png";

export const logo = ISWlogo;

export const navLinks = [
    {
        id: 1,
        path: "/",
        link: "Home",
    },
    {
        id: 2,
        path: "/about",
        link: "About",
    },
    {
        id: 3,
        path: "/courses",
        link: "Courses",
    },
    {
        id: 4,
        path: "/books",
        link: "Books",
    },
    {
        id: 5,
        path: "/contact",
        link: "Contact",
    },
];

export const categories = [
    {
        id: 1,
        icon: <FiPenTool />,
        category: "Design",
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        category: "Development",
    },
    {
        id: 3,
        icon: <BsBarChartLine />,
        category: "Business",
    },
    {
        id: 4,
        icon: <MdOutlineScience />,
        category: "Science",
    },
];

export const courses = [
    {
        id: 1,
        image: courses1,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
    },
    {
        id: 2,
        image: courses2,
        category: "Web Development",
        title: "FullStack Web Development Course",
        rating: 4.8,
        participants: 700,
    },
    {
        id: 3,
        image: courses3,
        category: "Web Development",
        title: "Python Beginner to Advanced Course",
        rating: 4.9,
        participants: 300,
    },
    {
        id: 4,
        image: courses4,
        category: "Web Design",
        title: "UI/UX Design Crazy Course With Harrys",
        rating: 4.7,
        participants: 600,
    },
    {
        id: 5,
        image: courses5,
        category: "AI Development",
        title: "Complete AI Development With Python ",
        rating: 4.9,
        participants: 500,
    },
    {
        id: 6,
        image: courses6,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
    },
    {
        id: 7,
        image: courses7,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
    },
    {
        id: 8,
        image: courses8,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
    },
];

export const books = [
    {
        id: 1,
        title: "The Journey of Astronomy-EN",
        image: book1,
    },
    {
        id: 2,
        title: "The Journey of Astronomy-HI",
        image: book2,
    },
    {
        id: 3,
        title: "Color the universe-HI",
        image: book3,
    },
    {
        id: 4,
        title: "Nasa fun pad-HI",
        image: book4,
    },
    {
        id: 5,
        title: "Nasa fun pad-EN",
        image: book5,
    },
    {
        id: 6,
        title: "Color the universe-EN",
        image: book6,
    },
    {
        id: 7,
        title: "Space activity book",
        image: book7,
    },
    {
        id: 8,
        title: "Space shuttle color and learn-EN",
        image: book8,
    },
    {
        id: 9,
        title: "Space shuttle color and learn-HI",
        image: book9,
    },
    {
        id: 10,
        title: "Space tech fun pad-HI",
        image: book10,
    },
    {
        id: 11,
        title: "Space tech fun pad-EN",
        image: book11,
    },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export const accordions = [
    {
        id: 1,
        title: "What is India Space Week?",
        content:
            "India Space Week consists of space education and outreach events held by space agencies, aerospace companies, schools, College, University, planetaria, museums, and astronomy clubs around the National in a common timeframe. India Space Week is coordinated by the India Nation with the support of the India Space Week Association (ISWA). The ISWA leads a global team of National Coordinators, who promote the celebration of India Space Week within their own countries. The ISA AND IICT declared in 2022 that India Space Week will be held each year on the Celebration of birth of 12-18 august Vikram Sarabhai.",
    },
    {
        id: 2,
        title: "What can I learn from India Space Week?",
        content:
            "You can learn a variety of skills like remote sensing,GIS,Python programming which are used extensively in the field of space science",
    },
];
