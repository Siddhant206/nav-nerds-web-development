import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50  text-gray-600 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#1CCBD7] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className=" mb-6 max-w-md">
        The page you are looking for does not exist or has been moved. Return
        home to explore our Microsoft Dynamics 365 services and solutions.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#1CCBD7] text-white rounded-lg font-medium hover:bg-[#0094C6] transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
