export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout/', '/payment-success/'],
    },
    sitemap: '/sitemap.xml',
  };
} 