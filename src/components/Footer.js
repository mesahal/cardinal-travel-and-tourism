import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      {/* Footer Section */}
      <footer className="bg-[#8E2157] text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Cardinal Tour & Travel. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
