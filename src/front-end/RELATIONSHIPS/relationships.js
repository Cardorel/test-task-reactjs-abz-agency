import React from 'react'
import '../SCSS/__relationship.scss';
import manLaptop from '../../Image/man-laptop-v1.svg'

export default function Relationships() {
    return (
        <section id="Relationship">
            <div className="container__relation__ship">
                <h1>Let's get acquainted</h1>
                <div className="Acquainted__container__flex">
                    <div className="image__svg__container">
                        <img src={manLaptop} alt={'manlaptop'}/>
                    </div>
                    <div className="relationship__requirement__containers">
                        <h2>I am cool frontend developper</h2>
                        <div className="requirements__contents">
                            <p>
                                We will evaluate how clean your approach to writting css and Javascript code is. You can use any css and Javascript 3rd party libraries without any restriction. 
                            </p>
                            <p>
                                if 3rd party add css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. if you use any task runner (gult/webpack) you will get the bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.
                            </p>
                        </div>
                        <button className="btn__Without__background__color">
                            <a href="#Singup">Sign up now</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
