import GalleryPage from '@/components/Gallery'
import React from 'react'

export const metadata = {
  title: "Gallery | Malhotra Caterers Kanpur",
  description:
    "Explore our gallery to see delicious food, beautiful setups, weddings, parties, and events managed by Malhotra Caterers in Kanpur.",
  keywords: [
    "Malhotra Caterers gallery",
    "Catering photos Kanpur",
    "Wedding decoration Kanpur",
    "Food gallery catering",
    "Event catering photos",
  ],
  openGraph: {
    title: "Gallery | Malhotra Caterers Kanpur",
    description:
      "View our catering gallery featuring weddings, parties, food setups, and event decorations in Kanpur.",
    url: "https://malhotracaterers.vercel.app/gallery",
    siteName: "Malhotra Caterers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Malhotra Caterers Kanpur",
    description:
      "See our food, weddings, and event catering gallery in Kanpur.",
  },
};

const Gallery = () => {
  return (
    <GalleryPage />
  )
}

export default Gallery