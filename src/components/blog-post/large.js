import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';

const BlogPostLarge = ({ post }) => (
  <div className="border-b border-gray-300 pb-12 mb-12">
    <div className="grid lg:grid-cols-5 gap-4 md:gap-6">
      <Link to={`/${post.slug}`} className="block lg:col-span-3">
        <img src={post.coverImage.url} alt="" className="w-full object-cover rounded" />
      </Link>
      <div className="lg:col-span-2">
        <h2 className="text-3xl leading-10 font-bold mb-3">
          <Link to={`/${post.slug}`} className="block hover:text-gray-700">{post.title}</Link>
        </h2>
        <div className="flex font-medium text-gray-900 mb-3">
          <Moment format="MMMM D, YYYY">{post.publishedAt}</Moment>
        </div>
        <div className="text-gray-700 mb-4">
          <p>{post.excerpt}</p>
        </div>
        <Link to={`/${post.slug}`} className="text-gray-900 font-medium hover:text-gray-700">Read More &rarr;</Link>
      </div>
    </div>
  </div>
);

export default BlogPostLarge;
