import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/navbar_dark.module.css'
import AuthService from "../services/auth.service";
//import { faAdobe } from '@fortawesome/free-brands-svg-icons/faAdobe';


class Navbar_dark extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            loginnn:false
            
        };
        this.handleClick1 = this.handleClick1.bind(this);

    }
    handleClick1() {
        this.setState(prevState => ({
           loginnn:!prevState.loginnn
        }));
  }


    render() {
        let content;
        const loginnn = this.state.loginnn;
        if (loginnn) {
            content=(
               
              <div className="listtt" onClick={this.handleClick2}>
                        <ul>
                           <li className="lii"> <a className="nav-link2" href="#/Update">Updates</a></li>
                           <li className="lii"> <a className="nav-link2" href="#/Article">Article</a></li> 
                           <li className="lii"> <a className="nav-link2" href="#/Research">Research</a></li>
                           <li className="lii"><a className="nav-link2" href="#/people">People</a></li>
                           <li className="lii"><a className="nav-link2" href="#/Announcement">Announcement</a></li>
                           <li className="lii"><a className="nav-link2" href="#/employ">Employment</a></li>
                           <li className="lii"><a className="nav-link2" href="#/donate">Donate</a></li>
                           
                           </ul>
                
              </div>
            );               
          }else{
            content=(
                <div></div>              
            );
          }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
            {this.state.currentUser ? (
                                <a className="navbar-toggler" href="#/profile"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                            ):(
                                <a className="navbar-toggler" href="#/login"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                            )}
            <a className="navbar-toggler mx-auto" href="/"><img src="/cs_icon_white.png" height="40"></img></a>
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"onClick={this.handleClick1}>
                <span className="navbar-toggler-icon"> </span>
                {content}
            </button>
     
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="outerspace mx-auto">
                    <div className="d-flex justify-content-around">
                        
                        {this.state.currentUser ? (
                                <a className="" href="#/profile"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                            ):(
                                <a className="" href="#/login"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                            )}
                        <div className="navbar-nav ">
                            <a href="/"><img src="/cs_icon_white.png" height="40"></img></a>
                            <a className="nav-link" href="#/Update">Updates</a>
                            <a className="nav-link" href="#/Article">Article</a>
                            <a className="nav-link" href="#/Research">Research</a>
                            <a className="nav-link" href="#/people">People</a>
                            <a className="nav-link" href="#/Announcement">Announcement</a>
                            <a className="nav-link" href="#/employ">Employment</a>
                            <a className="nav-link" href="#/donate">Donate</a>
                        </div>
                        <div className="searchbar">
                            <a className="float-right nav-link" href="#"><p className="searchtext">Search McGill CS School<img className="user-icon ml-1" src="/search-solid.svg" height="15"></img></p></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </nav>
         


        )
    }
}
export default Navbar_dark