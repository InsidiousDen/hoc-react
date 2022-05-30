import { NavLink, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchUsers from "./components/UserList";
import SearchTodos from "./components/TodoList";

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
          <AppLink to={"/contacts"}>Contacts</AppLink>
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
