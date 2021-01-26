import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navibar from "./components/layouts/Navbar";
import DashBoardPage from "./pages/DashBoardPage";
import ProjectDetails from "./pages/ProjectDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />

        <Switch>
          <Route path="/" exact component={DashBoardPage} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
