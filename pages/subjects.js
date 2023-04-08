import React from "react";

const subjects = [
  {
    title: "Biology",
    description:
      "The study of living organisms and their interactions with each other and their environment.",
  },
  {
    title: "Chemistry",
    description: "The study of the properties and behavior of matter.",
  },
  {
    title: "Microbiology",
    description:
      "The study of microorganisms, including bacteria, viruses, fungi, and protozoa.",
  },
  {
    title: "Databases",
    description:
      "The study of organizing, storing, and retrieving large amounts of data in an efficient and effective manner.",
  },
  {
    title: "Software Testing",
    description:
      "The process of evaluating software to determine whether it meets specified requirements and produces the desired results.",
  },
  {
    title: "Immunology",
    description:
      "The study of the immune system, including how it functions, how it is regulated, and how it interacts with other systems in the body.",
  },
  {
    title: "Data Analysis",
    description:
      "The process of systematically applying statistical and/or logical techniques to describe and illustrate, condense and recap, and evaluate data.",
  },
];

function Subjects() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            style={{ borderLeft: "6px solid #00796b" }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {subject.title}
            </h2>
            <p className="text-gray-600">{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
