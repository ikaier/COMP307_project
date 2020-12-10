import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/text_page_top.module.css'

class Text_page_top extends React.Component {
    render() {
        return (
            <div className="text_top_outterspce">
                <div className="tt_cotitle_space">
                    <div className="tt_cotitle">
                        <p className="tt_cotitle_text">{this.props.cotitle}</p>
                        <div className="tt_cotitle_bar"></div>
                    </div>

                </div>
                <div className="tt_title_space">
                    <p className="tt_title">{this.props.title}</p>
                </div>
                <div className="tt_info_space">
                    <p className="tt_info"><b>{this.props.topic}</b> | Issued on: <b>{this.props.time}</b></p>
                </div>
            </div>
        )
    }
}

export default Text_page_top