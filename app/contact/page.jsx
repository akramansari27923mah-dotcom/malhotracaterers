import ContactPage from "@/components/Contact";
import React from "react";

export const metadata = {
  title: "Contact | Malhotra Caterers Kanpur",
  description:
    "Contact Malhotra Caterers in Kanpur for wedding, party, and event bookings. Call or message us for pricing, menu details, and availability.",
  keywords: [
    "Contact Malhotra Caterers",
    "Caterers contact Kanpur",
    "Book catering Kanpur",
    "Wedding catering contact",
    "Event booking Kanpur",
  ],
  openGraph: {
    title: "Contact | Malhotra Caterers Kanpur",
    description:
      "Get in touch with Malhotra Caterers for bookings and catering services in Kanpur.",
    url: "https://www.malhotracaterers.org/contact",
    siteName: "Malhotra Caterers",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Malhotra Caterers Kanpur",
    description:
      "Contact us for catering bookings in Kanpur.",
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
