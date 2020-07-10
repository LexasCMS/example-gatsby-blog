import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ nextPage, prevPage }) => {
  return (
    <div className="flex justify-between border-t border-gray-300 pt-6 mt-12">
      <div>
        {
          prevPage !== undefined &&
          <Link to={prevPage !== 1 ? `/page/${prevPage}` : '/'} className="text-gray-900 font-medium hover:text-gray-700">&larr; Newer Posts</Link>
        }
      </div>
      <div>
        {
          nextPage !== undefined &&
          <Link to={`/page/${nextPage}`} className="text-gray-900 font-medium hover:text-gray-700">Older Posts &rarr;</Link>
        }
      </div>
    </div>
  );
};

export default Pagination;
