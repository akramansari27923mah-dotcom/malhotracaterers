import MenuPage from '@/components/Menu'
import React from 'react'

export const metadata = {
  title: "Menus | Malhotra Caterers Kanpur",
  description:
    "Explore delicious catering menus offered by Malhotra Caterers in Kanpur. We provide a variety of vegetarian and non-vegetarian dishes for weddings, parties, and events.",
  keywords: [
    "Catering menu Kanpur",
    "Wedding menu Kanpur",
    "Malhotra Caterers menu",
    "Food menu catering",
    "Event food packages Kanpur",
  ],
  openGraph: {
    title: "Menus | Malhotra Caterers Kanpur",
    description:
      "Check out our catering menus including wedding, party, and event food packages in Kanpur.",
    url: "https://www.malhotracaterers.org/menus",
    siteName: "Malhotra Caterers",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Menus | Malhotra Caterers Kanpur",
    description:
      "View our catering menus and food packages in Kanpur.",
  },
};

const Menu = () => {
  return (
    <MenuPage />
  )
}

export default Menu