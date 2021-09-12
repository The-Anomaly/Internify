import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Routes/Home/home";
import Premium from "./Components/Routes/Premium/premium";

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/premium" component={Premium} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
