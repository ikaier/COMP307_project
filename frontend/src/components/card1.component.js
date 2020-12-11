import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class Card1 extends Component {
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
        <Text_page_top cotitle="NEWS" title="Three SOCS professors are awarded large grants to use AI to understand cancer" topic="School news" time="2020-11-23"/>
        <Text_page_top_withimg pic="/car1.jpg"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="Two SOCS teams were awarded big grants to develop AI approaches that will enable improved understanding of cancer through genomics and epigenomics.

Professors Mathieu Blanchette and William Hamilton, and their team are working on deciphering mechanisms of epigenetic alterations in cancer using 3D-genomics-informed deep learning.

Adjunct Professor Marc Bellemare and collaborator Jacques Drouin (IRCM) are working on decoding the cancer epigenome with novel artificial intelligence discovery tools.

The funding was obtained through a highly competitive joint call for proposals from Genome Québec, the Oncopole, and IVADO.

Read more about this at here: https://reporter.mcgill.ca/mcgill-teams-win-big-in-new-omics-cancer-competition/"/>
       
      </div>
    );
  }
}
