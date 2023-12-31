import React from "react";
import sign from "../../assets/ReactBreeze (2).png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const navigation = {
    main: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Partners", href: "#" },
    ],
  };

  const social = [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => <FaFacebook {...props} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => <FaInstagram {...props} />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => <FaTwitter {...props} />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => <FaGithub {...props} />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => <FaYoutube {...props} />,
    },
  ];

  return (
    <footer className="bg-indigo-950 rounded-t-3xl">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">
        {/* <img
          src={sign}
          alt=""
          className="flex justify-center ml-[28rem] w-72"
        /> */}
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-200 hover:text-gray-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
