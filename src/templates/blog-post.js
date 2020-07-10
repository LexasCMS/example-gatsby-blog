import React from 'react';
import { Link, graphql } from 'gatsby';
import Moment from 'react-moment';
import Markdown from 'react-markdown';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.lexascms.blogPostItem;

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
      />

      <h1 className="text-4xl sm:text-5xl leading-10 sm:leading-14 font-bold mb-8 sm:text-center">{post.title}</h1>
  
      <div className="text-lg font-medium text-gray-900 sm:text-center mb-10">
        Published on <Moment format="MMMM D, YYYY">{post.publishedAt}</Moment> by {post.author.name}
      </div>
  
      <div className="max-w-screen-md mx-auto">
        <img src={post.coverImage.url} alt="" className="w-full object-cover rounded mb-6" />
  
        <div className="text-gray-700 leading-8 space-y-4 mb-8">
          <Markdown source={post.mainContent} />
        </div>
  
        <Link to="/" className="text-gray-900 font-medium hover:text-gray-700">&larr; Back to Posts</Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($postId: ID!) {
    lexascms {
      blogPostItem(id: $postId) {
        title
        publishedAt
        coverImage {
          url
        }
        author {
          name
        }
        excerpt
        mainContent
      }
    }
  }
`;

export default BlogPost;
