import React from 'react';
import logo__img from '../../assets/img/Logo.png'
import facebook__logo from '../../assets/img/facebook-logo.svg'
import twitter__logo from '../../assets/img/twitter-logo.svg'
import footer__pay1 from '../../assets/img/Footer-pay1.svg'
import footer__pay2 from '../../assets/img/Footer-pay2.svg'
import footer__pay3 from '../../assets/img/Footer-pay3.svg'

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__info">
                        <div className="footer__info-logo">
                            <div className="footer__info-logo-content">
                                <img src={logo__img} alt=""/>
                                <span>E-Comm</span>
                            </div>
                            <span className="footer__info-logo-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</span>
                        </div>
                        <div className="footer__info-follow">
                            <span className="footer__info-follow-content">
                                Follow Us
                            </span>
                            <span className="footer__info-follow-text">
                                Since the 1500s, when an unknown printer took a galley of type and scrambled.
                            </span>
                            <div className="footer__info-follow-icon">
                                <a href="#"><img src={facebook__logo} alt=""/></a>
                                <a href="#"><img src={twitter__logo} alt=""/></a>
                            </div>
                        </div>
                        <div className="footer__info-contact">
                            <span className="footer__info-contact-content">
                                Contact Us
                            </span>
                            <span className="footer__info-contact-text">
                                E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                            </span>
                        </div>
                    </div>
                    <div className="footer__comp">
                        <ul className="footer__comp-ul">
                            <span className="footer__comp-ul-content">Service</span>
                            <li className="footer__comp-ul-li"><a href="#">About Us</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Information</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Privacy Policy</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Terms & Conditions</a></li>
                        </ul>
                        <ul className="footer__comp-ul">
                            <span className="footer__comp-ul-content">Service</span>
                            <li className="footer__comp-ul-li"><a href="#">About Us</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Information</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Privacy Policy</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Terms & Conditions</a></li>
                        </ul>
                        <ul className="footer__comp-ul">
                            <span className="footer__comp-ul-content">Service</span>
                            <li className="footer__comp-ul-li"><a href="#">About Us</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Information</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Privacy Policy</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Terms & Conditions</a></li>
                        </ul>
                        <ul className="footer__comp-ul">
                            <span className="footer__comp-ul-content">Service</span>
                            <li className="footer__comp-ul-li"><a href="#">About Us</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Information</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Privacy Policy</a></li>
                            <li className="footer__comp-ul-li"><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer__payment">
                        <div className="footer__payment-text">
                            <span className="footer__payment-text-item">Created By Amir Yusupov | © 2022 All rights reserved.</span>
                        </div>
                        <div className="footer__payment-img">
                            <a href="#"><img src={footer__pay1} alt=""/></a>
                            <a href="#"><img src={footer__pay2} alt=""/></a>
                            <a href="#"><img src={footer__pay3} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;