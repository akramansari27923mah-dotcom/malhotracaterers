import Reviews from "@/components/Review";
import React from "react";

export const metadata = {
  title: "Reviews | Malhotra Caterers Kanpur",
  description:
    "Read real reviews and feedback from our happy clients. See why Malhotra Caterers is trusted for weddings, parties, and events in Kanpur.",
  keywords: [
    "Catering reviews Kanpur",
    "Malhotra Caterers reviews",
    "Customer feedback catering",
    "Best caterers in Kanpur reviews",
    "Wedding catering testimonials",
  ],
  openGraph: {
    title: "Reviews | Malhotra Caterers Kanpur",
    description:
      "See what our happy clients say about Malhotra Caterers in Kanpur for weddings and events.",
    url: "https://www.malhotracaterers.org/review&rating",
    siteName: "Malhotra Caterers",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Reviews & Rating| Malhotra Caterers Kanpur",
    description:
      "Read customer reviews and testimonials of Malhotra Caterers in Kanpur.",
  },
};

const Review = () => {
  return <Reviews />;
};

export default Review;
