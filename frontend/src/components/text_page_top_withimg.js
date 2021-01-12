import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./styles/text_page_top.module.css'

class Text_page_top_withimg extends React.Component {
    pic;
    render() {
        return (
            <div className="text_top_outterspce">
                <div style={{height: 50}}></div>
                <img src={this.props.pic} className="topimg" alt="Trolltunga Norway" width="1000" height="300"/>

            </div>
        )
    }
}

export default Text_page_top_withimg