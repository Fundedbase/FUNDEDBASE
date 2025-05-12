"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import JsonLd from '../app/components/JsonLd';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null;
  
  // Generate breadcrumb items
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
      // Format label: replace hyphens with spaces, capitalize first letter
      const label = segment
        .replace(/-/g, ' ')
        .split('/')
        .pop()
        .replace(/^\w/, c => c.toUpperCase());
      
      return { label, href };
    })
  ];

  // Structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href
    }))
  };

  return (
    <nav className="flex py-4 px-4 md:px-6">
      <JsonLd data={breadcrumbStructuredData} />
      <ol className="flex flex-wrap items-center space-x-1 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
              {isLast ? (
                <span aria-current="page" className="text-emerald-400 font-medium">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 