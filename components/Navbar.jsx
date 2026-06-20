"use client";
import { Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/lib/menu";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { Toggle } from "./Toggal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const call = () => {
    window.location.href = "tel:+917905808958";
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto md:px-8 px-2 h-20 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={55}
            height={55}
            className="rounded-full border-2 border-amber-500 group-hover:rotate-6 transition-all duration-300"
          />

          <div>
            <h2 className="text-xl font-bold text-amber-400">Malhotra</h2>
            <p className="text-xs tracking-[4px] text-gray-300 uppercase">
              Caterers Kanpur
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative text-white font-medium group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 ">

            <Toggle />

          <button
            onClick={call}
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-linear-to-r from-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:scale-105"
          >
            <PhoneCall
              size={18}
              className="group-hover:rotate-12 transition-all"
            />
          </button>

          <Menu
            className=" md:hidden cursor-pointer text-white hover:text-amber-400"
            onClick={() => setIsOpen(!isOpen)}
          />

          <Link
            target="_blank"
            className="text-amber-400 hidden md:block cursor-pointer hover:scale-105 transition-all duration-300"
            href={
              "https://www.instagram.com/malhotracatererkanpur?igsh=MjFqN2twODl5MHVy&utm_source=qr"
            }
          >
            <FaInstagram size={30} />
          </Link>
        </div>
      </div>

      {/* side bar */}

      <aside
        className={`w-full md:hidden transition-all p-5 duration-300 overflow-hidden h-screen fixed top-0 left-0 bg-black/90  backdrop-blur-md ${isOpen ? "translate-x-0" : "-translate-x-full"} overflow-scroll hide-scroll`}
      >
        <div className="flex justify-between items-center ">
          <Link
            href={"/"}
            className="flex items-center gap-3 cursor-pointer group mb-5"
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-amber-500 group-hover:rotate-6 transition-all duration-300"
            />

            <div>
              <h2 className="text-md font-bold text-amber-400">Malhotra</h2>
              <p className="text-xs tracking-[4px] text-gray-300 uppercase">
                Caterers Kanpur
              </p>
            </div>
          </Link>

          <X
            className=" md:hidden cursor-pointer hover:text-amber-400"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex flex-col items-center gap-10">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative text-white font-medium group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Toggle />

          <button
            onClick={call}
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-linear-to-r from-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:scale-105"
          >
            <PhoneCall
              size={18}
              className="group-hover:rotate-12 transition-all"
            />
          </button>

          <Link
            target="_blank"
            className="text-amber-400 cursor-pointer hover:scale-105 transition-all duration-300"
            href={
              "https://www.instagram.com/malhotracatererkanpur?igsh=MjFqN2twODl5MHVy&utm_source=qr"
            }
          >
            <FaInstagram size={30} />
          </Link>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
