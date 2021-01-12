import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class Carousel_2 extends Component {
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
        <Text_page_top cotitle="UPDATES" title="Falcon 9 launches Starlink to orbit – the seventh launch and landing of this booster" topic="TECH NEWS" time="2020-11-23"/>
        <Text_page_top_withimg pic="./banner2.jpg"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="CAPE CANAVERAL, Fla. — SpaceX just launched one of its Falcon 9 rockets for a record seventh time. The booster carried a full stack of 60 Starlink internet satellites into orbit and then nailed a landing at sea.

The two-stage Falcon 9 rocket blasted off from Space Launch Complex 40 here today (Nov. 24) at Cape Canaveral Air Force Station at 9:13 p.m. EDT (0213 GMT on Nov. 25), marking the company’s 23rd launch of the year and the 100th flight overall for the workhorse Falcon 9.

Approximately 9 minutes later, the booster's first stage returned to Earth, landing on one of SpaceX's drone ships in the Atlantic Ocean in a smooth touchdown. The massive ship, called &#34;Of Course I Still Love You,&#34; is one of two in the company’s fleet of recovery vessels that catch falling boosters and return them to port.

          &#34;For the seventh time, this Falcon has landed,&#34; SpaceX engineer Kate Tice said during the live launch broadcast."/>
       
      </div>
    );
  }
}
