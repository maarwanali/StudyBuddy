import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-gray-800">
              StudyBuddy
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                href="/subjects"
                className="text-gray-600 hover:text-gray-800 ml-8"
              >
                Subjects
              </Link>
              <Link
                href="/tutors"
                className="text-gray-600 hover:text-gray-800 ml-8"
              >
                Tutors
              </Link>
              <Link
                href="/studyrooms"
                className="text-gray-600 hover:text-gray-800 ml-8"
              >
                Study Rooms
              </Link>
            </div>
            <Link href="/profile" className="ml-8">
              <svg
                className="h-6 w-6 text-gray-600 hover:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:border-t md:border-gray-300 md:flex md:justify-end md:pr-4">
        <Link href="/signup" className="text-gray-600 hover:text-gray-800 ml-8">
          Sign Up
        </Link>
        <Link href="/signin" className="text-gray-600 hover:text-gray-800 ml-8">
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
