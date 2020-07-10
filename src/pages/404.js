import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found" />
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Page not found</h1>
      <p>The page you would looking for could not be found.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
