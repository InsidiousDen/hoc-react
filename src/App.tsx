import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
