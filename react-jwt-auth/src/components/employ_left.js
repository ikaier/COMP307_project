import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/text_page_content.module.css'

class Text_page_content2 extends React.Component {
    render() {
        return (
            
              <div className="tc_outterspce row">
                <div className="col-4">
                    <div className="tc_leftside my-1">
                       <a href="employ"><p className="tc_lefttext">Faculty Postings@CS</p></a>
                    </div>
                    <div className="tc_leftside my-1">
                        <a href="employ_re"><p className="tc_lefttext">Research Postings@CS</p></a>
                    </div>
                    <div className="tc_leftside my-1">
                        <a href="employ_st"><p className="tc_lefttext">Student Postings@CS</p></a>
                    </div>
                </div>
                <div className="col-8">{this.props.content}</div>
            </div>
        )
    }
}

export default Text_page_content2