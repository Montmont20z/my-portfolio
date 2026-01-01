import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "share-me-webapp",
    companyName: "Share Me WebApp",
    type: "Personal",
    category: ["Web Dev", "UI/UX", "Full Stack"],
    shortDescription:
      "Developed a web application for image sharing using React, Node.js, and Sanity, featuring user authentication and secure file management.",
    websiteLink: "https://sharemeconnect.netlify.app/",
    githubLink: "https://github.com/Montmont20z/share-me-app",
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-22"),
    companyLogoImg: "/projects/share-me/share-me.png",
    pagesInfoArr: [
      {
        title: "Gallery / Masonry Grid",
        description:
          "Responsive, image-first browsing with a Masonry-style grid for pins and visual discovery.",
        imgArr: ["/projects/share-me/screenshot.png"],
      },
      {
        title: "Upload & Profile Flows",
        description:
          "Create and manage pins, user profiles, save flows, and in-app commenting powered by the Sanity backend.",
        imgArr: ["/projects/share-me/screenshot2.png", "/projects/share-me/screenshot3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ShareMe is a photo-sharing platform built as a polished portfolio project to demonstrate end-to-end web development skills.",
        "It combines a React frontend with a Sanity CMS–powered backend to provide a snappy, image-first experience for browsing, creating, and interacting with pins.",
        "The app implements responsive Masonry-style layouts, search and detail views for pins, user profile management, create/save pin flows, commenting, and optimized image delivery through Sanity.",
      ],
      bullets: [
        "Image upload with optimized delivery via Sanity",
        "Browse, search, and detail views for pins with a responsive Masonry grid",
        "User profiles, create/save pin flows, and commenting",
        "Responsive design and mobile-first UX",
        "Sanity CMS schema for content modeling and media management",
      ],
    },
  },
  {
    id: "breakout-gameengine",
    companyName: "Breakout GameEngine",
    type: "Personal",
    category: ["Game Engine", "Game Development"],
    shortDescription:
      "A small Win32 / DirectX9 game engine project that implements the classic BreakOut game.",
    websiteLink:"https://github.com/Montmont20z/Breakout/releases/tag/Release",
    githubLink: "https://github.com/Montmont20z/Breakout-GameEngine",
    techStack: ["C++", "DirectX", "Win32"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/breakout/logo.png",
    pagesInfoArr: [
      {
        title: "Gameplay Demo",
        description:
          "Playable Breakout demo showcasing physics, collision handling, and level progression. \n https://github.com/Montmont20z/Breakout/releases/tag/Release",
        imgArr: ["/projects/breakout/screenshot1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A small Win32 / DirectX9 game engine project that implements the classic BreakOut game. This repository contains a minimal, hand-rolled engine demonstrating Win32 window handling, DirectX9 rendering, simple physics, input management, sound management, game state management and animation. ",
      ],
      bullets: [
        "Implements a game loop and basic physics",
        "Canvas-based rendering and collision handling",
        "Modular engine components for levels and entities",
      ],
    },
  },
  {
    id: "shadow-dog",
    companyName: "Shadow Dog",
    type: "Personal",
    category: ["Game Development", "Game Engine"],
    shortDescription:
      "In Shadow Dog vs Monster, you play as a courageous dog on a quest to save its world from an invasion of terrifying monsters. Armed with determination and a rolling attack, the dog must defeat each monster to restore peace.",
    websiteLink: "https://adorable-crisp-2d144a.netlify.app/",
    githubLink: "https://github.com/Montmont20z/Shadow-dog",
    techStack: ["Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/shadowdog/logo.png",
    pagesInfoArr: [
      {
        title: "Sprite Animation Demo",
        description:
          "Interactive sprite animation system demonstrating frame-based character animation and movement mechanics.",
        imgArr: ["/projects/shadowdog/screenshot1.png"],
      },
      {
        title: "Play now",
        description:
          "https://adorable-crisp-2d144a.netlify.app/",
        imgArr: [],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Shadow Dog is a sprite animation and game mechanics project that explores the fundamentals of sprite-based animation using HTML5 Canvas.",
        "The project demonstrates techniques for handling sprite sheets, frame interpolation, and character movement states, providing a foundation for game development.",
      ],
      bullets: [
        "Sprite sheet parsing and frame-based animation",
        "Character movement and state management",
        "Canvas-based rendering and animation loop",
        "Input handling for character control",
      ],
    },
  },
  {
    id: "splash-ground",
    companyName: "Splash Ground",
    type: "Personal",
    category: ["Game Development", "Game Engine", "3D Modeling"],
    shortDescription:
      "A fast-paced 3D arena survival shooter where players must keep the arena floor clean by spraying it while waves of monsters contaminate the ground. Survive by maintaining at least 80% healthy ground until the timer expires.",
    websiteLink: "https://github.com/Montmont20z/Splash-Ground/releases/tag/Release",
    githubLink: "https://github.com/Montmont20z/Splash-Ground",
    techStack: ["Unity", "C#"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-01-01"),
    companyLogoImg: "/projects/splashground/logo.png",
    pagesInfoArr: [
      {
        title: "Gameplay Arena",
        description:
          "3D arena showcasing territory control mechanics with dynamic floor contamination and health systems.",
        imgArr: ["/projects/splashground/screenshot1.png"],
      },
      {
        title: "Combat & Wave System",
        description:
          "Monster wave mechanics and player shooting controls with territory defense gameplay.",
        imgArr: ["/projects/splashground/screenshot2.png"],
      },
      {
        title: "Download",
        description:
          "https://github.com/Montmont20z/Splash-Ground/releases/tag/Release",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Splash Ground is a fast-paced 3D arena survival shooter that combines territory control with wave-based combat. Players must strategically manage their time between spraying the floor to keep it healthy and defending against contaminating monster waves.",
        "The game features a unique dual-objective gameplay loop where maintaining at least 80% of the arena floor in its clean, green state is just as important as dealing with enemy threats. The contamination spreads dynamically as monsters traverse the arena, creating an engaging challenge of resource and time management.",
        "Developed in Unity using C# for game logic and custom shaders for visual effects, the project demonstrates advanced game development techniques including procedural floor state management, wave-based enemy spawning systems, and real-time territory percentage calculations.",
      ],
      bullets: [
        "Developed complete 3D arena survival gameplay with territory control mechanics",
        "Implemented dynamic floor contamination system using custom shaders",
        "Created wave-based enemy spawning and AI pathfinding systems",
        "Built real-time percentage tracking for win/lose conditions",
        "Designed player movement, shooting, and spraying mechanics",
        "Collaborated with a team of 3 contributors for art and game design",
        "Published playable release build on GitHub",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
