import React, { useState, useRef, useEffect } from 'react';
//import propTypes from 'prop-types';
import { connect } from 'react-redux'


import { validationform } from '../VALIDATIONFORM/validation';
import '../SCSS/__signup.scss';
import Modal from "../MODAL/modal";
import { getToken } from '../../backend/REDUX/Actions/tokenAction';
import userActionSubmitted from '../../backend/REDUX/Actions/newUserAction';
import { fetchUserPosition } from '../../backend/REDUX/Actions/usersPositionAction';


const Signup = ({ dispatchmyUser, funcTogetToken, myTokenValue, positions, funcTogetUserSPositions }) => {
    //state for the name
    const [name, setName] = useState('');
    //state for the email
    const [email, setEmail] = useState('');
    //state for the phone
    const [phone, setPhone] = useState('');
    //state for the photo
    const [photo, setPhoto] = useState('');
    //state for position id and initialState to 0 
    const [valueOfPositionID, setValueOfPositionID] = useState(0);
    //state to position Frontend/backend/Designer/QA
    const [valueOfPosition, setvalueOfPosition] = useState('');
    //Get the name for the picture
    const [getFilename, setFilename] = useState('');
    //State to check if is validate or not and send the message back 
    //Give me the possibility to send the Error messsage
    const [IfNameIsNotCorrect, setIfNameIsNotCorrect] = useState(true);
    //...
    const [IfEmailIsNotCorrect, setIfEmailIsNotCorrect] = useState(true);
    //...
    const [IfPhoneIsNotCorrect, setIfPhoneIsNotCorrect] = useState(true);
    //state for the Error message
    const [ErrorMessageName, setErrorMessageName] = useState('');
    //...
    const [ErrorMessageEmail, setErrorMessageEmail] = useState('');
    //...
    const [ErrorMessagePhone, setErrorMessagePhone] = useState('');
    //...
    const [checkInputRadioIfNotSelected, setInputRadioIfNotSelected] = useState(false);
    //state for the modal when he submitted
    const [HideModal, HideModalState] = useState(false);
    //getTimeState;
    const getTimeNow = new Date().getTime();
    //The ref and he gives to the user the possiblity to open the file;
    const photoInput = useRef(null)


    useEffect(() => {
        funcTogetToken();
    }, [funcTogetToken])

    useEffect(() => {
        funcTogetUserSPositions();
    }, [funcTogetUserSPositions])


    /* 
              THIS FUNCTION HELPED ME TO VALIDATE MY INPUT RADIO AND GET THE GOOD VALUE WHEN THE RESQUEST WILL BE SENT.
    */
    const handleOnchangeThePosition = (e) => {

        //I want to validate my input Radio.I want to be sure onSubmit 
        //the user must to selected the input and for that i gave all require to false and onChange to True
        if (e.target.required === false) {
            setInputRadioIfNotSelected(true);
        }

        //Use switch to check every value when the user handle his mousse in any input Radio 
        //OnChange i will have the possibility to know which input has been selected
        switch (e.target.value) {
            case "Lawyer":
                return (
                    setValueOfPositionID(1),
                    setvalueOfPosition(e.target.value)
                )
            case "Content manager":
                return (
                    setValueOfPositionID(2),
                    setvalueOfPosition(e.target.value)
                )
            case "Security":
                return (
                    setValueOfPositionID(3),
                    setvalueOfPosition(e.target.value)
                )
            case "Designer":
                return (
                    setValueOfPositionID(4),
                    setvalueOfPosition(e.target.value)
                )
            default:
                break;

        }

    }

    /* 
         THIS FUNCTION BLOCK THE USER TO PUT THE INCORRECT THINGS LIKE THE LETTER ;.,* ETC...
    */

    //@here i want that when my user writes his phone number , 
    //want to be very sure he will never tape the any letter there.
    const handleChangePhone = (e) => {
        //All time when the value doesn't have a number ,will be replaced by nothing
        e.target.value = e.target.value.replace(/[^0-9+]/g, '').replace(/(\..*)\./g, '$1');
        //onChange i want to take my value and put it in the state and send back in the Back end
        setPhone(e.target.value);
    }

    /* 
        THIS FUNCTION HELPS TO VALIDATE THE PHOTO.GOOD FORMAT THE REQUEST WILL BE SENT ELSE THE USER WILL SEE THE ALERT MESSAGE
     */

    //get my url
    let URL = window.URL || window.webkitURL;

    const handleValidationPhoto = (e) => {
        //Get the file property
        let file = e.target.files[0];
        let Img;

        //I want to know my file existe
        if (file) {
            //Create the new object for the image
            Img = new Image();

            //Create the objectURL for my file
            Img.src = URL.createObjectURL(file);
            Img.onload = () => {
                //Check if width 70 and height 70
                if (Img.width === 70 && Img.height === 70) {
                    //if photo have the width 70px and height 70px, want to update my photo as state to give him the all file property
                    setPhoto(file);
                    //this party will help me to take the filename and update my SetstateFilename in the state.His stateFilename(Filename) will be put in the value of input text.
                    setFilename(file.name);

                } else {
                    //Give the alert if the user Select the bad format for the photo
                    alert(`Please ${Img.width}x${Img.height} is not required but we require 70x70.Use this site will help you: https://compressimage.toolur.com/`)
                }
            }
        }
    }

    /* 
    VALIDATION REQUEST.IF USER WILL PUT CORRECT VALUE,IT'LL BE SENT ELSE HE'LL SEE THE ERROR MESSAGE OR ALERT MESSAGE
    */

    const handleSubmit = (e) => {
        //I don t want to see my page update every time when i submitt my request and that i stopped it
        e.preventDefault();

        //@here i don't want to give the user the possibility to send in the backend the wrong Data
        //That i want to be   sure if any Data is not correct he can't no submit
        if (
            validationform(
                name,
                setIfNameIsNotCorrect,
                setErrorMessageName,
                email,
                setIfEmailIsNotCorrect,
                setErrorMessageEmail,
                phone,
                setIfPhoneIsNotCorrect,
                setErrorMessagePhone,
                checkInputRadioIfNotSelected,
                getFilename
            )
        ) {

            ///send the new user
            const formData = new FormData();
            formData.append("name", name)
            formData.append("email", email.toLowerCase())
            formData.append("position", valueOfPosition);
            formData.append("position_id", JSON.stringify(valueOfPositionID))
            formData.append("registration_timestamp", JSON.stringify(getTimeNow));
            formData.append("phone", phone);
            formData.append('photo', photo)

            dispatchmyUser(formData, myTokenValue);

            //Hide thee scroll in the body when the modal window is open
            document.body.style.overflowY = "hidden"
            //after validation and after 0.51s , i want to show the modal
            setTimeout(() => {
                HideModalState(true);
                //Hide the red paragraph if exist
                setIfNameIsNotCorrect(true);
                setIfEmailIsNotCorrect(true);
                setIfPhoneIsNotCorrect(true);
            }, 610);

        }

        //Clean every time when he submitted 
        setTimeout(() => {
            setName('');
            setEmail('');
            setPhone('');
            setFilename('')
        }, 600);
    }

    /*  
                          GET THE USER POSITION.I PREFERED TO CREATE THE FUNCTION WITH THE IF STATMENT
    */

    const HandleUsersPostions = () => {
        if (positions.success) {
            return (
                positions.positions
                &&
                positions.positions.map(pos => (
                    <label key={pos.id} htmlFor={pos.name} className="content__position">{pos.name}
                        <input
                            type="radio"
                            value={pos.name}
                            name="position"
                            required={checkInputRadioIfNotSelected}
                            id={pos.name}
                            onChange={handleOnchangeThePosition}
                        />
                        <span tabIndex={0} className="check__position__span"></span>
                    </label>
                ))
            )
        }
        return <h3 style={{ textAlign: "center" }}>loading...</h3>
    }


    return (
        <scroll-page id="SignUp">
            <div className="All__containers__for__Signup">
                <form onSubmit={handleSubmit}>
                    <div className="signup__container">
                        <div className="signup__header__">
                            <h1>Register to get a work</h1>
                            <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>
                        </div>
                        <div className="signup__all__input__container">
                            <div className="signup__fill__input">
                                <div className="add__height__">
                                    <label htmlFor="name" >Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        name="Name"
                                        id="name"
                                        placeholder="Your name"
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <span className={IfNameIsNotCorrect ? "" : "invalid__data"} >{IfNameIsNotCorrect ? "" : ErrorMessageName}</span>
                                </div>
                                <div className="add__height__">
                                    <label htmlFor="email" >Email</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        id="email"
                                        required={false}
                                        value={email}
                                        placeholder="Your email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                    <span className={IfEmailIsNotCorrect ? "" : "invalid__data"}>{IfEmailIsNotCorrect ? "" : ErrorMessageEmail}</span>
                                </div>
                                <div className="add__height__">
                                    <label htmlFor="phone-number" >Phone number</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        name="phone-number"
                                        id="phone-number"
                                        placeholder="+380 XX XXX XX XX"
                                        onChange={handleChangePhone}
                                    />
                                    <span className={IfPhoneIsNotCorrect ? "" : "invalid__data"}>{IfPhoneIsNotCorrect ? "Enter phone number in open format" : ErrorMessagePhone}</span>
                                </div>
                            </div>
                            <div className="sign__up__select__position">
                                <p>Select your position</p>
                                {HandleUsersPostions()}
                            </div>
                            <div className="signup__upload__photo">
                                <p>Photo</p>
                                <div className="__button__inside__input">
                                    <input
                                        type="file"
                                        name={photo}
                                        accept=".jpg ,.jpeg"
                                        hidden={true}
                                        ref={photoInput}
                                        onChange={handleValidationPhoto}
                                        tabIndex={-1}
                                    />
                                    <div className="container__upload__photo">
                                        <label htmlFor="text-file-name"></label>
                                        <input
                                            type="text"
                                            value={getFilename}
                                            name="photoname"
                                            disabled
                                            id="text-file-name"
                                            placeholder={`Upload your photo`}
                                            tabIndex={-1}
                                        />
                                        <button type="button" onClick={() => photoInput.current.click()} className="click__get__photo__file" tabIndex={0}>Browse</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="__send__all__registration_request">
                            <button tabIndex={0} className="Btn__apply__for__job">
                                Sign up now
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    {
                        HideModal
                        &&
                        <Modal
                            modal={HideModalState}
                        />
                    }
                </div>
            </div>
        </scroll-page>
    );
}



/* Signup.propTypes = {
   handleOnchangeThePosition: propTypes.func.isRequired,
   handleValidationPhotoInput: propTypes.func.isRequired,
   IfNameIsNotCorrect: propTypes.bool.isRequired,
   photo: propTypes.string.isRequired,
} */

const mapStateToProps = (state) => {
    return {
        myTokenValue: state.token,
        positions: state.position.usersPositions,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchmyUser: (user, tokenValue) => dispatch(userActionSubmitted(user, tokenValue)),
        funcTogetToken: () => dispatch(getToken()),
        funcTogetUserSPositions: () => dispatch(fetchUserPosition()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
