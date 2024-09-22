export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#work-experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[40vh] lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "/me1.svg",
  },
  {
    id: 2,
    title:
      "Passionate about exploring new possibilities in the world of web development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Feel free to connect with me.",
    description: "Let’s get in touch!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const technologies = [
  {
    id: 1,
    name: "Next.js",
    img: "/next.svg",
  },
  {
    id: 2,
    name: "react",
    img: "/re.svg",
  },
  {
    id: 3,
    name: "typescript.",
    img: "/ts.svg",
  },
  {
    id: 4,
    name: "javascript",
    img: "/js.svg",
  },
  {
    id: 5,
    name: "angular",
    img: "/angular.svg",
  },
  {
    id: 6,
    name: "tailwindcss",
    img: "/tail.svg",
  },
  {
    id: 6,
    name: "docker",
    img: "/dock.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Cape Ann Enterprises",
    desc: "My focus was to enhance the application using Angular, Strapi, and SQLite. We adopted Agile methodologies for effective project management.",
    date: "Jun 2022 - Aug 2022",
    thumbnail: "/cape-ann-logo.png",
  },
  {
    id: 2,
    title: "Software Engineer - Pickleball.com",
    desc: " I had the opportunity to develop responsive and user-friendly web interfaces, specializing in React, TypeScript, Next.js, and Tailwind CSS.",
    date: "Sep 2022 - May 2024",
    thumbnail: "/pickleball-icon.svg",
  },
  {
    id: 3,
    title: "Software Engineer - Techman Solutions",
    desc: "Specializing in developing and customizing Odoo ERP solutions, I focus on tailored deployments, client training, and ensuring seamless integration to optimize business processes.",
    date: "May 2024 - Present",
    thumbnail: "/techman-solutions-icon.png",
  },
];
