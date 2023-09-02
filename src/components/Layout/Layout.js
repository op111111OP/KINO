import React from "react";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import "./Layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Home

function Layout({ children }) {
  return (
    <div className="wrapper">
      <div className="light">
        <Header />
        <div className="fixed_box">
          <a href="#top" title="Вгору" className="fixed_a">
            <BsArrowUpCircle color="rgb(222, 222, 222)" size="30" />
          </a>
          <a href="#footer" title="Вгору" className="fixed_a">
            <BsArrowDownCircle color="rgb(222, 222, 222)" size="30" />
          </a>
        </div>
        <section>
          <div className="containerA">{children}</div>
        </section>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
