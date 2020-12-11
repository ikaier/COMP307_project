import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class Carousel_3 extends Component {
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
        <Text_page_top cotitle="NEWS" title="Many thanks to those who attended Virtual Open House 2020!" topic="SCHOOL NEWS" time="2020-11-23"/>
        <Text_page_top_withimg pic="./banner3.jpg"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="Many thanks to those who attended Virtual Open House 2020!
The first virtual edition of McGill's Open House (October 25, 2020) was a success, thanks to nearly 4000 students who attended this year, and the commitment of our faculty and staff who were present live, at over 120 virtual booths, to deliver a no less exciting and informative experience than the years before, offering close to 100 webinars, information sessions,
presentations and virtual campus tours!
We were delighted to welcome and meet prospective students who are eager to learn about our programs, admissions and how it feels like to be a student at McGill, and we look forward to seeing them join us next year.
For those who signed up to virtual Open House and still wish to access information that was shared during event, you may still log in to the virtual platform and find useful information and prerecorded sessions there.
Please note that live chat is no longer available.

We'll soon start planning for the next Open House, so stay tuned as more information will be available in September 2021.
In the meantime, you can still connect with our students and recruiters all year-long, during these live events:"/>
       
      </div>
    );
  }
}
