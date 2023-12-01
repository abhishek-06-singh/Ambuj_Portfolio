import React from "react";
import Hero from "./components/navbar/hero/Hero";
import Feature from "./components/feature/Feature";
import ExperienceBlog from "./components/experience/ExperienceBlog";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [featureRef, featureInView] = useInView({
    triggerOnce: true,
  });
  const [qualiRef, qualiInView] = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <Hero />

      <div ref={featureRef}>{featureInView && <Feature />}</div>

      <ExperienceBlog />
      <div ref={qualiRef}>{qualiInView && <Qualification />}</div>

      <Footer />
    </div>
  );
};

export default Home;
