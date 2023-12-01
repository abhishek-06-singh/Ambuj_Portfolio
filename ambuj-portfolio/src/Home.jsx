import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Feature from "./components/feature/Feature";
import ExperienceBlog from "./components/experience/ExperienceBlog";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
// import Button from "./components/Button";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Button /> */}
      <Feature />
      <ExperienceBlog />
      <Qualification />
      <Footer />
    </div>
  );
};

export default Home;
