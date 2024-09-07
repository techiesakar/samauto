const baseUrl = window.location.origin
function validateForm(e) {
    e.preventDefault()

    // reseting the previous error messages
    document.querySelectorAll(".error-message").forEach(element => {
        element.style.display = "hidden";
        element.textContent = ""
    })

    // assigning the error flag
    let hasError = false

    // setting up default username and password
    const defaultUsername = "demo"
    const defaultPassword = "demo"

    // getting the values
    let username = document.forms["loginForm"]["username"].value;
    let password = document.forms["loginForm"]["password"].value;

    // if username is missing - show error
    if (!username.length > 0) {
        document.querySelector(".username-error-message").textContent = "Username is missing"
        document.querySelector(".username-error-message").style.display = "inline"
        hasError = true;
    }

    // authenticating the username and password
    if (username !== defaultUsername || password !== defaultPassword) {
        document.querySelector(".password-error-message").textContent = "Invalid Credentials"
        document.querySelector(".password-error-message").style.display = "inline"
        hasError = true
    }

    if (!hasError) {
        window.location.replace(`${baseUrl}/seller.html`);
    }

    return false

}