module.exports = {
  siteMetadata: {
    title: `LexasCMS Gatsby Example Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // The top level query type, this can be anything that you like
        typeName: 'LexasCMS',
        // The field you'll query against, this can also be anything you like
        fieldName: 'lexascms',
        // The GraphQL content delivery API endpoint for your space.
        // This can be found in your space settings, but you can use the demo
        // endpoint below for the duration of this tutorial.
        url: `https://${process.env.LEXASCMS_SPACE_ID}.spaces.lexascms.com/delivery/graphql`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
