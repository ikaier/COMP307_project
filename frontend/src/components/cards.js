import React from "react";
import {Card, CardColumns, CardGroup} from "react-bootstrap";


class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            isMobile:false
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions,false);
    }
    updateDimensions() {
            this.setState({
                isMobile: window.innerWidth < 1200
            });
    }
    render() {
        const className1 = this.state.isMobile ? 'card_cos' : 'card_cos col-4';
        const className2 = this.state.isMobile ? 'text-center p-3 card_cos card_sticker' : 'text-center p-3 card_cos card_sticker col-3';
        return (
            <div className="">
                <CardGroup className="c_col">
                    <Card className="card_cos" >
                        <a href="#/Card1" className="nodeco">
                        <Card.Img variant="top" src={'/car1.jpg'} className="card_img" />
                            <Card.Body className="card_body container d-flex h-100">
                                <div className="card_body_div justify-content-center w-100 align-self-center">
                                    <div className="card_outer_space">
                                        <div className="card_space">
                                            <Card.Title className="co_title">
                                                Student Life
                                            </Card.Title>
                                            <div className="card_block"></div>
                                        </div>
                                        <Card.Title className="main_title">
                                            Three SOCS professors are awarded large grants to use AI to understand cancer
                                        </Card.Title>
                                    </div>
                                </div>
                            </Card.Body>
                        </a>
                    </Card>

                    <Card className={className1}>
                        <a href="#/Card2" className="nodeco">
                        <Card.Img variant="top" src={'/card2.jpg'} className="card_img"/>
                        <Card.Body className="card_body container d-flex h-100">
                            <div className="card_body_div justify-content-center w-100 align-self-center">
                                <div className="card_outer_space">
                                    <div className="card_space">
                                        <Card.Title className="co_title">
                                            Posts
                                        </Card.Title>
                                        <div className="card_block"></div>
                                    </div>
                            <Card.Title className="main_title">
                                McGill IT Services Virtual Fair
                            </Card.Title>
                            </div>
                            </div>
                        </Card.Body>
                        </a>
                    </Card>
                </CardGroup>
                <CardGroup className="c_col">

                    <Card text="white" className={className2}>
                        <a href="#/announcement" className="nodeco">
                        <Card.Body className="card_body container d-flex h-100">
                            <div className="card_body_sticker justify-content-center align-self-center">
                                <Card.Title className="sticker_title">
                                    Announcement
                                </Card.Title>
                                <div className="sticker_titles">
                                <Card.Title className="sticker_quote_top">
                                    “
                                </Card.Title>
                                <Card.Title className="sticker">
                                    Concerns related to COVID-19 That will be very important!
                                </Card.Title>
                                <Card.Title className="sticker_quote_bottom">
                                    ”
                                </Card.Title>
                                </div>
                            </div>
                        </Card.Body>
                        </a>
                    </Card>
                    <Card className=" card_cos">
                        <a href="#/Card3" className="nodeco">
                        <Card.Img variant="top" src={'/card3.jpg'} className="card_img" />
                        <Card.Body className="card_body container d-flex h-100">
                            <div className="card_body_div justify-content-center w-100 align-self-center">
                                <div className="card_outer_space">
                                    <div className="card_space">
                                        <Card.Title className="co_title">
                                            Student Life
                                        </Card.Title>
                                        <div className="card_block"></div>
                                    </div>
                            <Card.Title className="main_title">Three Faculty Members Join the School of Computer Science</Card.Title>
                            </div>
                            </div>
                        </Card.Body>
                        </a>
                    </Card>

                </CardGroup>
            </div>
        )
    }
}

export default Cards