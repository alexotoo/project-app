import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navibar from "./components/layouts/Navbar";
import DashBoardPage from "./pages/DashBoardPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />

        <Switch>
          <Route path="/" component={DashBoardPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
