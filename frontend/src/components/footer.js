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
                    <a className="footer_link" href={'https://www.cs.mcgill.ca/about/'}>CONTACT US</a>
                    <a className="footer_link" href={'https://www.mcgill.ca/'}>MCGILL HOMEPAGE</a>
                    <a className="footer_link" href={'https://github.com/ikaier/COMP307_project'}>GITHUB</a>
                    <a className="footer_link" href={'#/about'}>ABOUT</a>
                </div>
            </div>
                <div className="social_links">
                    <div className="social_link_space">
                    <a className="footer_icon_a" href="https://www.instagram.com/mcgillu/?hl=en"><img className="footer_social_icon" src="/instagram-brands.svg" height="18px"></img></a>
                    <a className="footer_icon_a" href="https://www.facebook.com/McGillUniversity/"><img className="footer_social_icon" src="/facebook-f-brands.svg" height="18px"></img></a>
                    <a className="footer_icon_a" href="https://twitter.com/mcgillu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img className="footer_social_icon" src="/twitter-brands.svg" height="18px"></img></a>
                    <a className="footer_icon_a" href="http://www.mcgill.ca/prospective"><img className="footer_social_icon" src="/envelope-regular.svg" height="18px"></img></a>
                </div>
                </div>
            </div>
        )
    }
};

export default Footer;