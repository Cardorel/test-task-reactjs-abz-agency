import React from 'react';

import '../SCSS/__signup.scss'

const Signup = () => {
    return (
        <scroll-page>
            <section id="Signup">
                <div className="signup__container">
                    <div className="signup__header__">
                        <h1>Register to get a work</h1>
                        <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>
                    </div>
                    <div className="signup__all__input__container">
                        <h2>Name</h2>
                        <input type="text" name="Name" placeholder="Your name"/>
                        <h2>Email</h2>
                        <input type="email" name="Email" placeholder="Your email"/>
                        <h2>Phone number</h2>
                        <input type="text" name="phone-number" placeholder="+380 XX XXX XX XX"/>
                        <p>Enter phone number in open format</p>
                        <div className="sign__up__select__position">
                            <p>Select your position</p>
                            <input type="radio" name="position"/>
                            <input type="radio" name="position"/>
                            <input type="radio" name="position"/>
                            <input type="radio" name="position"/>
                        </div>
                        <div className="sign__up__upload__photo">
                            <p>Photo</p>
                            <div className="__button__inside__input">
                                <input type="file" name="photo" placeholder="Upload your photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </scroll-page>
    );
}

export default Signup;
