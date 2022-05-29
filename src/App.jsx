import { NavLink, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchUsers from "./components/UserList";
import SearchTodos from "./components/TodoList";

// Create new Component for reusing some features
const AppLink = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};
// Second variant
const AppLinkSecond = (props) => {
  return <NavLink {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          {/* without HOC */}
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contacts</NavLink> */}

          {/* with HOC */}
          <AppLink to={"/"}>Home</AppLink>
          <AppLink to={"/about"}>About</AppLink>
          <AppLink to={"/contacts"}>Contacts</AppLink>
          <AppLinkSecond to={"/Test"}>Test</AppLinkSecond>
        </nav>
        <h2>Higher Order Component</h2>
        <div className="wrapper">
          <SearchUsers />
          <SearchTodos />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
