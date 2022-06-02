import React, { FC } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

interface AppLinkProps {
  to: string;
  children?: React.ReactNode;
}

const AppLink: FC<AppLinkProps> = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

const Navigation = () => {
  return (
    <div className="app">
      <h2>Typed Custom Hooks</h2>
      <nav>
        <AppLink to={"/"}>Home</AppLink>
        <AppLink to={"/about"}>About</AppLink>
        <AppLink to={"/contact"}>Contacts</AppLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Navigation;
