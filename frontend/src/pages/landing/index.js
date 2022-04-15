import React, { useEffect } from "react";

import Navbar from "../../layout/navbar/Navbar.js";
import Footer from "../../layout/footer/Footer.js";

import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import Features from "./Features.js";
import Partners from "./Partners.js";
import Contact from "./Contact.js";

const Landing = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="position-relative">
          <section className="section section-shaped pb-400">
            <Header />
          </section>
        </div>
        <section className="section">
          <SearchForm />
        </section>
        <section className="section">
          <Features />
        </section>
        <section className="section bg-gradient-default">
          <Partners />
        </section>
        <section className="section pt-lg-0 section-contact-us">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
