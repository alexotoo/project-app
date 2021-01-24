import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Navibar from "./components/layouts/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />
      </div>
    </BrowserRouter>
  );
}

export default App;
