import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Feature from "./components/feature/Feature";
import ExperienceBlog from "./components/experience/ExperienceBlog";
import Qualification from "./components/qualification/Qualification";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <ExperienceBlog />
      <Qualification />
    </div>
  );
};

export default Home;
