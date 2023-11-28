import React from "react";
import experienceBanner from "../../assets/WhatsApp Image 2023-11-28 at 11.23.20_9d3d0a33.jpg";
const ExperienceBlog = () => {
  const jobOpenings = [
    {
      id: 1,
      role: "Full Time Associate Professor",
      href: "#",
      description:
        "Working as a Associate Professor in PhysicsWallah , helped over 1500 students on there path of Cracking GATE examination.",

      location: "Noida, Uttar Pradesh, India",
    },
    {
      id: 2,
      role: "Curriculum Development and Enhancement",
      href: "#",
      description:
        "As an Associate Professor at PhysicsWallah, I have actively contributed to the development and enhancement of the Electrical engineering curriculum. Leveraging my expertise in the field, I have worked on designing and updating course content to ensure it aligns with the latest educational standards and incorporates innovative teaching methodologies.",

      location: "Noida, Uttar Pradesh, India",
    },
    {
      id: 3,
      role: "Effective Classroom Management and Student Engagement",
      href: "#",
      description:
        "I have fostered a space where students feel encouraged to participate, ask questions, and explore the subject matter. Utilizing various pedagogical approaches, I strive to make complex physics concepts accessible and interesting, promoting active student involvement in the learning process.",

      location: "Noida, Uttar Pradesh, India",
    },
  ];
  return (
    <div id="experience">
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professional Experience
              </h2>
              <p className="mt-6 text-sm leading-8 text-gray-600">
                In my role as an Associate Professor at PhysicsWallah, I have
                been at the forefront of shaping the educational landscape in
                the field of physics. Over the past 11 months, I have actively
                contributed to the academic community, focusing on curriculum
                development, effective classroom management, and meaningful
                research endeavors.
              </p>
              <img
                src={experienceBanner}
                alt=""
                className="mt-10 aspect-[5/6] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                        <a href={opening.href}>
                          {opening.role}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                        {opening.description}
                      </dd>
                      <dt className="sr-only">Salary</dt>

                      <dt className="sr-only">Location</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                        <svg
                          viewBox="0 0 2 2"
                          className="h-0.5 w-0.5 flex-none fill-gray-300"
                          aria-hidden="true"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex border-t border-gray-100 pt-8">
                <a
                  href="https://www.linkedin.com/in/ambuj-dubey-36344015a/"
                  className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Visit my Linkedin <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlog;
