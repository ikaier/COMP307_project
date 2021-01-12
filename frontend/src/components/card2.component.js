import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class Card2 extends Component {
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
        <Text_page_top cotitle="UPDATES" title="McGill IT Services Virtual Fair" topic="COVID-19 UPDATES" time="2020-11-23"/>
        <Text_page_top_withimg pic="/card2.jpg"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="Join the webinar on September 17, 2020 from 2 – 3 pm EST for a virtual event open to all McGill students.  Learn about the technology resources available to you. Ask our IT experts any of your technology questions. The first 100 registrants can win a McGill-branded webcam cover.  Tune in as we share information on:

Collaboration: Office 365 using Teams, Yammer, OneDrive and more.
IT Security:  Learn how to stay “cyber” safe
IT Policies: Learn how to play by the rules.
myCourses & Lecture Recording: myCourses, lecture recording, quizzes, Student Wellness Hub, Zoom"/>
       
      </div>
    );
  }
}
