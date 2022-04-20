import React, { useEffect } from "react";

import SearchForm from "./SearchForm.js";
import Partners from "./Partners.js";
import Contact from "./Contact.js";

const Landing = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <>
      <section className="section mt-6-rt pt-0">
        <SearchForm />
      </section>
      <section className="section bg-gradient-default pt-0">
        <Partners />
      </section>
      <section className="section pt-lg-0 section-contact-us">
        <Contact />
      </section>
    </>
  );
}

export default Landing;
