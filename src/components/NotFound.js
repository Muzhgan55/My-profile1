import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4">
      <h1 className="text-6xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
      <p className="text-lg mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist. Maybe try going back to the home page.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
