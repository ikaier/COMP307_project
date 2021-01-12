import React, { Component } from "react";

import UserService from "../services/user.service";
import Navbar_dark from './navbar_dark'
import ContentTop from './content_top'
import Photocard from "./photocard";
import './styles/people.module.css'

export default class People extends Component {
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
        <Navbar_dark/>
        <ContentTop name="People" pic="people.jpg"/>
        <div style={{height: 150}}></div>
        <div className="peo">
        <Photocard name="J.R.R.Tolkien" description="A cool guy" pic="man.jpg"
        name2="Adam L" description2="Kaikai is a cool guThe order of middleware loading is important: middleware functions that are loaded first are also executed first." pic2="man.jpg"/>
        <Photocard name="Emma Jjjj" description="A cool guy important: middleware functions" pic="man2.jpg"
        name2="Kaiii" description2="Kaikai is a cool guThe order of middleware loading is important" pic2="man.jpg"/>
        <Photocard name="James B" description="A cool guy guThe order of middleware " pic="man.jpg"
        name2="People Som" description2="Kaikai is a cool guThe order of middleware loading is important: middleware functions " pic2="man2.jpg"/>
        </div>
      </div>
    
    );
  }
}
