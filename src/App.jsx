import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

// Create new Component for reusing some features
const AppLink = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <AppLink to={"/"}>Home</AppLink>
          <AppLink to={"/about"}>About</AppLink>
          <AppLink to={"/contact"}>Contacts</AppLink>
        </nav>
        <h2>Higher Order Component</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
