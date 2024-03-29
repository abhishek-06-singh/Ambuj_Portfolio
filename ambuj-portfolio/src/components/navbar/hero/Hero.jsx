import React from "react";
import { motion } from "framer-motion";
import { IoChevronForwardSharp } from "react-icons/io5";
import HeroImg from "../../../assets/header.jpg";
import "../../../App.css";
import Button from "../../Button";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="relative isolate overflow-hidden bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </motion.svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40 ">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
         
         
         
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6 ">
              <span className="rounded-full bg-indigo-600/10 p-1 sm:text-xl text-sm md:text-xl font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                Hey there{" "}
                <span
                  className="inline-block animate-spin-slow"
                  role="img"
                  aria-label="wave"
                >
                  👋
                </span>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            I am Ambuj Dubey, from New Delhi, India
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Working as a full-time Associate Professor at PW (PhysicsWallah).
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="/contact">
              <Button />
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 flex w-xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-10"
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={HeroImg}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[23rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 sm:w-[46rem] md:[40rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
