import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_content2 from "./employ_left";

export default class EmploySt extends Component {
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
        <Text_page_top cotitle="Employment" title="Student Postings@CS" topic="employment" time="2020-11-23"/>
        <Text_page_content2 publisher="admin" topic="Student Postings@CS"
        content="Dawson College urgently looking for part-time CS teacher to start January 27!
        Application Period: Jan. 17, 2020 - Jan. 27, 2020
        Contact: Please email your CV to Jaya Nilakantan, Director. jnilakantan AT dawsoncollege.qc.ca
        
        "/>
       
      </div>
    );
  }
}
