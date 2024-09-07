// it get the base url of the site eg: http://localhost:3000
const baseUrl = window.location.origin

// function to validate Phone Number
function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{9}$|^\d{10}$|^\d{11}$/;
    return phoneRegex.test(phone);
}

function validateForm(e) {
    // this prevent the default behaviour
    e.preventDefault()
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[?$#@])[a-zA-Z\d?$#@]{6,10}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hasError = false

    // reseting the previous error messages
    document.querySelectorAll(".error-message").forEach(element => {
        element.style.display = "hidden";
        element.textContent = ""
    })


    const signupForm = document.forms["signupForm"]
    let name = signupForm["name"].value;
    let address = signupForm["address"].value;
    // agent details

    let agentName = signupForm["agentName"].value;
    let agentPhone = signupForm["agentPhone"].value;

    // company phone
    let phone = signupForm["phone"].value;
    let username = signupForm["username"].value;
    let email = signupForm["email"].value;
    let password = signupForm["password"].value;


    // Validating the name length of company
    if (name.length < 3 || name.length > 50) {
        document.querySelector(".name-error-message").textContent = "Name must be 3 or more and below 50 character"
        document.querySelector(".name-error-message").style.display = "inline"
        hasError = true
    }

    // Not letting user have username and email same
    if (username === email) {
        document.querySelector(".username-error-message").textContent = "Username and Email cannot be same"
        document.querySelector(".username-error-message").style.display = "inline"
        hasError = true
    }

    // user must input valid email address
    if (!emailRegex.test(email)) {
        document.querySelector(".email-error-message").textContent = "Invalid Email"
        document.querySelector(".email-error-message").style.display = "inline"
        hasError = true
    }

    // phone number must be number and should be 9 or 10 or 11 character
    if (!validatePhoneNumber(phone)) {
        document.querySelector(".phone-error-message").textContent = "Invalid Phone Number"
        document.querySelector(".phone-error-message").style.display = "inline"
        hasError = true
    }

    // if agent name exists, it should be atleast of 3 characters
    if (agentName.length > 0 && agentName.length < 3) {
        document.querySelector(".agentName-error-message").textContent = "Invalid Agent Name"
        document.querySelector(".agentName-error-message").style.display = "inline"
        hasError = true
    }

    // if agent phone exists, it should be valid
    if (agentPhone.length > 0) {
        if (!validatePhoneNumber(agentPhone)) {
            document.querySelector(".agentPhone-error-message").textContent = "Invalid Phone Number"
            document.querySelector(".agentPhone-error-message").style.display = "inline"
            hasError = true
        }
    }

    // password must be of length 6 to 10 inclusive
    if (password.length < 6 || password.length > 10) {
        document.querySelector(".password-error-message").textContent = "Password must be 6 to 10 character long"
        document.querySelector(".password-error-message").style.display = "inline"
        hasError = true

    }

    // password must contain special characters
    if (!passwordRegex.test(password)) {
        document.querySelector(".password-error-message").textContent = "Password must contain special character, number, letter"
        document.querySelector(".password-error-message").style.display = "inline"
        hasError = true
    }

    // if has no error - redirect to login page
    if (!hasError) {
        alert("Registered Successfully")
        window.location.replace(`${baseUrl}/login.html`);
    }

    // if has error - show error - and do nothing else
    return false
}