import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/calendar", label: "Calendar" },
  { to: "/goals", label: "Goals" },
  { to: "/settings", label: "Settings" },
];

const Header: React.FC = () => {
  const loc = useLocation();
  return (
    <header className="w-full border-b border-border py-4 mb-6">
      <nav className="flex justify-center space-x-6 text-secondary text-sm">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`uppercase tracking-wider px-2 pb-1 border-b-2 transition-colors duration-100 ${
              loc.pathname === link.to
                ? "border-foreground text-foreground"
                : "border-transparent hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
