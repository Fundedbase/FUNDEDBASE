import Link from 'next/link';

export const metadata = {
  title: "Page Not Found - FundedBase",
  description: "Sorry, the page you are looking for could not be found. Return to the FundedBase homepage.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-emerald-400 mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 