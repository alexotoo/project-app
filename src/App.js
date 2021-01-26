import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navibar from "./components/layouts/Navbar";
import DashBoardPage from "./pages/DashBoardPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CreateProjectPage from "./pages/CreateProjectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />

        <Switch>
          <Route path="/" exact component={DashBoardPage} />
          <Route path="/project/:id" component={ProjectDetailsPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/create" component={CreateProjectPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
