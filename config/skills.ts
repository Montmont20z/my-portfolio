import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any | null;
}

export const skillsUnsorted: skillsInterface[] = [
  // === STRONGEST SKILLS (Your actual expertise) ===
  {
    name: "C++",
    description:
      "Custom game engine development with DirectX 9, Win32 API, and low-level systems programming. Built Breakout engine from scratch.",
    rating: 5,
    icon: Icons.cpp,
  },
  {
    name: "JavaScript",
    description:
      "Full-stack development with React and vanilla JS. Built complete games and web applications with modern ES6+ features.",
    rating: 5,
    icon: Icons.javascript,
  },

  {
    name: "React",
    description:
      "Component-based architecture, state management, hooks, and modern React patterns. Built production-ready applications.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "HTML 5",
    description:
      "Semantic markup, Canvas API for 2D games, and modern web standards across multiple projects.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "C",
    description:
      "Systems programming fundamentals, memory management, and low-level operations. Academic and practical experience.",
    rating: 4,
    icon: Icons.c,
  },
  {
    name: "Unity",
    description:
      "3D game development with C#, custom shaders, physics systems, and game mechanics. Shipped multiple complete games.",
    rating: 4,
    icon: Icons.unity,
  },
  {
    name: "OpenGL",
    description:
      "Modern graphics programming with shaders, VBOs, and 3D rendering. Currently building Minecraft clone project.",
    rating: 4,
    icon: Icons.opengl,
  },
  {
    name: "DirectX",
    description:
      "DirectX 9 rendering, sprite batching, and game engine architecture. Implemented custom 2D renderer with FMOD audio integration.",
    rating: 4,
    icon: Icons.directx,
  },
  {
    name: "Java",
    description:
      "Object-oriented programming, data structures & algorithms, and application development from academic coursework.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "CSS 3",
    description:
      "Modern styling with Flexbox, Grid, animations, and responsive design. Experience with both vanilla CSS and frameworks.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "PHP",
    description:
      "Server-side scripting and backend development. Practical experience from Laravel internship.",
    rating: 4,
    icon: Icons.php,
  },
  {
    name: "Laravel",
    description:
      "MVC architecture, Eloquent ORM, and RESTful API development. Hands-on experience during internship.",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid UI development. Used in React projects for modern, responsive designs.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "MySQL",
    description:
      "Relational database design, queries, and optimization. Used in full-stack web applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  
  // === DEVELOPING SKILLS (Real experience but still learning) ===
  
  {
    name: "Typescript",
    description:
      "Type-safe JavaScript development with interfaces and advanced typing. Used in modern web projects.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript runtime for backend development and tooling. Experience with npm ecosystem.",
    rating: 3,
    icon: Icons.nodejs,
  },
  {
    name: "Netlify",
    description:
      "Modern web deployment, CI/CD pipelines, and serverless functions. Deployed multiple live projects.",
    rating: 3,
    icon: Icons.netlify,
  },
  {
    name: "AWS",
    description:
      "Cloud services for deployment and hosting. Basic experience with S3, EC2, and related services.",
    rating: 2,
    icon: Icons.amazonaws,
  },
  {
    name: "Socket.io",
    description:
      "Real-time bidirectional communication for web applications. Limited project experience.",
    rating: 2,
    icon: Icons.socketio,
  },
  {
    name: "Bootstrap",
    description:
      "Responsive CSS framework for quick prototyping. Basic understanding and usage.",
    rating: 2,
    icon: Icons.bootstrap,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

// Featured skills (top 6) will be: C++, JavaScript, DirectX, React, HTML5, Unity
export const featuredSkills = skills.slice(0, 6);