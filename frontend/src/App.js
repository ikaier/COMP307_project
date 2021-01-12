import React, { Component } from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";
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
import Carousel_1 from "./components/carousel_1.component";
import Carousel_2 from "./components/carousel_2.component";
import Carousel_3 from "./components/carousel_3.component";
import Card1 from "./components/card1.component";
import Card2 from "./components/card2.component";
import Card3 from "./components/card3.component";
import About from "./components/about.component";
import Add from "./components/post";

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
        <Router>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/carousel_1"  component={Carousel_1} />
            <Route path="/carousel_2"  component={Carousel_2} />
            <Route path="/carousel_3"  component={Carousel_3} />
            <Route path="/card1"  component={Card1} />
            <Route path="/card2"  component={Card2} />
            <Route path="/card3"  component={Card3} />
              <Route path="/about"  component={About} />
            <Route exact path="/Update/" component={Update} />
            <Route exact path="/Article/" component={Article} />
            <Route exact path="/Announcement" component={Announce} />
            <Route exact path="/Research" component={Research} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/employ" component={Employ} />
            <Route exact path="/people" component={People} />
            <Route path="/employ_re" component={EmployRe} />
            <Route path="/employ_st" component={EmploySt} />
            <Route path="/content" component={Content} />
            <Route path="/post" component={Add} />
          </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
