import React from "react";
import ServiceCard from "./ServiceCard";
import weatherImg from "../../assets/weather.png";
import guideImg from "../../assets/guide.png";
import customizationImg from "../../assets/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Get accurate weather updates for your travel destination so you can plan your trips with confidence and comfort.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Explore with our expert tour guides who bring destinations to life through stories, culture, and local experiences.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Design your dream vacation your way — personalize every detail to match your interests, budget, and schedule.",
  },
];

const ServiceList = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {servicesData.map((item, index) => (
        <ServiceCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ServiceList;
