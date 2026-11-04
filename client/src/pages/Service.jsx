import React from "react";
import ServiceList from "../components/Services/ServiceList";

const Service = () => {
  return (
    <section className="pt-[14vh] pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto md:px-10 px-5 text-center -mt-10">
        {/* Section Title */}
        <div className="mb-14">
          <h5 className="text-2xl text-pink-500 font-semibold font-serif italic mb-2">
            What we serve
          </h5>
          <h2 className="text-4xl md:text-5xl text-zinc-800 font-bold">
            We offer our best services
          </h2>
        </div>

        {/* Service Cards */}
        <ServiceList />
      </div>
    </section>
  );
};

export default Service;
