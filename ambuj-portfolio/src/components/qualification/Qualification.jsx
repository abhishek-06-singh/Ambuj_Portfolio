import React from "react";
import { FaCheck, FaThumbsUp, FaUser } from "react-icons/fa";

const Qualification = () => {
  const timeline = [
    {
      id: 1,
      content: "Working as ",
      target: "Associate Professor PW (PhysicsWallah) ",
      href: "#",
      date: "Sep 2022 - present",
      datetime: "2023-01-20",
      icon: FaUser,
      iconBackground: "bg-gray-400",
    },
    {
      id: 2,
      content: "Electrical Engineering",
      target: "Samrat Ashok Technological Institute, Vidisha ",
      href: "#",
      date: "2017 - 2021",
      datetime: "2020-09-22",
      icon: FaThumbsUp,
      iconBackground: "bg-blue-500",
    },
    {
      id: 3,
      content: "Completed Higher Secondary",
      target: "GMHS , Maihar , M.P",
      href: "#",
      date: "April 2016",
      datetime: "2020-09-28",
      icon: FaCheck,
      iconBackground: "bg-green-500",
    },

    {
      id: 4,
      content: "Completed High School",
      target: "GMHS , Maihar , M.P",
      href: "#",
      date: "April 2014",
      datetime: "2020-10-04",
      icon: FaCheck,
      iconBackground: "bg-green-500",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold mb-20 sm:mb-10 text-center lg:text-left lg:ml-10">
        Qualifications
      </h2>

      <div className="flex items-center justify-center p-10" id="qualification">
        <ul role="list" className="-mb-20">
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-20">
                {eventIdx !== timeline.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}
                    >
                      <event.icon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {event.content}{" "}
                        <a
                          href={event.href}
                          className="font-medium text-gray-900"
                        >
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Qualification;
