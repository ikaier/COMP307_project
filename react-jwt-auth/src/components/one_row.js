import React from "react";
import styles from './styles/one_row.module.css'

class Row extends React.Component {
    render() {
        return (
            <div className="boxxx">
               <h1 className="type">{this.props.type}</h1>
               <a className="topic" href={this.props.link}>{this.props.topic}</a>
               <p className="time">{this.props.time} | By {this.props.author}</p>
               <hr /> 
            </div>
        )
    }
}

export default Row