import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Eamon W.",
  logo: "/logo.webp",
  email: "eamon@vantern.org",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/doodles172",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:eamon@vantern.org",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Eamon W.",
    description:
      "Student & full stack developer from the Netherlands who builds cool things.",
    image: identity.logo,
  },
  role: "Student & Full Stack Developer",
  description:
    "I'm Eamon W., a student & full stack developer from the Netherlands who builds cool things.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Eamon W.",
    description:
      "Student & full stack developer from the Netherlands who builds cool things.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Eamon W., a student & full stack developer from the Netherlands who builds cool things.
<br/><br/>
Most of my time goes into open source projects that make people's lives a little easier, whether that's a tool for students, something for developers or an app that people use daily.
<br/><br/>
Outside of code, I love design, art, science and anything tech related. I enjoy exploring nature, learning new skills, and meeting new people along the way.`, // Markdown is supported
    image_l: {
      url: "/pictures/dog.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/pictures/houses.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Founder",
        company: {
          name: "Vantern",
          image: "/projects/vantern.png",
          url: "https://vantern.org",
        },
        date: "April 2026 - Present",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Eamon W.",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "LibreLearn",
      description: "Librelearn is a free, open-source alternative to Studygo & Quizlet.",
      image: "/projects/librelearn.png",
      year: "2026",
      url: "https://librelearn.nl",
    },
    {
      title: "Quest Bot",
      description: "Quest Bot is an opensource modern Discord Bot built for moderation, utilities and support.",
      image: "/projects/questbot.png",
      year: "2026",
      url: "https://github.com/vantern-org/questbot",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Eamon W.",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
