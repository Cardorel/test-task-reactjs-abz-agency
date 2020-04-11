import React, { useState } from 'react';
//import propTypes from 'prop-types' 

import '../SCSS/__menu.scss';
import logo from '../../Image/favicon-32x32.png';
import menuIcon from '../../Image/menu icon.svg';
import logo1 from '../../Image/logo.svg';

const Menu = () => {

    //Initialstate help us to hide the modal before to click in btn
    const [modalMenu, modalMenuState] = useState(false);

    //Open the modal on click in the img
    const OpenModalMenu = () => {
        setTimeout(() => {
            modalMenuState(true);
        }, 350);
    }

    return (
        <header className="container-header">
            <div className="container-mobile">
                <div className="If__desktop">
                    <div className="section__first">
                        <iframe src={logo1} title="My-Image-logo" frameBorder="0">
                            <img src={logo} alt="logoImage" />
                            <h2>Testtask</h2>
                        </iframe>
                    </div>
                    <div className="section__second">
                        <ul>
                            <li><a href="#About">About me</a></li>
                            <li><a href="#Relationships">Relationships</a></li>
                            <li className="show__element__3"><a href="#Requirements">Requirements</a></li>
                            <li><a href="#Users">Users</a></li>
                            <li><a href="#SignUp">Sign Up</a></li>
                        </ul>
                        <div onClick={OpenModalMenu} className="hde__element__with__position__5">
                            <img src={menuIcon} alt={`menu-icon`} />
                        </div>
                    </div>
                </div>
                {/* Hide the modal */}
                {modalMenu &&
                    <div className="hide__section__if__desktop" id="Close_All_modal" onClick={() => modalMenuState(false)}>
                        <div className="section__for__tablet__mobil__modal" >
                            <div className="tablet__mobil__modal">
                                <div className="section__first">
                                    <iframe src={logo1} title="My-Image-logo" frameBorder="0">
                                        <img src={logo} alt="logoImage" />
                                        <h2>Testtask</h2>
                                    </iframe>
                                </div>
                                <div className="bar__separation__hr__for__logoTest" />
                                <div className="mobil__tablet__section__">
                                    <ul>
                                        <li><a href="#About">About me</a></li>
                                        <li><a href="#Relationships">Relationships</a></li>
                                        <li><a href="#Users">Users</a></li>
                                        <li><a href="#SignUp">Sign Up</a></li>
                                        <li className="hide__element__with__position__5"><a href="#Condition">Terms and Conditions</a></li>
                                    </ul>
                                    <div className="bar__separation__hr" />
                                </div>
                                <div className="mobil__tablet__section__">
                                    <ul>
                                        <li><a href="#how_it_works">How it works</a></li>
                                        <li><a href="#parnership">Partnership</a></li>
                                        <li><a href="#help">Help</a></li>
                                        <li><a href="#leave_testimonial">Leave testimonial</a></li>
                                        <li><a href="#contact_us">Contact us</a></li>
                                    </ul>
                                    <div className="bar__separation__hr" />
                                </div>
                                <div className="mobil__tablet__section__">
                                    <ul>
                                        <li><a href="#articles">Articles</a></li>
                                        <li><a href="#ours_news">Our news</a></li>
                                        <li><a href="#testimonials">Testimonials</a></li>
                                        <li><a href="#licences">Licences</a></li>
                                        <li><a href="#privacy_policy">Privacy policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
}

/* Menu.propTypes = {
    OpenModalMenu: propTypes.func.isRequired,
    modalMenu: propTypes.bool.isRequired,
} */

export default Menu;
