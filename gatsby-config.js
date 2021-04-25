module.exports = {
  siteMetadata: {
    title: "Amsterdam Nanny",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Ya8lpcZT7S5gOtBx-MCE-VaDHOB8p3qEqud7Pfq9l8c",
        spaceId: "o6rwl3xcvfej",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
