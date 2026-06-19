import { rating } from "@/lib/rating";
import Image from "next/image";
import React from "react";

const RatingPage = () => {
  return (
    <div className="dark:bg-black bg-white">
      <div className="text-center">
        <span className="text-amber-400 uppercase tracking-[6px]">
          ⭐ Customer Ratings
        </span>

        <p className="dark:text-white text-black font-bold text-2xl md:text-4xl max-w-2xl mx-auto mt-4">
          See what our customers think about our service
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 justify-center items-center p-5">
        {rating.map((items, ind) => (
          <div
            key={ind}
            className="rounded-lg border border-amber-500/20 backdrop-blur-xl hover:border-amber-500 transition-all overflow-hidden duration-300 hover:scale-105 shadow"
          >
            <Image
              src={items?.image}
              alt="rating"
              width={300}
              height={300}
              className="w-full"
            />

            <p className="p-5 text-center capitalize tracking-wider border-t border-amber-500/20 hover:border-amber-500">
              {[...Array(items.name === 'Sakshi Tiwari' ? (3) : (5))].map((_, ind) => (
                <span key={ind}>⭐</span>
              ))}
              {items?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
