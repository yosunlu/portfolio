import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import onlymemesImg from "@/public/onlymemes.png";
import externalImg from "@/public/external.png";
import othelloImg from "@/public/othello.png";
import portfolioImg from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  { 
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Investment Banking Analyst - JPMorgan",
    location: "Taipei, Taiwan",
    description:
      "Graduated as an Economic major, joined JPMorgan, and worked 20 hours a day, only to find out I am not into baking.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2020",
  },
  {
    title: "Senior Engineer - ADLINK Technology",
    location: "Taipei, Taiwan",
    description:
      "Spent a year surfing, and  decided to make a career switch and got into tech.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Computer Science Master",
    location: "Madison Wisconsin",
    description:
      "Discovered my passion in coding, and decided to pursue a CS master.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Onlymemes",
    description:
      "Full-stack video processing service that allows user to sign in with google account and upload their favorite memes in the form of video. NOT some random youtube clone!",
    tags: ["TypeScript", "React.js", "Node.js", "Firebase"],
    imageUrl: onlymemesImg,
  },
  {
    title: "Othello AI",
    description:
      "Full-stack online board game that leverages Alpha-beta pruning and MonteCarlo tree search algorithms to enable PvP and step-optimization features.",
    tags: ["Python", "MySQL", "FastAPI", "Pytest", 'Docker'],
    imageUrl: othelloImg,
  },
  {
    title: "Portfolio",
    description:
      "This beautiful portfolio.",
    tags: ["Next.js","Typescipt", "React.js", "Framer motion", "Tailwind CSS"],
    imageUrl: portfolioImg,
  },

  {
    title: "External Merge Sort",
    description:
      "Implements an external merge sort and emulates SSD, HDD, CPU, and DRAM to sort 120 GB of data",
    tags: [],
    imageUrl: externalImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "Framer Motion",
  "Docker",
  "Cassandra",
  "Spark",
  "HDFS",
  "Kafka",
] as const;