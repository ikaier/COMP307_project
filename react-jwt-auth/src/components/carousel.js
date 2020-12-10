import Carousel from "react-bootstrap/Carousel";
import React from "react";
import styles from './styles/carousel.module.css'

class Homepage_carousel extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <Carousel className="car_item" indicators={false}>
                    <Carousel.Item className="car_item">
                        <img className="carousel_img d-block w-100"
                             src={'/banner.jpg'}/>
                        <Carousel.Caption>
                            <div className="carousel_title">
                                <div className="carousel_cotitle_space">
                                    <p className="carousel_title1">UPDATES</p>
                                    <div className="carousel_block"></div>
                                </div>
                                <h3 className="carousel_title2">Remote Teaching Now Avaliable </h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="car_item">
                        <img
                             className="carousel_img d-block w-100"
                             src={'/banner2.jpg'}/>
                        <Carousel.Caption>
                            <div className="carousel_title">
                                <div className="carousel_cotitle_space">
                                    <p className="carousel_title1">UPDATES</p>
                                    <div className="carousel_block"></div>
                                </div>
                                <h3 className="carousel_title2">Falcon 9 launches Starlink to orbit – the seventh launch
                                    and landing of this booster</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="car_item">
                        <img className="carousel_img d-block w-100"
                             src={'/banner3.jpg'}/>
                        <Carousel.Caption>
                            <div className="carousel_title">
                                <div className="carousel_cotitle_space">
                                    <p className="carousel_title1">UPDATES</p>
                                    <div className="carousel_block"></div>
                                </div>
                                <h3 className="carousel_title2">Virtual Open House 2020 | Portes ouvertes virtuelle 2020</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Homepage_carousel