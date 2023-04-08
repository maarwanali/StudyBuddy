import Link from "next/link";

function HomeSignedIn() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome back, User!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">My Profile</h2>
          <p className="text-gray-600 mb-4">
            View and update your profile information.
          </p>
          <Link
            href="/profile"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Go to Profile
          </Link>
        </div>
        <div className="bg-white shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Find a Tutor</h2>
          <p className="text-gray-600 mb-4">
            Search for a tutor based on subject or location.
          </p>
          <Link
            href="/tutors"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Go to Tutors
          </Link>
        </div>
        <div className="bg-white shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Join a Study Room
          </h2>
          <p className="text-gray-600 mb-4">
            Join a virtual study room and collaborate with others.
          </p>
          <Link
            href="/studyrooms"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Go to Study Rooms
          </Link>
        </div>

        <div className="bg-white shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Subjects</h2>
          <p className="text-gray-600 mb-4">View the subjects page.</p>
          <Link
            href="/subjects"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Go to Subjects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeSignedIn;
