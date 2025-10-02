module.exports = {
  title: "Banaz Sleman | Portfolio",
  description: "Front-End Developer & Software Engineering Student",
  base: "/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about.html" },
      { text: "Works", link: "/works/" },
      { text: "Contact", link: "/contact.html" },
    ],

    sidebar: {
      "/works/": [
        {
          title: "My Projects",
          children: ["", "fast-shopping", "login-page", "unsend-messages"],
        },
      ],
    },
  },

  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
  ],
};
