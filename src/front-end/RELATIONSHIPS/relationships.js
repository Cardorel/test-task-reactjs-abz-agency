import React from 'react';

import '../SCSS/__relationship.scss';
import manLaptop from '../../Image/man-laptop-v1.svg';

export default function Relationships() {
    return (
        <scroll-page id="Relationships">
            <div className="all__Containers__for__relationships">
                <div className="container__relation__ship">
                    <h1>Let's get acquainted</h1>
                    <div className="Acquainted__container__flex">
                        <div className="image__svg__container">
                            <img src={manLaptop} alt={'manlaptop'} />
                        </div>
                        <div className="relationship__requirement__containers">
                            <h2>I am cool frontend developer</h2>
                            <div className="requirements__contents">
                                <p id="Requirements">
                                    We will evaluate how clean your approach to writting css and Javascript code is. You can use any css and Javascript 3rd party libraries without any restriction.
                            </p>
                                <p>
                                    If 3rd party add css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gult/webpack) you will get the bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.
                            </p>
                            </div>
                            <button className="btn__Without__background__color">
                                <a href="#SignUp" role="button" aria-pressed={false}>Sign up now</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </scroll-page>
    )
}
