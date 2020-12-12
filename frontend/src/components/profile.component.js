import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import Navbar_white from "./navbar_white";
import Add from "./post";
import'./styles/post.module.css'

export default class Profile extends Component {
  logOut() {
    AuthService.logout();
  }
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div>
      <Navbar_white/>
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> , thanks for using our service.
          </h3>
         
          <p>
          <strong>Your Account:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Upload updates:</strong>
        <Add/>
        <div style={{height: 50}}></div>
        Want to <a href="/login" className="nav-link logout_link" onClick={this.logOut}>
            LogOut
          </a> ?
        </header>
        
      
        
      </div>: null}
      </div>
      </div>
    );
  }
}
