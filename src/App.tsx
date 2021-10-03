import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/Routes/About";
import Blog from "./Components/Routes/Blog/blog";
import BlogDetails from "./Components/Routes/BlogDetails/details";
import Create from "./Components/Routes/createCV";
import Home from "./Components/Routes/Home/home";
import Login from "./Components/Routes/Login/login";
import Premium from "./Components/Routes/Premium/premium";
import Preview from "./Components/Routes/previewCV";
import Register from "./Components/Routes/Register/register";
import SearchResult from "./Components/Routes/SearchResult";
import Details from "./Components/Routes/SearchResultDetails";
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
              <Route exact path="/search" component={SearchResult} />
              <Route exact path="/search/:id" component={Details} />
              <Route exact path="/cv/create" component={Create} />
              <Route exact path="/cv/preview" component={Preview} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
