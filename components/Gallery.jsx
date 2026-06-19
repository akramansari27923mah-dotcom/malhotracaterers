import Image from "next/image";
import { galleryImages } from "@/lib/galleryData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Link
        href={"/"}
        className="fixed top-8 left-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-2 font-sans tracking-wider flex justify-center items-center gap-2 z-20 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-amber-500 dark:text-amber-400 tracking-[6px] uppercase">
            Our Gallery
          </span>

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Memories We Created
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Explore our weddings, corporate events, birthday parties, catering
            setups, and beautiful decorations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-amber-500/20 shadow-lg dark:shadow-none"
            >
              <Image
                src={item.image}
                alt={item.category}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>

                <h3 className="text-white text-xl font-semibold mt-3">
                  Premium Event Experience
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
