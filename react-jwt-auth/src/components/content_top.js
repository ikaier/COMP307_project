import React from "react";
import styles from './styles/content_top.module.css'

class ContentTop extends React.Component {
    render() {
        return (
            <div className="aaa">
                <div style={{height: 70}}></div>
                <div className="bbb">
                <h2 className="name">{this.props.name}</h2>
                <div className="line"></div>
                </div>
                <div style={{height: 50}}></div>
                <img src={this.props.pic} alt="Trolltunga Norway" width="1000" height="300"/>
            </div>
        )
    }
}

export default ContentTop