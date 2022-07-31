import React, { useEffect } from "react";

import SearchForm from "./SearchForm.js";
import Partners from "../landing/Partners.js";
import Contact from "../landing/Contact.js";

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
      <section className="section pt-0">
        <Partners />
      </section>
      <section className="section py-0 bg-gradient-default">
        <Contact />
      </section>
    </>
  );
}

export default Landing;
