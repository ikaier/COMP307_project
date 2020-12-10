import React from "react";
import './styles/footer.module.css'

class Footer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'rgb(52,60,71)'}}>
            <div className="footerspace">
                <span className="footer_topspace"></span>
                <img className="footer_icon" src={'/cs_icon_white.png'} />
                <span className="footer_lowerspace"></span>
                <div className="footer_links">
                    <a className="footer_link" href={'#'}>CONTACT US</a>
                    <a className="footer_link" href={'#'}>MCGILL HOMEPAGE</a>
                    <a className="footer_link" href={'#'}>CREDIT</a>
                    <a className="footer_link" href={'#'}>ABOUT</a>
                </div>
            </div>
                <div className="social_links">
                    <div className="social_link_space">
                    <a className="footer_icon_a" href="user"><img className="footer_social_icon" src="/instagram-brands.svg" height="18px"></img></a>
                    <a className="footer_icon_a" href="user"><img className="footer_social_icon" src="/facebook-f-brands.svg" height="18px"></img></a>
                    <a className="footer_icon_a" href="user"><img className="footer_social_icon" src="/twitter-brands.svg" height="18px"></img></a>
                    <a className="footer_icon_a" href="user"><img className="footer_social_icon" src="/envelope-regular.svg" height="18px"></img></a>
                </div>
                </div>
            </div>
        )
    }
};

export default Footer;