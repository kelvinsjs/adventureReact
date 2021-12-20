import React from 'react';
import footerProps from "../assets/footerProps";
import IconLink from "./additional/IconLink";
import GenerateGUID from "../guid";
import "./footer.scss"

const Footer = () => {
    const icons = footerProps.map((filler) =>
        <IconLink pool={filler} key={GenerateGUID()}/>
    )
    return (
        <footer>
            <div className="dv-footer__bg">
                <div className="container">
                    <div className="dv-footer">
                        <p className="dv-footer__social">
                            We are social
                            {icons}
                        </p>
                        <p className="dv-footer__contacts">
                            <a href="tel:88004353790" className="dv-footer__phone">
                                8 800 435-37-90
                            </a>
                            <a href="mailto:info@wetravel.org" className="dv-footer__mail">
                                info@wetravel.org
                            </a>
                        </p>
                        <p className="dv-footer__copy">
                            2021. Created for educational purposes not for sale by Kelvinsjs, Ostapenko Hryhorii
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;