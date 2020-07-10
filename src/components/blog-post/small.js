import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';

const BlogPostSmall = ({ post }) => (
  <div>
    <Link to={`/${post.slug}`} className="block h-56 sm:h-48 mb-4">
      <img src={post.coverImage.url} alt="" className="w-full h-full object-cover rounded" />
    </Link>
    <h2 className="text-2xl leading-8 font-bold mb-3">
      <Link to={`/${post.slug}`} className="block hover:text-gray-700">{post.title}</Link>
    </h2>
    <div className="flex font-medium text-gray-900 mb-3">
      <Moment format="MMMM D, YYYY">{post.publishedAt}</Moment>
    </div>
    <div className="text-gray-700 mb-4">
      {post.excerpt}
    </div>
    <div className="flex justify-between">
      <Link to={`/${post.slug}`} className="text-gray-900 font-medium hover:text-gray-700">Read More &rarr;</Link>
    </div>
  </div>
);

export default BlogPostSmall;
