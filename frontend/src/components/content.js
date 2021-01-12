import React, { Component } from "react";

import UserService from "../services/user.service";
import Navbar_dark from './navbar_dark'
import ContentTop from './content_top'
import Row from './one_row'
import TutorialDataService from "../services/updates.service";
import { Link } from "react-router-dom";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";

export default class Content extends Component {
  constructor(props) {
    
    super(props);

   
  }

  componentDidMount() {
  
  }

  
  render(){
 

      
    return (
      
        <div >
        <Navbar_white/>
        <Text_page_top cotitle="Content" title={this.props.topic} topic={this.props.author} time={this.props.time}/>
        <Text_page_content publisher={this.props.author} topic="Announcement"
        content={this.props.txt} type={this.props.type}/>
       
      </div>
      
       
     
    );
  }

}
