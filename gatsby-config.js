module.exports = {
  siteMetadata: {
    title: `A blog by Eddie Chu`,
    description: `Eddie Chu web developer blog covering projects in html, css, sass, javascript, react`,
    author: `Eddie Chu`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#282C35`,
        theme_color: `#282C35`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`, // <-- this line adds emoji
        ],
      },
    },
  ],
}
