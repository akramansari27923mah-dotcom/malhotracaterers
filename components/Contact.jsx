"use client";

import { api } from "@/lib/axios";
import { showSuccess } from "@/lib/toaster";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ContactPage = () => {
  const model = {
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
    date: "",
    eventLocation: "",
    nog: "",
    budget: "",
  };
  const [formValue, setFormValue] = useState(model);
  const [loading, setLoading] = useState(false);

  const handelInput = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await api.post("/contact", formValue);
      if (res?.success) {
        showSuccess("Submitted");
      }
    } catch (err) {
      console.log(err?.message);
    } finally {
      setLoading(false);
      setFormValue(model);
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 px-6">
      <Link
        href={"/"}
        className="fixed top-8 left-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-2 font-sans tracking-wider flex justify-center items-center gap-2 z-20 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-amber-500 dark:text-amber-400 uppercase tracking-[6px]">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4">
            Let`s Plan Your
            <span className="block text-amber-500 dark:text-amber-400">
              Special Occasion
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto">
            Wedding Catering, Corporate Events, Birthday Parties, Destination
            Weddings, Decoration & Event Management.
          </p>
        </div>

        <form
          onSubmit={submitForm}
          className="max-w-4xl mx-auto bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-amber-500/20 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-none"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              onChange={handelInput}
              type="text"
              placeholder="Your Name"
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            />

            <input
              name="email"
              onChange={handelInput}
              type="email"
              placeholder="Your Email"
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <input
              name="phone"
              onChange={handelInput}
              type="tel"
              placeholder="Phone Number"
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            />

            <select
              name="eventType"
              onChange={handelInput}
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            >
              <option>Choose Event Type</option>
              <option>Wedding Catering</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
              <option>Kitty Party</option>
              <option>Destination Wedding</option>
              <option>Decoration Service</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <input
              name="date"
              onChange={handelInput}
              type="date"
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            />

            <input
              name="eventLocation"
              onChange={handelInput}
              placeholder="Event Location"
              type="text"
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <input
              name="nog"
              onChange={handelInput}
              placeholder="Number of Guests"
              type="text"
              className="bg-black/40 border w-full border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500"
            />

            <input
              name="budget"
              onChange={handelInput}
              placeholder="Budget"
              type="text"
              className="bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <textarea
            onChange={handelInput}
            name="message"
            rows={6}
            placeholder="Tell us about your event..."
            className="w-full mt-6 bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
          />

          <button className="mt-8 w-full md:w-auto bg-linear-to-r from-amber-500 to-yellow-600 px-10 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 cursor-pointer">
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <LoaderCircle className="animate-spin" />
                Sending...
              </div>
            ) : (
              "Send Inquiry"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
