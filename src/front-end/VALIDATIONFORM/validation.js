
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
    file
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
        if(!email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/))
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
     console.log(file)
     console.log('====================================');
     console.log(typeof file);
     console.log('====================================');

     if(!file.match(/\.(jpe?g)$/))
    {
        isValid = false;
        alert('you can not submit without Photo, please select your photo and try again.');
    } 

    return isValid;
}