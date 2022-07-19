import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Catalysis",
  description: "An open-source deployment tool",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "msapplication-TileColor", content: "#dd2476" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    logo: "/rounded-logo.svg",
    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/catalysisdotdev" },
      { icon: "github", link: "https://github.com/catalysisdev" },
    ],
    nav: [
      // { text: "Mastodon", link: "https://craftweg.microblog.com/catalysis" },
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
          { text: "Cloud provider", link: "/users/cloud-provider" },
        ],
      },
      {
        text: "Contributors",
        items: [
          { text: "Deployment", link: "/contributors/deployment" },
          { text: "Self-hosting", link: "/contributors/self-hosting" },
        ],
      },
    ],
    footer: {
      message: "Released under the Mozilla Public License Version 2.0.",
      copyright: "Copyright © 2022-present Catalysis",
    },
  },
});
