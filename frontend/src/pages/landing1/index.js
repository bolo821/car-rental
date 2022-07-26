import React, { useEffect } from "react";

import SearchForm from "./SearchForm.js";

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
    </>
  );
}

export default Landing;