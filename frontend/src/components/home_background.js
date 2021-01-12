import React from "react";
import {Button, ButtonGroup, Col, Row, Form, InputGroup, FormControl, Card} from "react-bootstrap";
//import styles from './styles/home_background.component.style.js'


class Home_background extends React.Component {
    render() {
        return (
            <div className="home row">
                <div className="col-5">
                <img className="background"
                    src={'/home_mcgill.png'}/>
                </div>
                <div className="col verticalcenter">

                            <h1 className="slogan">"By work, all things increase and grow"</h1>

                    <br />
                </div>
            </div>
        )
    }
}

export default Home_background