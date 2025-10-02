module.exports = {
  title: "Banaz Sleman | Portfolio",
  description: "Front-End Developer & Software Engineering Student",
  head: [
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ["script", { src: "/js/script.js", defer: true }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about.html" },
      { text: "Contact", link: "/contact.html" },
      { text: "Works", link: "/works/" },
    ],
    sidebar: {
      "/works/": [
        "", // works/README.md (overview)
        "unsend-messages", // works/unsend-messages.md
        "login-page", // works/login-page.md
        "fast-shopping", // works/fast-shopping.md
      ],
    },
  },
};
