import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostSmall from '../components/blog-post/small';
import BlogPostLarge from '../components/blog-post/large';
import Pagination from '../components/pagination';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <h1 className="text-6xl font-bold mb-10">Blog</h1>

    <BlogPostLarge post={data.lexascms.blogPostCollection.items[0]} />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 row-gap-12 sm:row-gap-16">
      {data.lexascms.blogPostCollection.items.slice(1).map(blogPost => (
        <BlogPostSmall key={blogPost.id} post={blogPost} />
      ))}
    </div>
    
    {data.lexascms.blogPostCollection.total > 10 ? <Pagination nextPage={2} /> : null}
  </Layout>
)

export const query = graphql`
  query {
    lexascms {
      blogPostCollection(
        limit: 10,
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

export default IndexPage;
