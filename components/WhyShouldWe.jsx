import { whyChooseUs } from "@/lib/whyChooseUs";
import React from "react";

const WhyShouldWePage = () => {
  return (
    <div className="py-4 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-center dark:text-gray-400 text-black/70">
        Why Choose <span className="text-amber-400">Us?</span>
      </h2>

      <p className="dark:text-gray-400 text-black/70 text-center max-w-2xl mx-auto mt-4">
        At Malhotra Caterers Kanpur, we believe every celebration deserves
        perfection. From delicious cuisine and elegant decorations to seamless
        event management, our team is dedicated to creating unforgettable
        experiences for weddings, corporate events, birthday parties, and all
        special occasions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {whyChooseUs.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-amber-500/20 hover:border-amber-500 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Icon className="text-amber-400" size={30} />
              </div>

              <h3 className="text-2xl font-bold dark:text-gray-400 text-black/70 mb-4">
                {service.title}
              </h3>

              <p className="dark:text-gray-400 text-black/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyShouldWePage;
