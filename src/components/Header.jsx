import React from "react";

const Header = () => {
  return (
    <header className="header">
      <section>
        {/* banner text */}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restuarent, focusd on
            traditional recipes served with modern twist.
          </p>
         <link to = "/booking"> <button aria-label="on Click ">Reserve Table</button></link>
        </div>
        {/* banner image */}
        <div>
            <img src="" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
