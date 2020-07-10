const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Retrieve blog posts from LexasCMS
  const result = await graphql(`
    {
      lexascms {
        blogPostCollection(limit: 100) {
          total
          items {
            id
            slug
          }
        }
      }
    }
  `);

  // Throw if errors occurred
  if (result.errors) {
    throw result.errors;
  }

  // Locate blog post template
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

  // Create blog post pages
  result.data.lexascms.blogPostCollection.items.forEach(blogPost => {
    createPage({
      path: blogPost.slug,
      component: blogPostTemplate,
      context: {
        postId: blogPost.id
      }
    });
  });

  // Create pagination pages
  const postsOnFirstPage = 10;
  const postsPerPage = 9;
  const totalPages = Math.ceil((result.data.lexascms.blogPostCollection.total - postsOnFirstPage) / postsPerPage) + 1;
  const ListPageTemplate = path.resolve(`./src/templates/list-page.js`);
  Array.from({ length: totalPages }).forEach((_, i) => {
    const currentPage = i + 2;
    createPage({
      path: `/page/${i + 2}`,
      component: ListPageTemplate,
      context: {
        limit: postsPerPage,
        skip: (postsPerPage * i) + postsOnFirstPage,
        currentPage,
        totalPages,
        nextPage: currentPage < totalPages ? currentPage + 1 : undefined,
        prevPage: currentPage > 1 ? currentPage - 1 : undefined
      }
    });
  });
}