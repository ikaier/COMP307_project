import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_content2 from "./employ_left";

export default class Employ extends Component {
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
        <Text_page_top cotitle="Employment" title="Faculty Postings@CS" topic="employment" time="2020-11-23"/>
        <Text_page_content2 publisher="admin" topic="Faculty Postings@CS"
        content="There are currently no open faculty postings."/>
       <div style={{height: 150}}></div>
      </div>
    );
  }
}
