"use client";

import { Calendar, MoveDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="absolute inset-0" />

      <div className="absolute inset-0 bg-black/10 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:pt-18 pt-30 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-4"
          >
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-amber-300 text-sm tracking-widest uppercase">
              Premium Catering Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-white dark:text-whitet"
          >
            Making Every
            <br />
            <span className="bg-linear-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Celebration
            </span>
            <br />
            Memorable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-100 text-lg max-w-xl"
          >
            Wedding Catering, Corporate Events, Kitty Parties, Destination
            Weddings, Birthday Celebrations & Complete Event Planning Services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <Link
              href={"/contact"}
              className="group flex items-center gap-2 bg-linear-to-r from-amber-500 to-yellow-600 px-8 text-white dark:text-black py-4 rounded-full font-semibold hover:scale-105 transition-all"
            >
              <Calendar size={18} />
              Inquiry
            </Link>

            <Link
              href={"#services"}
              className="group flex items-center gap-2 text-white border border-amber-500 px-8 py-4 rounded-full hover:bg-amber-500/10 transition-all"
            >
              View Services
              <MoveDownRight
                size={18}
                className="group-hover:translate-x-1 transition-all"
              />
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            <div>
              <h2 className="text-4xl font-bold text-amber-400">10000+</h2>
              <p className="text-gray-400">Events Managed</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-amber-400">40+</h2>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-amber-400">100%</h2>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed z-30 bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
