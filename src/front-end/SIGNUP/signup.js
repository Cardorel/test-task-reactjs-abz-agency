import React, { useState , useRef} from 'react';

import {validationform} from '../VALIDATIONFORM/validation'

import '../SCSS/__signup.scss'
//import Modal from '../MODAL/modal';

const Signup = () => {
    const [name, nameState] = useState('');
    const [email, emailState] = useState('');
    const [phone, phoneState] = useState('');
    const [file, fileState] = useState('');
    const [inputRadioFront, inputRadioFrontState] = useState('');
    const [inputRadioBack, inputRadioBackState] = useState('');
    const [inputRadioQA, inputRadioQAState] = useState('');
    const [inputRadioDesigner, inputRadioDesignerState] = useState('');
    const [checkName , checkNameState] = useState(true);
    const [checkEmail , checkEmailState] = useState(true);
    const [checkPhone , checkPhoneState] = useState(true);
    //const [checkFile , checkFileState] = useState(true);
    const [ErrorMessageName ,ErrorMessageNameState] = useState('');
    const [ErrorMessageEmail ,ErrorMessageEmailState] = useState('');
    const [ErrorMessagePhone ,ErrorMessagePhoneState] = useState('');
    const [ErrorMessageFile ,ErrorMessageFileState] = useState('');
    const fileInput = useRef(null)


    console.log(checkName);
    

    /* const SelectPhoto = (e) => {
    
        fileInput.current.click()
    } */

     
    const handleChangePhone = (e) => {
        e.target.value = e.target.value.replace(/[^0-9+]/g, '').replace(/(\..*)\./g, '$1');
        phoneState(e.target.value);
    }

    const handleValidationFileInput = (e) => {
        let isCorrect = true;
        fileState(e.target.files[0].name);
        if(e.target.value === '')
        {
            isCorrect = false;
        }
        return isCorrect;
    }

     const handleSubmit = (e) => {
         e.preventDefault();
         if(
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
                file
            )
         ){
             alert("yes it s good");
         }
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
                                <span className={checkName? "" : "invalid__data"} >{checkName? "" : ErrorMessageName}</span>
                                <p>Email</p>
                                <input
                                    type="email"
                                    name="Email"
                                    value={email}
                                    placeholder="Your email"
                                    onChange={(e) => { emailState(e.target.value) }}
                                />
                                <span className={checkEmail? "" : "invalid__data"}>{checkEmail? "" : ErrorMessageEmail}</span>
                                <p>Phone number</p>
                                <input
                                    type="text"
                                    value={phone}
                                    name="phone-number"
                                    placeholder="+380 XX XXX XX XX"
                                    /*onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9+]/g, '').replace(/(\..*)\./g, '$1'))}*/
                                    onChange={handleChangePhone}
                                />
                                <span className={checkPhone? "" : "invalid__data"}>{checkPhone? "Enter phone number in open format" : ErrorMessagePhone}</span>
                            </div>
                            <div className="sign__up__select__position">
                                <p>Select your position</p>
                                <label htmlFor="frontend" className="content__position"> Frontend developer
                                <input
                                        type="radio"
                                        value={inputRadioFront}
                                        defaultChecked
                                        name="position"
                                        id="frontend"
                                        onChange={(e) => inputRadioFrontState(e.target.value)}
                                    />
                                    <span className="check__position__span"></span>
                                </label>
                                <label htmlFor="backend" className="content__position"> Backend developer
                                <input
                                        type="radio"
                                        name="position"
                                        value={inputRadioBack}
                                        id="backend"
                                        onChange={(e) => inputRadioBackState(e.target.value)}
                                    />
                                    <span className="check__position__span"></span>
                                </label>
                                <label htmlFor="postion__3" className="content__position"> Designer
                                <input
                                        type="radio"
                                        value={inputRadioDesigner}
                                        name="position"
                                        id="postion__3"
                                        onChange={(e) => inputRadioDesignerState(e.target.value)}
                                    />
                                    <span className="check__position__span"></span>
                                </label>
                                <label htmlFor="postion__4" className="content__position"> QA
                                <input
                                        type="radio"
                                        value={inputRadioQA}
                                        name="position"
                                        id="postion__4"
                                        onChange={(e) => inputRadioQAState(e.target.value)}
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
                            <button className="Btn__apply__for__job">
                                Sign up now
                            </button>
                        </div>
                    </div>
                </form>
            </section>
    );
}

export default Signup;
