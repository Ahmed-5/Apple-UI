import React from "react";
import WelcomePanel from "../components/WelcomePanel";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import MacbookSection from "../components/MacbookSection";
import TeamSection from "../components/TeamSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Apple() {
  return (
    <React.Fragment>
      <NavBar />
      <WelcomePanel />
      <Products />
      <MacbookSection />
      <TeamSection />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}
