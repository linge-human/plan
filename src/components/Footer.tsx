import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full border-t border-border py-4 text-center text-xs text-secondary mt-10">
    Plan &copy; {new Date().getFullYear()}
  </footer>
);

export default Footer;
