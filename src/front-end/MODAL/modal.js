import React  from 'react'
import {connect} from 'react-redux'

import '../SCSS/__modal.scss';

 function Modal({modal , hasError , ErrorMessage}) {

    //Give the user the possibility to click in Tab btn on the keyBoard to close the Modal
    const onhandleBlur = () => {
        //Give back my scroll when my Modal is closed;
        document.body.style.overflowY = "scroll";
        window.location.reload(true);
        modal(false)
    }

    //Close modal the modal when we click in the btn Great
    const BtncloseModal = () =>{
        setTimeout(() => {
            document.body.style.overflowY = "scroll";
            //Reload after closing
            window.location.reload(true);
            modal(false)
        }, 250);
    }

    //close the modal when we click in X and i gave it some intervalTime to wait after clicked
    const closeModal = () =>{
        setTimeout(() => {
            document.body.style.overflowY = "scroll";
            window.location.reload(true);
            modal(false)
        }, 250);
    }

    console.log(ErrorMessage);
    
  

    return (
        <div className="container__modal" onBlur={onhandleBlur}>
            <div className="__modal__content">
                    <div className="congratulation__and__closeModal__content">
                        <h2>{hasError? 'Congratulations' : ")-: FOUND ERROR!"}</h2>
                        <span 
                        onClick={closeModal}
                        className="close__modal__section">X</span>
                    </div>
                    <div className="bar__separation__hr"/>
                        <p className={hasError? "success__paragraph" : "fail__paragraph"}>{hasError? 'You have successfully passed the registration' :  ErrorMessage}</p>
                        <span className="MessageError__When__User__Exist">{hasError? '': "User with this phone or email already exist"}</span>
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

const mapStateToProps = state => {
    return{
        //get my bool loadingUserRequest in the Reducer and user it to check if has some error or not.With "hasError" tring to handle myclass and my paragraph
        hasError: state.newUser.loadingUserRequest,
        //Get the message error if my axios return catch and send the message to interface frontend to show the user the Type of the Error
        ErrorMessage: state.newUser.loadingUserFailure
    }
}

//Connect with Redux to take the props in my store and i gave null because i'm using DispatchTomap funct;
export default connect(mapStateToProps , null)(Modal);