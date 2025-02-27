import user_image1 from './user-image.png';
import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img1 from './profile-img.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
// import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profileImg from './profile1.jpg'
import profileImg2 from './profile2.jpg'
import github from './github.svg'
import linkedin from './linkedin.png'
import x from './x.png'
import instagram from './instagram.svg'
import react from './logo/react.png'
import js from './logo/js.png'
import css from './logo/css.png'
import express from './logo/express.png'
import motion from './logo/framer-motion-seeklogo.png'
import html from './logo/html5.png'
import mongo from './logo/MongoDB_ForestGreen.png'
import nodeDark from './logo/nodejsStackedDark.svg'
import tailwind from './logo/tailwind.png'
import nodeLight from './logo/nodejsStackedLight.svg'
import nextjs from './logo/nextjs-icon.png'
import expressLight from './logo/expressLight.png'
import shareAMeal from './sites/shareAMeal.png'
import cinePop from './sites/cinePop.png'
import nomadLand from './sites/nomadLand.png'
import gitLight from './logo/github-mark-white.png'
import gigBite from './sites/gig-biteSS.png'


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    // send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    react,
    profileImg2,
    profileImg,
    github,
    linkedin,
    x,
    instagram,
    js,
    css,
    express,
    motion,
    html,
    mongo,
    nodeDark,
    tailwind,
    nodeLight,
    nextjs,
    expressLight,
    gitLight
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.react, iconDark: assets.react, title: 'React JS', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const projects = [
    {
        title: "Gig-Bite",
        image: gigBite,
        description: 'GigBite is a micro-task and earning platform designed to connect workers and buyers for task-based collaborations. The platform ensures seamless task management, coin-based payments, and role-specific dashboards.',
        technologies: ["React", "React Router", "JWT", "Firebase", "Tailwind", "Framer", "Node JS", "Express JS", "stripe", "Mongo DB"],
        liveLink: "https://gig-bite.web.app/",
        repo: "https://github.com/Rza-O/Rza-O-gigbite-dashboard-fullstack-client"
    },
    {
        title: "Share-A-Meal",
        image: shareAMeal,
        description: 'This project focuses on connecting donors and recipients to reduce food waste and share meals with those in need. Built with a robust tech stack, this project ensures smooth user experiences, dynamic interactions, and powerful functionality.',
        technologies: ["React", "React Router", "Firebase", "Tailwind", "Framer", "Node JS", "Express JS", "Mongo DB"],
        liveLink: "https://share-aa-meal.web.app/",
        repo: "https://github.com/Rza-O/share-a-meal-fullstack-client"
    },
    {
        title: "Cine Pop",
        image: cinePop,
        description: 'CinePop is a dynamic movie portal that allows users to explore, review, and manage their favorite films. With features like user authentication, movie CRUD operations, personalized favorites, and dark/light theme toggles, CinePop offers an intuitive and engaging experience.',
        technologies: ["React", "React Router", "Firebase", "Tailwind", "Node JS", "Express JS", "Mongo DB"],
        liveLink: 'https://cinepop.surge.sh/',
        repo: "https://github.com/Rza-O/CinePop-Movie-Review-Portal--client"
    },
    // {
    //     title: "Nomad's Land",
    //     image: nomadLand,
    //     description: "Nomad's Land is an eco-adventure blog website dedicated to promoting sustainable travel experiences. It allows users to explore detailed information on eco-friendly adventures, while encouraging responsible tourism. With features like expert consultations, user profiles, and interactive tools, it fosters community engagement and makes it easier for users to plan their next eco-conscious journey.",
    //     technologies: ["React", "React Router", "Firebase", "Tailwind", "AOS", "Swiper"],
    //     liveLink: 'https://nomads-land.surge.sh/',
    //     repo: "https://github.com/Rza-O/nomads-land-ecoadventure-react-full-assignment"
    // }
]