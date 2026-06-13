import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div id="about" className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col justify-center items-center font-sans antialiased">
      
      <span className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 tracking-widest uppercase text-xs md:text-sm font-semibold transition-all duration-300 hover:bg-amber-500/20">
        About Malhotra Caterers
      </span>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 overflow-hidden rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 mt-8 border border-amber-500/20 bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-amber-500/40">
        
        
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden group border border-white/10">
          <Image
            src="/hero.png"
            alt="Malhotra Caterers premium event setup"
            fill
            sizes="(max-w: 768px) 100vw, 50vw"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6 text-gray-200">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Crafting Unforgettable <br className="hidden lg:inline" />
            <span className="text-amber-400">Culinary Experiences</span>
          </h2>
          
          <p className="text-sm md:text-base leading-relaxed text-gray-300 font-light">
            Welcome to <strong className="text-amber-400 font-medium">Malhotra Caterers</strong>, your premier partner for exceptional 
            event catering and management services in Uttar Pradesh and the NCR 
            region. Based out of Kanpur Nagar, we specialize in turning your 
            special occasions into unforgettable celebrations with our exquisite 
            culinary creations and flawless event execution.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300 font-light">
            Whether you are hosting an intimate house party of <span className="text-white font-semibold">50 guests</span> or a grand wedding 
            celebration for <span className="text-white font-semibold">10,000 people</span>, we have the expertise, passion, and 
            infrastructure to manage it all smoothly.
          </p>

          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-amber-400 rounded-xl transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 group"
            >
              Get a Free Quote
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;