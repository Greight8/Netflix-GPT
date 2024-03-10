export const signupValidateData = (name, email, password) => {

    // 1) using regex to validate email
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    // 2) using regex to validate password
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // 3) using regex to validate confirm password
    // const isConfirmValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(confirm)

    // 4) using regex to validate name
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if (!isEmailValid) {
        return ("incorrect email !")
    }

    if (!isPasswordValid) {
        return ("incorrect password !")
    }

    if (!isNameValid) {
        return ("Name should be in Capital !")
    }

    // if (!isConfirmValid) {
    //     return ("incorrect password !")
    // }

    // if (isPasswordValid !== isConfirmValid) {
    //     return ("Password does not match !")
    // }

    // if (isConfirmValid.length != isPasswordValid.length) {
    //     return ("Password does not match !")
    // }

    return null;
}