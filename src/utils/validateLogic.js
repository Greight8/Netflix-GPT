export const checkValidateData = (email, password) => {

    // 1) using regex to validate email
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    // 2) using regex to validate password
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isEmailValid) {
        return ("incorrect email !")
    }

    if (!isPasswordValid) {
        return ("incorrect password !")
    }

    return null;
}