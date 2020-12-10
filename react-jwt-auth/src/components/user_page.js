import React from "react";
import styles from './styles/user_page.module.css'

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {login:false };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.username = "User2019";
    }
  
    
    handleClick1() {
          this.setState(prevState => ({
             login:true
          }));
    }
    handleClick2() {
      this.setState(prevState => ({
         login:false
      }));
    }
   
    
    
    render() {    
      
      let content;
      const loginnn = this.state.login;
      const username = this.username;

      if (loginnn) {
        content=(
          <div className="upper" >
              <a className="close" href="/">X</a>
              <div className="box">  
                <div className="u2">
                   <div className="bb">
                   <h1 className="h222">Post Announcement</h1>
                   <div className="line1"></div>
                   <hr />
                   </div><br></br>
                   <div className="bb">
                   <h1 className="h222">Post Updates</h1>
                   <div className="line1"></div>
                   <hr />
                   </div><br></br>
                   <div className="bb">
                   <h1 className="h222">Post Articles</h1>
                   <div className="line1"></div>
                   <hr />
                   </div><br></br>
                </div>

                <div className="w2">
                   <img src="u.png" alt="Trolltunga Norway" width="100" height="100"/>
                   <h1 className="h11">Welcome,</h1>
                   <h1 className="h12">{this.username}</h1>
                   <div className="ff">   
                   <div style={{height: 25}}></div>
                   <input className="f2" type="submit" value="sign out" style={{color:" rgb(230, 0, 0)"}} onClick={this.handleClick2}/>               
                   </div>
                </div>

                
            </div>
          </div>
        );               
      }else{
        content=(
        <div className="upper" >
            <a className="close" href="/">X</a>
            <div className="box">             
                <div className="u"><img src="u.png" alt="Trolltunga Norway" width="100" height="100"/></div>
                <div className="w">
                   <h1 className="h11">Welcome,</h1>
                   <h1 className="h12">Please Login</h1>
                </div>
                <div className="f">
                <form >
                <input className="f1" type="text" name="username" placeholder="USERNAME"/>
                <div style={{height: 30}}></div>
                <input className="f1" type="text" name="password" placeholder="PASSWORD"/><br></br>
                <div style={{height: 25}}></div>
                <input className="f2" type="submit" value="Login" style={{color:" rgb(230, 0, 0)"}} onClick={this.handleClick1}/>
                </form>
                </div>
            </div>
            

        </div>
        );
      }
      
      return (  
        <div>{content}</div>           
        
      );   
    } 
}

export default UserPage