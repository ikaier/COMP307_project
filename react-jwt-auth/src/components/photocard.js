import React from "react";
import styles from './styles/photocard.module.css'

class Photocard extends React.Component {
    render() {
        return (
            
          <div className="oneee">        
              
              <td className="onepic">
              <img src={this.props.pic} alt="Trolltunga Norway" width="130" height="130"/>                               
              </td>
              <td className="onepara">
              <h1 className="nameee">{this.props.name}</h1>
              {this.props.description}
              </td>     
              <td className="onepic">
              <img src={this.props.pic2} alt="Trolltunga Norway" width="130" height="130"/>                               
              </td>
              <td className="onepara">
              <h1 className="nameee">{this.props.name2}</h1>
              {this.props.description2}
              </td>    
            
            <div  style={{height: 20}}> </div>
          </div> 

            
        )
    }
}

export default Photocard