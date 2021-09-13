import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Routes/Home/home";
import Login from "./Components/Routes/Login/login";
import Premium from "./Components/Routes/Premium/premium";
import Register from "./Components/Routes/Register/register";

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/premium" component={Premium} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
