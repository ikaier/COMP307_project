import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class About extends Component {
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
        <Text_page_top cotitle="ABOUT" title="About This Project" topic="NICE JOB" time="2020-11-23"/>
        <Text_page_top_withimg pic="/about.jpg"/>
        <Text_page_content publisher="KAIKAI & XUECHEN" topic="ANNOUNCEMENT"
        content="This is a comp 307 final project. This project cannot be done without hard work of Houkai Qian, Xuechen Wang and assistance of professor Joseph & TA Ali. Made by love. ---2020/12/10 night."/>
       
      </div>
    );
  }
}
