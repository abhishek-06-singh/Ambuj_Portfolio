import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Feature from "./components/feature/Feature";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
};

export default Home;
