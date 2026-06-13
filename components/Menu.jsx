import React from "react";
import { menu } from "@/lib/menuData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MenuPage = () => {
  return (
    <>
      <Link
        href={"/"}
        className="fixed top-8 left-8 bg-gray-900 border border-gray-800 rounded-2xl px-4 py-2 font-sans tracking-wider flex justify-center items-center gap-2 z-20 hover:scale-105 transition-all duration-300"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </Link>

      <div className="text-center my-10">
        <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 tracking-widest uppercase text-sm font-semibold">
          Our Menus
        </span>
        <h2 className="mt-4 text-4xl font-extrabold text-white leading-tight">
          Excellence in Every
          <span className="block bg-linear-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Celebration
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
        {menu.map((tier, index) => {
          return (
            <div
              key={index}
              className="group rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-black text-center tracking-wide text-amber-400 border-b border-amber-500/20 pb-4 mb-6 uppercase">
                  {tier.menuName}
                </h3>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                    Starters
                  </h4>
                  <ul className="space-y-1">
                    {tier.starters.map((starter, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                        {starter}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                    Main Course
                  </h4>
                  <ul className="space-y-1">
                    {tier.mainCourse.map((course, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {tier.liveStalls && tier.liveStalls !== "None" && (
                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  <span className="inline-block px-4 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    {tier.liveStalls}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuPage;
