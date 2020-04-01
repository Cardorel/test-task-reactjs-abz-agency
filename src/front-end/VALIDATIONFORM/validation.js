
export const validationform = (
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
) => {
    //initial boolean it's valid 
    let isValid = true;
    
    //validation for the name
    if(typeof name != "undefined")
    {
        if(!name.match(/^[A-Za-z_-]/))
        {     
                isValid = false;
                checkNameState(false);
                ErrorMessageNameState('The field can not be empty and should contain 2-60 letters.E.g TEST Task');
        }
    }
    
    //Validation for the email
    if(typeof email != "undefined")
    {
        if(!email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/))
        {
            isValid= false;
            checkEmailState(false);
            ErrorMessageEmailState("The field can not be empty and be sure with the format.E.g John@test.com")
        }
    }

    //Validation for the phone
    if(typeof phone != "undefined")
    {
        if(!phone.match(/^\+{0,1}380([0-9]{9})$/))
        {
            isValid = false;
            checkPhoneState(false);
            ErrorMessagePhoneState('The field can\'t be empty and Number should start with code of Ukraine ');
        }
    }
    //validation for the file it's not this format please send him the alert message
     if(!file.match(/\.(jpe?g)$/))
    {
        isValid = false;
        alert('you can not submit without Photo, please select your photo and try again.');
    } 

    //Validation for the position
    if(!checkOneValueofInputRadio)
    {
        isValid = false;
        alert('Please , select your position and try again.')
    }

    return isValid;
}