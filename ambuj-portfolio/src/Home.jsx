import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Feature from "./components/feature/Feature";
import ExperienceBlog from "./components/experience/ExperienceBlog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <ExperienceBlog />
    </div>
  );
};

export default Home;
