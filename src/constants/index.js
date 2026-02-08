import {github, linkedin, gmail, discord} from '../assets/index.js'

export const navItems = [
        {
            title: "Home",
            link: "/"
        }, {
            title: "About",
            link: "#about"
        }, {
            title: "Projects",
            link: "#projects"
        }, {
            title: "Certification",
            link: "#certifications"
        }, {
            title: "Contact",
            link: "#contact"
        }
    ]

export const projects = [
    {
        id: 1,
        title: "QuizCraft",
        description: "A Quizzing website with magical frontend design",
        tech_used: ["React JS", "Tailwind CSS", "GSAP", "Express JS", "MongoDB"],
        url: "https://quizcraft-tce.netlify.app",
        code: "https://github.com/sivaprakashp-tce/quizcraft"
    },
    {
        id: 2,
        title: "Homepage for JUSST",
        description: "The homepage of an Edutainment YouTube Channel JUSST Tamil",
        tech_used: ["React JS", "Tailwind CSS", "GSAP"],
        url: "https://jusst.netlify.app",
        code: "https://github.com/JusstTamil/JUSSTWebsite3.0"
    },
    {
        id: 4,
        title: "btrls",
        description: "A Tabled ls command with JSON export of details of files in a directory.",
        tech_used: ["Rust"],
        url: "https://github.com/sivaprakashkrp/btrls/releases/latest",
        code: "https://github.com/sivaprakashkrp/btrls"
    },
    {
        id: 5,
        title: "ebod",
        description: "A command-line utility that makes the process of local manual backups easy and efficient.",
        tech_used: ["Rust"],
        url: "https://github.com/sivaprakashkrp/ebod",
        code: "https://github.com/sivaprakashkrp/ebod"
    },
    {
        id: 3,
        title: "OSDAG Installer for Windows",
        description: "A simple Powershell Script installer for the OSDAG Application",
        tech_used: ["PowerShell Scripts"],
        url: "https://github.com/sivaprakashkrp/OSDAG-Installer-for-Windows",
        code: "https://github.com/sivaprakashkrp/OSDAG-Installer-for-Windows"
    },
]

export const certifications = [
    {
        id: 1,
        title: "Responsive Web Design", 
        provider: "freeCodeCamp",
        skills: ["HTML", "CSS"],
        url: "https://www.freecodecamp.org/certification/Siva_Prakash/responsive-web-design"
    },
    {
        id: 2,
        title: "Predictive Analytics with Regression - Simplified", 
        provider: "TCE MOOCs",
        skills: ["Data Analysis", "Statistics"],
        url: "https://drive.google.com/file/d/1iV862hxBVnTFoDv1HNiZTgzHQDqlHlp3/view?usp=drive_link"
    },
    {
        id: 3,
        title: "Excel Essentials for Data Analytics", 
        provider: "IBM",
        skills: ["Excel", "Data Processing"],
        url: "https://www.credly.com/badges/8a6c3f6c-40e8-4379-aeb0-10e38151607a"
    },
    {
        id: 4,
        title: "MATLAB - Onramp", 
        provider: "MATLAB",
        skills: ["MATLAB"],
        url: "https://drive.google.com/file/d/1L5ILCmpWta50IggRrm7sty3-WbNY1-J9/view?usp=drive_link"
    },
    {
        id: 5,
        title: "Symbolic Math with MATLAB", 
        provider: "MATLAB",
        skills: ["MATLAB"],
        url: "https://drive.google.com/file/d/19kmzvTam0wiO4uICN93YrlLOBTJHn_96/view?usp=drive_link"
    },
]

export const socials = [
    {
        id: 1,
        name: "Mail",
        logo: gmail,
        url: "mailto:sivaprakashkrp@gmail.com"
    },
    {
        id: 2,
        name: "Github",
        logo: github,
        url: "https://github.com/sivaprakashkrp"
    },
    {
        id: 3,
        name: "LinkedIn",
        logo: linkedin,
        url: "https://www.linkedin.com/in/sivaprakash-p-a4310338a/"
    },
    {
        id: 4,
        name: "Discord",
        logo: discord,
        url: "https://discord.com/users/1328282397577314324"
    },
]