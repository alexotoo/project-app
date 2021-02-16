import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navibar from "./components/layouts/Navbar";
import DashBoardPage from "./pages/DashBoardPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import { PrivateRoutes } from "./components/PrivateRoutes";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Navibar />

      <Switch>
        <PrivateRoutes path="/" exact privatecomp={DashBoardPage} />
        <PrivateRoutes path="/project/:id" privatecomp={ProjectDetailsPage} />

        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />

        <PrivateRoutes path="/create" privatecomp={CreateProjectPage} />
        <PrivateRoutes path="/" privatecomp={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
