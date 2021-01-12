import React, { Component } from "react";

import UserService from "../services/user.service";
import Homepage_carousel from "./carousel";
import Home_login from "./home_login.component";
import Cards from "./cards";
import Home_background from "./home_background";
import Navbar_white from "./navbar_white";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div >
        <Navbar_white/>
        <Homepage_carousel/>
          <div className="container mt-8">
        <Home_login/>
        <Cards/>
        <Home_background/>
          </div>
      </div>
    );
  }
}
