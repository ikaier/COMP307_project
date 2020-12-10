import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/text_page_content.module.css'

class Text_page_content extends React.Component {
    render() {
        return (
            <div className="tc_outterspce row">
                <div className="col-4">
                    <div className="tc_leftside my-1">
                        <p className="tc_lefttext">POSTED BY: {this.props.publisher}</p>
                    </div>
                    <div className="tc_leftside my-1">
                        <a href="announce"><p className="tc_lefttext">ALL {this.props.topic}</p></a>
                    </div>
                </div>
                <div className="col-8">{this.props.content}</div>
            </div>
        )
    }
}

export default Text_page_content