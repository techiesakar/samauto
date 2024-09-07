// it get the base url of the site eg: http://localhost:3000
const baseUrl = window.location.origin

function validateForm(e) {
    // Prevent the default behavior (e.g., form submission)
    e.preventDefault();

    let hasError = false;

    // Resetting previous error messages
    document.querySelectorAll(".error-message").forEach(element => {
        element.style.display = "none"; // Use 'none' instead of 'hidden'
        element.textContent = "";
    });

    const sellerForm = document.forms["sellerForm"];
    let brandName = sellerForm["brandName"].value.trim();
    let modelName = sellerForm["modelName"].value.trim();
    let manufacturedYear = sellerForm["manufacturedYear"].value.trim();
    let mileage = sellerForm["mileage"].value.trim();
    let location = sellerForm["location"].value.trim();
    let price = sellerForm["price"].value.trim();
    let seat = sellerForm["seat"].value.trim();
    let color = sellerForm["color"].value.trim();

    // Validate brand name
    if (!brandName) {
        document.querySelector(".brandName-error-message").textContent = "Brand Name is required.";
        document.querySelector(".brandName-error-message").style.display = "block";
        hasError = true;
    }

    // Validate model name
    if (!modelName) {
        document.querySelector(".modelName-error-message").textContent = "Model Name is required.";
        document.querySelector(".modelName-error-message").style.display = "block";
        hasError = true;
    }

    // Validate manufactured year
    if (!manufacturedYear || !/^\d{4}$/.test(manufacturedYear)) {
        document.querySelector(".manufacturedYear-error-message").textContent = "Manufactured Year must be a 4-digit year.";
        document.querySelector(".manufacturedYear-error-message").style.display = "block";
        hasError = true;
    }

    // Validate mileage
    if (!mileage || isNaN(mileage) || mileage <= 0) {
        document.querySelector(".mileage-error-message").textContent = "Mileage must be a positive number.";
        document.querySelector(".mileage-error-message").style.display = "block";
        hasError = true;
    }

    // Validate location
    if (!location) {
        document.querySelector(".location-error-message").textContent = "Location is required.";
        document.querySelector(".location-error-message").style.display = "block";
        hasError = true;
    }

    // Validate price
    if (!price || isNaN(price) || price <= 0) {
        document.querySelector(".price-error-message").textContent = "Price must be a positive number.";
        document.querySelector(".price-error-message").style.display = "block";
        hasError = true;
    }

    // Validate seat if provided
    if (seat && (!Number.isInteger(Number(seat)) || Number(seat) <= 0)) {
        document.querySelector(".seat-error-message").textContent = "Seat must be a positive integer if provided.";
        document.querySelector(".seat-error-message").style.display = "block";
        hasError = true;
    }

    // Validate color if provided
    if (color && !/^[a-zA-Z\s]+$/.test(color)) {
        document.querySelector(".color-error-message").textContent = "Color must be alphabetic characters only if provided.";
        document.querySelector(".color-error-message").style.display = "block";
        hasError = true;
    }

    // Seat and color are optional, so no validation is required

    if (hasError) {
        // Prevent form submission if there are validation errors
        return false;
    }

    alert("Submitted Successfully")
}
