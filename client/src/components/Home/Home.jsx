import React from "react";
import Hero from "../../pages/Hero";
import Featured from "../../pages/Featured";
import Service from "../../pages/Service";
import Experience from "../../pages/Experience";
import Gallery from "../../pages/Gallery";
import Testimonial from "../../pages/Testimonial";
import Newletter from "../../pages/Newletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Gallery />
      <Experience />
      <Service />
      <Testimonial />
      <Newletter />
    </div>
  );
};

export default Home;
