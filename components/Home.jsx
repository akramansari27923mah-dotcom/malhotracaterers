import React from "react";
import MainLayout from "./MainLayout";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import WhyShouldWePage from "./WhyShouldWe";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import 'animate.css';
import AboutPage from "./About";


const HomePage = ({ children }) => {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutPage />
      <ChatBot />
      <Services />
      <WhyShouldWePage />
      <Footer />
      {children}
    </MainLayout>
  );
};

export default HomePage;
