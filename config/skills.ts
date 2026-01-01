import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any | null;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "C++",
    description:
      "Lower-level programming language known for its performance and efficiency, widely used in system/software development and game programming.",
    rating: 5,
    icon: Icons.cpp,
  },
  {
    name: "C",
    description:
      "Lower-level programming language that provides low-level access to memory and is widely used in system programming and embedded systems.",
    rating: 5,
    icon: Icons.c,
  },
  {
    name: "Java",
    description:
      "Versatile, object-oriented programming language used for building cross-platform applications, from mobile apps to enterprise software.",
    rating: 5,
    icon: Icons.java,
  },
  {
    name: "OpenGL",
    description:
      "Powerful graphics API for rendering 2D and 3D graphics in applications such as games and simulations.",
    rating: 5,
    icon: Icons.opengl,
  },
  {
    name: "DirectX",
    description:
      "Collection of APIs for handling multimedia tasks, especially game programming and video, on Microsoft platforms.",
    rating: 5,
    icon: Icons.directx,
  },
  {
    name: "Unity",
    description:
      "Comprehensive game development platform for creating 2D, 3D, AR, and VR experiences across multiple platforms.",
    rating: 5,
    icon: Icons.unity,
  },
  {
    name: "PHP",
    description:
      "Server-side scripting language designed for web development but also used as a general-purpose programming language.",
    rating: 5,
    icon: Icons.php,
  },
  {
    name: "Laravel",
    description:
      "PHP framework for web artisans, providing elegant syntax and tools for building robust web applications.",
    rating: 5,
    icon: Icons.laravel,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 2,
    icon: Icons.socketio,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Manage modern web projects with an all-in-one platform for deployment and hosting.",
    rating: 3,
    icon: Icons.netlify,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
