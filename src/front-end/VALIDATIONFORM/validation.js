
export const validationform = (
    name,
    setIfNameIsNotCorrect,
    setErrorMessageName,
    email,
    setIfEmailIsNotCorrect,
    setErrorMessageEmail,
    phone,
    setIfPhoneIsNotCorrect,
    setErrorMessagePhone,
    checkOneValueofInputRadio,
    getFilename
) => {
    //initial boolean it's valid 
    let isValid = true;
    
    //validation for the name
    if(typeof name != "undefined")
    {
        if(!name.match(/^[A-Za-z_-]/))
        {     
                isValid = false;
                setIfNameIsNotCorrect(false);
                setErrorMessageName('The field can not be empty and should contain 2-60 letters.E.g TEST Task');
        }
    }
    
    //Validation for the email
    if(typeof email != "undefined")
    {
        if(!email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/))
        {
            isValid= false;
            setIfEmailIsNotCorrect(false);
            setErrorMessageEmail("The field can not be empty and be sure with the format.E.g John@test.com")
        }
    }

    //Validation for the phone
    if(typeof phone != "undefined")
    {
        if(!phone.match(/^\+{0,1}380([0-9]{9})$/))
        {
            isValid = false;
            setIfPhoneIsNotCorrect(false);
            setErrorMessagePhone('The field can\'t be empty and Number should start with code of Ukraine +380');
        }
    }
    //validation for the file it's not this format please send him the alert message
     if(getFilename === "")
    {
        isValid = false;
        alert("please select your picture in format 70x70 and try again.")
    }  

    //Validation for the position
    if(!checkOneValueofInputRadio)
    {
        isValid = false;
        alert('Please , select your position and try again.')
    }

    return isValid;
}