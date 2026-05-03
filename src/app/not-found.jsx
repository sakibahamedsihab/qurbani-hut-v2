import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
      <h1 className="text-8xl font-bold text-gray-200">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>

      <p className="text-gray-400 text-sm text-center max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-4 bg-[#0d6b4a] hover:bg-[#0a5a3d] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
