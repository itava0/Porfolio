export const skillsData = [
  { name: "html", category: "frontend" },
  { name: "css", category: "frontend" },
  { name: "sass", category: "frontend" },
  { name: "javascript", category: "language" },
  { name: "typescript", category: "language" },
  { name: "react", category: "frontend" },
  { name: "nextjs", category: "frontend" },
  { name: "git", category: "other" },
  { name: "Salesforce", category: "other" },
  { name: "node.js", category: "backend" },
  { name: "express.js", category: "backend" },
  { name: "Java", category: "backend" },
  {name: "Spring", category: "backend"},
  { name: "sql", category: "backend" }
];

skillsData.forEach((e, i) => (e.id = i));

export const projectsData = [
  {
    name: "Atlantis Property Company",
    description: `Atlantis Property Company’s goal is to create a service in which tenants and property owners can manage their properties.`,
    imgName: "atlantis.png",
    siteUrl: "https://atlantisproperties-dev-ed.my.site.com/main/s/",
    githubUrl: "https://github.com/itava0/Atlantis",
  },
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
