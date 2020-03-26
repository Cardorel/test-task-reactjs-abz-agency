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
                        <div className="signup__fill__input">
                            <p>Name</p>
                            <input type="text" name="Name" placeholder="Your name" />
                            <p>Email</p>
                            <input type="email" name="Email" placeholder="Your email" />
                            <p>Phone number</p>
                            <input type="text" name="phone-number" placeholder="+380 XX XXX XX XX" />
                            <span>Enter phone number in open format</span>
                        </div>
                        <div className="sign__up__select__position">
                            <p>Select your position</p>
                            <label htmlFor="frontend" className="content__position"> Frontend developer
                                <input type="radio" defaultChecked name="position" id="frontend" />
                                <span className="check__position__span"></span>
                            </label>
                            <label htmlFor="backend" className="content__position"> Backend developer
                                <input type="radio" name="position" id="backend" />
                                <span className="check__position__span"></span>
                            </label>
                            <label htmlFor="postion__3" className="content__position"> Designer
                                <input type="radio" name="position" id="postion__3" />
                                <span className="check__position__span"></span>
                            </label>
                            <label htmlFor="postion__4" className="content__position"> QA
                                <input type="radio" name="position" id="postion__4" />
                                <span className="check__position__span"></span>
                            </label>
                        </div>
                        <div className="signup__upload__photo">
                            <p>Photo</p>
                            <div className="__button__inside__input">
                                <input type="file" name="photo" aria-label="" />
                                <div className="container__upload__photo">
                                    <input type="text" name="filename" disabled placeholder={`Upload your photo`} />
                                    <button className="click__get__photo__file">Browse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="__send__all__registration_request">
                        <button className="Btn__apply__for__job">
                            Sign up now
                            </button>
                    </div>
                </div>
            </section>
        </scroll-page>
    );
}

export default Signup;
