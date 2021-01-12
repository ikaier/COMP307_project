import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class Carousel_1 extends Component {
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
        <Text_page_top cotitle="UPDATES" title="Remote teaching now avaliable" topic="COVID-19 UPDATES" time="2020-11-23"/>
        <Text_page_top_withimg pic="/banner.jpg"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="During this extraordinary and challenging time, the School of Physical & Occupational Therapy (SPOT) instructors, administration and students have transitioned to remote teaching, working and learning methods. Many efforts have been made over the summer months to create learning material that is as engaging as possible within this new environment and timeframe.

There are two methods to teach and learn remotely:

synchronously - real-time experience (live videoconference or webcast)
asynchronously - previously recorded lecture material or teaching videos to view at ones own pace
The School instructors have been adapting and preparing their course content to present it either synchronously, asynchronously or a blend of both. "/>
       
      </div>
    );
  }
}
