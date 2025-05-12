export default function sitemap() {
  // Define base URL - this will be handled by metadataBase
  const routes = [
    '',
    '/aboutus',
    '/challenges',
    '/rules',
    '/checkout',
  ].map(route => ({
    url: route,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
} 