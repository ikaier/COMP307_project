import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";

export default class Announce extends Component {
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
        <Text_page_top cotitle="DONATE" title="Grace Hopper Celebration" topic="COVID-19 UPDATES" time="2020-11-23"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="Help us send McGill students to the Grace Hopper Celebration of Women in Computing, and in turn build a strong and inclusive community here at McGill University.

Computer Science has historically been a predominately male-driven field, but enrolment in the School of Computer Science (SOCS) has tripled since 2009, and over 30% of students are female. Given the steep rise in enrolment at SOCS, The Undergraduate Societies have committed to sending two women to The Grace Hopper Celebration (GHC) of Women in Computing. We hope to increase this impact by sending an additional 6 women to GHC.

GHC is the largest gathering of women technologists offering many opportunities for professional networking. Students who attend this conference find it inspiring, and are pushed to finish their degree and implement unique programs such as computing mentorships. The cost for each attendee is $1,500, which includes their accommodation, airfare, and registration.

We hope to continue to actively support an inclusive culture of computing at McGill, and empower our female students to build their own networks and meet like-minded individuals. With your help, we can give young female technologists the opportunity to explore the spectrum of all that computer science has to offer and enable these bright young scholars to reach their full potential.

To support us and see updates check our Seeds of Change campaign!"/>
       
      </div>
    );
  }
}
