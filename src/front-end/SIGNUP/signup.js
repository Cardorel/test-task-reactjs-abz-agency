import React, { useState, useRef, Suspense , lazy} from 'react';

import { validationform } from '../VALIDATIONFORM/validation'

import '../SCSS/__signup.scss'
import Modal from "../MODAL/modal"
const getTimeNow = new Date().getTime();

const Signup = () => {
    //state for the name
    const [name, nameState] = useState('');
    //state for the email
    const [email, emailState] = useState('');
    //state for the phone
    const [phone, phoneState] = useState('');
    //state for the file
    const [file, fileState] = useState('');
    //state for position id and initialState to 0 
    const [inputRadioValuePositionID, inputRadioValuePositionIDState] = useState(0);
    //state to position Frontend/backend/Designer/QA
    const [inputRadioValuePosition, inputRadioValuePositionState] = useState('');
    //State to check if is validate or not and send the message back 
    //Give me the possibility to send the Error messsage
    const [checkName, checkNameState] = useState(true);
    //...
    const [checkEmail, checkEmailState] = useState(true);
    //...
    const [checkPhone, checkPhoneState] = useState(true);
    //state for the Error message
    const [ErrorMessageName, ErrorMessageNameState] = useState('');
    //...
    const [ErrorMessageEmail, ErrorMessageEmailState] = useState('');
    //...
    const [ErrorMessagePhone, ErrorMessagePhoneState] = useState('');
    //...
    const [checkOneValueofInputRadio, checkOneValueofInputRadioState] = useState(false);
    //state for the modal when he submitted
    const [showModal, showModalState] = useState(false);
    //I prefered to put time and update it with getTimeState;
    const [time, getTimeState] = useState(getTimeNow);
    //The ref and he gives to the user the possiblity to open the file;
    const fileInput = useRef(null)

 /*    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(file)
    console.log(inputRadioValuePosition)
    console.log(inputRadioValuePositionID)
    console.log(time)
    console.log(checkOneValueofInputRadio) */

    const handleOnchangeRadio = (e) => {

        //I wanted to validate my input Radio.I want to be sure onSubmit 
        //the user must to selected the input and for that i gave all require to false and onChange to True
        if (e.target.required === false) {
            checkOneValueofInputRadioState(true);
        }

        //Use switch to check every value when the user handle his mousse in any input Radio 
        //OnChnage i will have the possibility to know which input he selected
        switch (e.target.value) {
            case "Front-end":
                return (
                    inputRadioValuePositionIDState(1),
                    inputRadioValuePositionState(e.target.value)
                )
            case "Back-end":
                return (
                    inputRadioValuePositionIDState(2),
                    inputRadioValuePositionState(e.target.value)
                )
            case "Designer":
                return (
                    inputRadioValuePositionIDState(3),
                    inputRadioValuePositionState(e.target.value)
                )
            case "QA":
                return (
                    inputRadioValuePositionIDState(4),
                    inputRadioValuePositionState(e.target.value)
                )
            default:
                break;

        }

    }

    //@here i want that when my user writes his phone number , 
    //want to be very sure he will never tape the any letter there.
    const handleChangePhone = (e) => {
        e.target.value = e.target.value.replace(/[^0-9+]/g, '').replace(/(\..*)\./g, '$1');
        //onChange i want to take my value and put it in the state and send back in the Back end
        phoneState(e.target.value);
    }

    const handleValidationFileInput = (e) => {
        //I want to take the file name and put it in the state
        fileState(e.target.files[0].name);
    }

    const handleSubmit = (e) => {
        //I don t want to see my page update every time when i submitt my request and that i stopped it
        e.preventDefault();

        //@here i don't want to give the user the possibility to send in the backend the wrong Data
        //That i wanted to be   sure if any Data is not correct he can't no submit
        if (
            validationform(
                name,
                checkNameState,
                ErrorMessageNameState,
                email,
                checkEmailState,
                ErrorMessageEmailState,
                phone,
                checkPhoneState,
                ErrorMessagePhoneState,
                file,
                checkOneValueofInputRadio
            )
        ) {
            
            //If every thing is ok , i want to want the modal to think him !
                setTimeout(() => {
                    showModalState(true); 
                }, 510);

        }

        //Clean every time when he submitted 
        setTimeout(() => {
            nameState('');
            emailState('');
            phoneState('');
            fileState('')
        }, 600);
    }


    return (
        <section id="Signup">
            <form onSubmit={handleSubmit}>
                <div className="signup__container">
                    <div className="signup__header__">
                        <h1>Register to get a work</h1>
                        <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>
                    </div>
                    <div className="signup__all__input__container">
                        <div className="signup__fill__input">
                            <p>Name</p>
                            <input
                                type="text"
                                value={name}
                                name="Name"
                                placeholder="Your name"
                                onChange={(e) => { nameState(e.target.value) }}
                            />
                            <span className={checkName ? "" : "invalid__data"} >{checkName ? "" : ErrorMessageName}</span>
                            <p>Email</p>
                            <input
                                type="email"
                                name="Email"
                                value={email}
                                placeholder="Your email"
                                onChange={(e) => { emailState(e.target.value) }}
                            />
                            <span className={checkEmail ? "" : "invalid__data"}>{checkEmail ? "" : ErrorMessageEmail}</span>
                            <p>Phone number</p>
                            <input
                                type="text"
                                value={phone}
                                name="phone-number"
                                placeholder="+380 XX XXX XX XX"
                                onChange={handleChangePhone}
                            />
                            <span className={checkPhone ? "" : "invalid__data"}>{checkPhone ? "Enter phone number in open format" : ErrorMessagePhone}</span>
                        </div>
                        <div className="sign__up__select__position">
                            <p>Select your position</p>
                            <label htmlFor="frontend" className="content__position"> Frontend developer
                                <input
                                    type="radio"
                                    value="Front-end"
                                    name="position"
                                    required={checkOneValueofInputRadio}
                                    id="frontend"
                                    onChange={handleOnchangeRadio}
                                />
                                <span className="check__position__span"></span>
                            </label>
                            <label htmlFor="backend" className="content__position"> Backend developer
                                <input
                                    type="radio"
                                    name="position"
                                    value="Back-end"
                                    required={checkOneValueofInputRadio}
                                    id="backend"
                                    onChange={handleOnchangeRadio}
                                />
                                <span className="check__position__span"></span>
                            </label>
                            <label htmlFor="postion__3" className="content__position"> Designer
                                <input
                                    type="radio"
                                    required={checkOneValueofInputRadio}
                                    value="Designer"
                                    name="position"
                                    defaultChecked
                                    id="postion__3"
                                    onChange={handleOnchangeRadio}
                                />
                                <span className="check__position__span"></span>
                            </label>
                            <label htmlFor="postion__4" className="content__position"> QA
                                <input
                                    type="radio"
                                    value="QA"
                                    name="position"
                                    required={checkOneValueofInputRadio}
                                    id="postion__4"
                                    onChange={handleOnchangeRadio}
                                />
                                <span className="check__position__span"></span>
                            </label>
                        </div>
                        <div className="signup__upload__photo">
                            <p>Photo</p>
                            <div className="__button__inside__input">
                                <input
                                    type="file"
                                    name={file}
                                    accept=".jpg,.jpeg"
                                    ref={fileInput}
                                    onChange={handleValidationFileInput}
                                />
                                <div className="container__upload__photo">
                                    <input type="text" value={file} name="filename" disabled placeholder={`Upload your photo`} />
                                    <button type="button" onClick={() => fileInput.current.click()} className="click__get__photo__file">Browse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="__send__all__registration_request">   
                            <Suspense fallback='waiting...'>
                            <button className="Btn__apply__for__job">
                                Sign up now
                            </button>
                            </Suspense>
                    </div>
                </div>
            </form>
            <div>       
                    {
                       showModal 
                       && 
                       <Modal  modal={showModalState}/>
                    }
            </div>
        </section>
    );
}

export default Signup;
