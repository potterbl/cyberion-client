// SitemapPage.jsx
import React from 'react';

const SitemapPage = () => {
    // You can customize this based on your XML content
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- created with www.mysitemapgenerator.com -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cyberion-protoype.netlify.app/</loc>
    <lastmod>2024-01-20T22:22:02+01:00</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://cyberion-protoype.netlify.app/franchise</loc>
    <lastmod>2024-01-20T22:22:02+01:00</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return (
        <div dangerouslySetInnerHTML={{ __html: xmlContent }} />
    );
};

export default SitemapPage;
