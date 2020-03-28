import React from 'react'
import '../SCSS/__modal.scss';

export default function Modal() {
    return (
        <div className="container__modal">
            <div className="__modal__content">
                    <div className="congratulation__and__closeModal__content">
                        <h2>Congratulations</h2>
                        <span className="close__modal__section">X</span>
                    </div>
                    <div className="bar__separation__hr"/>
                    <p>You have successfully passed the registration</p>
                    <div className="bar__separation__hr"/>
                    <div className="btn_container__modal">
                        <button className="btn__Great__modal">
                            Great
                    </button>
                    </div>
            </div>
        </div>
    )
}
