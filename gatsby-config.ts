import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "TepuyX",
    description: "Software consulting agency specialized in web development and AI",
    siteUrl: "https://tepuyx.com",
  },
  // Since we're using a custom domain (tepuyx.com), we don't need pathPrefix
  // pathPrefix: "/tepuyx.github.io", // Only needed for username.github.io/repo-name URLs
  plugins: [],
};

export default config;