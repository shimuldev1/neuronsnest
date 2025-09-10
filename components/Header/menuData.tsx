import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 3,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Our Team Members",
        newTab: false,
        path: "/teams",
      },
      {
        id: 34,
        title: "Mission & Vision",
        newTab: false,
        path: "/mission-vision",
      },

      {
        id: 35,
        title: "Careers",
        newTab: false,
        path: "/career",
      },
    ],
  },
  {
    id: 1,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Web Development",
        newTab: false,
        path: `/services/web-development`,
      },
      {
        id: 22,
        title: "App Development",
        newTab: false,
        path: `/services/app-development`,
      },
      {
        id: 23,
        title: "Software Development",
        newTab: false,
        path: `/services/software-development`,
      },
      {
        id: 24,
        title: "AI Automation",
        newTab: false,
        path: `/services/ai-automation`,
      },
      {
        id: 25,
        title: "Marketing AI & CRM",
        newTab: false,
        path: `/services/marketing`,
      },
      {
        id: 25,
        title: "Workflow Automation",
        newTab: false,
        path: `/services/workflow-automation`,
      },
    ],
  },
  {
    id: 35,
    title: "Portfolio",
    newTab: false,
    path: "/portfolio",
  },
  {
    id: 2,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   title: "Contact",
  //   newTab: false,
  //   path: "/contact",
  // },
];

export default menuData;
