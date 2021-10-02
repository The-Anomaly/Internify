import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/Routes/About";
import Blog from "./Components/Routes/Blog/blog";
import BlogDetails from "./Components/Routes/BlogDetails/details";
import Home from "./Components/Routes/Home/home";
import Login from "./Components/Routes/Login/login";
import Premium from "./Components/Routes/Premium/premium";
import Register from "./Components/Routes/Register/register";
import Support from "./Components/Routes/Support/support";

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
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:id" component={BlogDetails} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/about" component={About} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
