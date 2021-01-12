import React from "react";
import './styles/one_row.module.css'
import {Link} from 'dva/router'
import Content from "./content";
class Row extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {login:false };
        this.handleClick1 = this.handleClick1.bind(this);
        
    }
  
    
    handleClick1() {
          this.setState(prevState => ({
             login:true
          }));
    }
  
   
    
    
    render() {    
      
      let content;
      const loginnn = this.state.login;
      const tttttt = this.props.txt;

      if (loginnn) {
        content=(
            <div className="tttop">
            <Content topic={this.props.topic} author={this.props.author} time={this.props.time}
            author= {this.props.author} type={this.props.type} txt={this.props.txt}/>
            </div>
        );               
      }else{
        content=(
            <div className="boxxx">
            <h1 className="type">{this.props.type}</h1>
            <a className="topic" onClick={this.handleClick1}>{this.props.topic}</a>
            <p className="time">{this.props.time} | By {this.props.author}</p>
            
            <hr /> 
         </div>
        );
      }
      
      return (  
        <div>{content}</div>           
        
      );   
    } 
}



export default Row