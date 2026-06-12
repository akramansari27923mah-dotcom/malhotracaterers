import React from "react";
import { ArrowLeft, PlayCircle, Star } from "lucide-react";
import { reviews } from "@/lib/reviewData";
import Link from "next/link";


const Reviews = () => {
  return (
    <section className="py-24 bg-black">

        <Link href={'/'} className="fixed top-8 left-8 bg-gray-900 border border-gray-800 rounded-2xl px-4 py-2 font-sans tracking-wider flex justify-center items-center gap-2 z-20 hover:scale-105 transition-all duration-300">
        <ArrowLeft size={20} />
            <span>Back</span>
        </Link>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[6px]">
            Client Testimonials
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Hear directly from our happy clients who trusted us with their
            special occasions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-amber-500 transition-all duration-300"
            >
              {/* Video */}
              <div className="relative">
                <video
                  controls
                  className="w-full h-64 object-cover"
                  poster="/review.png"
                >
                  <source src={review.video} type="video/mp4" />
                </video>

                <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-full">
                  <PlayCircle className="text-amber-400" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {review.review}
                </p>

                <div className="mt-5">
                  <h3 className="text-white font-semibold">
                    {review.name}
                  </h3>

                  <p className="text-amber-400 text-sm">
                    {review.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;