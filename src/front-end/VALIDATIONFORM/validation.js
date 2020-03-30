
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
    checkFileState,
    ErrorMessageFileState,
) => {
    let isValid = true;
    
    if(typeof name != "undefined")
    {
        if(!name.match(/^[A-Za-z_-]/))
        {     
                isValid = false;
                checkNameState(false);
                ErrorMessageNameState('The field can not be empty and should contain 2-60 letters.E.g TEST Task');
        }
    }

    if(typeof email != "undefined")
    {
        if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            isValid= false;
            checkEmailState(false);
            ErrorMessageEmailState("The field can not be empty and be sure with the format.E.g John@test.com")
        }
    }

    if(typeof phone != "undefined")
    {
        if(!phone.match(/^\+{0,1}380([0-9]{9})$/))
        {
            isValid = false;
            checkPhoneState(false);
            ErrorMessagePhoneState('The field can\'t be empty and Number should start with code of Ukraine ');
        }
    }

    if(typeof file != "undefined")
    {
        isValid = false;
        checkFileState(false);
        ErrorMessageFileState('The field can\'t be empty.Try again');
    }

    return isValid;
}