// generate-sitemap.js
const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://miroabdalian.com' });
const filePath = resolve(__dirname, 'public', 'sitemap.xml');
const writeStream = createWriteStream(filePath);

// ✅ Pipe BEFORE writing
sitemap.pipe(writeStream);

// Your routes
const routes = [
  '/',
  '/project',
  '/resume',
  '/research'
];

// Write URLs to the stream
routes.forEach((route) => {
  sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
});

// End the stream
sitemap.end();

writeStream.on('finish', () => {
  console.log('✅ Sitemap successfully written to public/sitemap.xml');
});
