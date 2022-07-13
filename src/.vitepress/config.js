import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Catalysis",
  description: "An open-source deployment tool",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/rounded-logo.png" }],
  ],
  themeConfig: {
    logo: "/rounded-logo.svg",
    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/catalysisdotdev" },
      { icon: "github", link: "https://github.com/catalysisdev" },
    ],
    nav: [
      { text: "Mastodon", link: "https://craftweg.microblog.com/catalysis" },
    ],
    editLink: {
      pattern: "https://github.com/catalysisdev/website/edit/main/src/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: [
      {
        text: "Users",
        items: [
          { text: "Introduction", link: "/users/introduction" },
          { text: "Get started", link: "/users/get-started" },
        ],
      },
    ],
    footer: {
      message: "Released under the Mozilla Public License Version 2.0.",
      copyright: "Copyright © 2022-present Catalysis",
    },
  },
});
