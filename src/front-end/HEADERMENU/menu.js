import React from 'react';
import '../SCSS/__menu.scss'
import logo from '../../Image/favicon-32x32.png'

const Menu = () => {
    return (
        <header className="container-header">
            <div className="container-mobile">
                <div className="If__desktop">
                    <div className="section__first">
                           <img src={logo} alt="logoImage" />
                        <h2>Test task</h2>
                    </div>
                    <div className="section__second">
                        <ul>
                            <li><a href="#About">About me</a></li>
                            <li><a href="#Relationships">Relationships</a></li>
                            <li className="show__element__3"><a href="#Requirements">Requirements</a></li>
                            <li><a href="#Users">Users</a></li>
                            <li><a href="#SignUp">Sign Up</a></li>
                            <li className="hide__element__with__position__5"><a href="#Condition">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="hide__section__if__desktop">
                    <hr />
                    <div className="section__third">
                        <ul>
                            <li>How it works</li>
                            <li>Partnership</li>
                            <li>Help</li>
                            <li>Leave testimonial</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="section__fourth">
                        <ul>
                            <li>Articles</li>
                            <li>Our news</li>
                            <li>Testimonials</li>
                            <li>Licences</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Menu;
