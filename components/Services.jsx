import React from "react";
import { services } from "@/lib/servicesData";

const Services = () => {
  return (
    <>
      <div id="services" className="text-center my-10">
        <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 tracking-widest uppercase text-sm">
          Our Services
        </span>

        <h2 className="mt-6 text-6xl font-extrabold text-white leading-tight">
          Excellence in Every
          <span className="block bg-linear-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Celebration
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
          From wedding catering and corporate events to flower decoration,
          balloon decoration, and complete event management.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-amber-500/20 hover:border-amber-500 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Icon className="text-amber-400" size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
