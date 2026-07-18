import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        We're sorry, but the page you were looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-transform hover:scale-105"
      >
        Return to Home
      </Link>
    </div>
  );
}
