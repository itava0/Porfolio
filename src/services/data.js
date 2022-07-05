export const skillsData = [
  { name: "html", category: "frontend" },
  { name: "css", category: "frontend" },
  { name: "sass", category: "frontend" },
  { name: "javascript", category: "language" },
  { name: "typescript", category: "other" },
  { name: "react", category: "frontend" },
  { name: "node.js", category: "backend" },
  { name: "nextjs", category: "backend" },
  { name: "express.js", category: "backend" },
  { name: "sql", category: "backend" },
  { name: "git", category: "other" },
];

skillsData.forEach((e, i) => (e.id = i));

export const projectsData = [
  {
    name: "RestaurantPassport",
    description: `At RestaurantPassport we aim to give our users a stress-free eating experience by easily finding somewhere to satisfy their appetites.`,
    imgName: "RestaurantPassport.png",
    siteUrl: "https://hopeful-borg-8e270f.netlify.app/",
    githubUrl: "https://github.com/Build-Week-Restaurant-Passport/Front-End",
  },
  {
    name: "Onchill",
    description: `Single Page Application (SPA) implemented with React, and the 
                  moviedb API to fetch dynamic data to the app.`,
    imgName: "Onchill.png",
    siteUrl: "https://onchill.vercel.app/",
    githubUrl: "https://github.com/itava0/onChill",
  },
  {
    name: "Soniry",
    description: `Real estate website implemented with vanilla Javascript, 
                  it has galleries and individual listing pages.`,
    imgName: "soniry.png",
    siteUrl: "https://hardcore-ramanujan-4d4b63.netlify.app",
    githubUrl: "https://github.com/itava0/Soniry",
  },
];

projectsData.forEach((e, i) => (e.id = i));
