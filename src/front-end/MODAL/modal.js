import React  from 'react'
import '../SCSS/__modal.scss';

export default function Modal({modal}) {

    //Give the user the possibility to click in any btn on the keyBoard to close the Modal
    const onhandleBlur = () => {
        modal(false)
    }

    //Close modal the modal when we click in the btn Great
    const BtncloseModal = () =>{
        setTimeout(() => {
            modal(false)
        }, 250);
    }

    //close the modal when we click in X and i gave it some intervalTime to wait after clicked
    const closeModal = () =>{
        setTimeout(() => {
            modal(false)
        }, 250);
    }

    return (
        <div className="container__modal" onBlur={onhandleBlur}>
            <div className="__modal__content">
                    <div className="congratulation__and__closeModal__content">
                        <h2>Congratulations</h2>
                        <span 
                        onClick={closeModal}
                        className="close__modal__section">X</span>
                    </div>
                    <div className="bar__separation__hr"/>
                    <p>You have successfully passed the registration</p>
                    <div className="bar__separation__hr"/>
                    <div className="btn_container__modal">
                        <button onClick={BtncloseModal} className="btn__Great__modal">
                            Great
                    </button>
                    </div>
            </div>
        </div>
    )
}
