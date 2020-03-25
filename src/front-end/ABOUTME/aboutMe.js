import React from 'react'
import '../SCSS/__about.scss'


export default function AboutMe() {
    return (
        <section id="About">
            <div className="container__about__me">
                <h1>Test assignment for frontend developper position</h1>
                <p>
                    We kendly remind you that your test assignment should be submitted as a link to Github/bitbucket repository. Please be patient, we will consider and respond to every application that meets minimum requirements. We look for forward to your submission. Good luck ! The photo has to scale in the banner area on the different screens
                </p>
                <button className="__btn__sign__up">
                    <a href="#Signup">Sign up now</a>
                </button>
            </div>
        </section>
    )
}
