import React from "react";
import "./Footer.css";

// Layout
function Footer() {
  return (
    <footer>
      <div className="text-footer">
        <div className="text-footer_text">
          <div>© 2023 Your Movie Site Name</div>
          <div>Address: Street, City, Zip Code</div>
        </div>

        <div className="text-footer_text">
          <div>Email: info@yourmoviesite.com</div>
          <div>Phone: +1 (123) 456-7890</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
