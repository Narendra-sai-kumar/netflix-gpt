export const loginValidate = ({email, password, firstName, lastName, mobileNumber, islogin}) => {
    const loginErrorObj = {};

    if(!islogin){
        const isfirstNameValid = 
        /^[A-Za-z'-]{1,50}$/.test(firstName);
        if(!isfirstNameValid) {
            loginErrorObj.firstNameError = "Please Enter First name."
        }
    
    
        const isLastNameValid = 
        /^[A-Za-z'-]{1,50}$/.test(lastName);
        if(!isLastNameValid) {
            loginErrorObj.lastNameError = "Please Enter Last name."
        }
    
    
        const ismobileNumberValid = /^\d{10}$/.test(mobileNumber);
        if(!ismobileNumberValid) {
            loginErrorObj.mobileNumberError = "Please Enter 10 digits Mobile number."
        }
    }
       
    

    
        const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/.test(email);
        if(!isEmailValid) {
            loginErrorObj.emailError = "Please Enter Valid Email"
        }

    

    
        const isPasswordValid = 
        /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/.test(password);
        if(!isPasswordValid) {
            loginErrorObj.passwordError = "Please Enter password that contains atleast one letter, one digit, one special character and minimum of 8 characters long"
        }
        

    
    
    return loginErrorObj;
}