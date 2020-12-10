import React, { Component } from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Navbar_white from "./components/navbar_white";
import Navbar_dark from "./components/navbar_dark";
import Footer from "./components/footer";
import Update from "./components/update.component";
import Article from "./components/article.component";
import Announce from "./components/announce.component";
import Research from "./components/research.component";
import Donate from "./components/donate.component";
import Employ from "./components/employ.component";
import EmployRe from "./components/employ_re";
import EmploySt from "./components/employ_st";
import People from "./components/people.component";
import Content from "./components/content";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
        <div className="bg-light">
        

        <div className="wid">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            <Route exact path="/update" component={Update} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/announce" component={Announce} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/employ" component={Employ} />
            <Route exact path="/people" component={People} />
            <Route path="/employ_re" component={EmployRe} />
            <Route path="/employ_st" component={EmploySt} />
            <Route path="/content" component={Content} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
