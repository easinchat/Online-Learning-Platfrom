import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-8xl font-bold text-purple-600">404</h1>

      <h2 className="text-3xl font-bold mt-4">Page Not Found!</h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link href="/" className="btn btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
