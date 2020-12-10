import React, { Component } from "react";

import UserService from "../services/user.service";
import Navbar_dark from './navbar_dark'
import ContentTop from './content_top'
import Row from './one_row'
import TutorialDataService from "../services/updates.service";
import { Link } from "react-router-dom";


export default class Research extends Component {
  constructor(props) {
    
    super(props);
    this.searchTitle = this.searchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.state = {
      tutorials: [],
    };

   
  }

  componentDidMount() {
    //this.retrieveTutorials();
    this.searchTitle();
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchTitle() {
    TutorialDataService.findByTitle("Research")
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

    }
  
  render(){
 
    var ttt = this.state.tutorials; 
      
    return (
      <div >
        <Navbar_dark/>
        <ContentTop name="Research" pic="pan.jpg"/>
        <div style={{height: 150}}></div>
        {ttt &&
              ttt.map((data, index) => (
                <Row type={data.title} topic={data.type} 
                time={data.createdAt} author={data.author}  txt={data.txt}/>
                
              ))}
      
       
      </div>
    );
  }

}
