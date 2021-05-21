require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//fix for cache issue gatsby instagram
process.env.GATSBY_CONCURRENT_DOWNLOAD = 1;

module.exports = {
  siteMetadata: {
    title: "Amsterdam Nanny",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Amsterdam nanny',
        short_name: 'Amsterdam nanny',
        start_url: '/',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      }
    },
  ],
};
