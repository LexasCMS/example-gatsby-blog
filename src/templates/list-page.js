import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostSmall from '../components/blog-post/small';
import Pagination from '../components/pagination';

const ListPage = ({ data, pageContext }) => (
  <Layout>
    <SEO title={`Page ${pageContext.currentPage}`} />

    <h1 className="text-6xl font-bold mb-10">Blog</h1>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 row-gap-12 sm:row-gap-16">
      {data.lexascms.blogPostCollection.items.map(blogPost => (
        <BlogPostSmall key={blogPost.id} post={blogPost} />
      ))}
    </div>
    
    <Pagination nextPage={pageContext.nextPage} prevPage={pageContext.prevPage} />
  </Layout>
)

export const query = graphql`
  query BlogListPage($limit: LexasCMS_CollectionLimitInput!, $skip: LexasCMS_CollectionSkipInput!) {
    lexascms {
      blogPostCollection(
        limit: $limit,
        skip: $skip,
        order: [ publishedAt_DESC ]
      ) {
        total
        items {
          id
          slug
          title
          publishedAt
          coverImage {
            url
          }
          excerpt
        }
      }
    }
  }
`;

export default ListPage;
