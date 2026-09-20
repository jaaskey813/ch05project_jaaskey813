/*
    Name: Johnathon Askey
    Date: September 20, 2026
*/
/*
<p>This function checks all of the required fields and counts how many fields are empty.</p>
*/
function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    const missingCount = document.getElementById("missing-count");

    let missing = 0;

    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            missing++;
        }
    });

    if (missing > 0) {
        missingCount.textContent = missing + " required field(s) are missing.";
        return true;
    } else {
        missingCount.textContent = "";
        return false;
    }
}

/*
<p>This function checks if the email address contains at least 8 characters.</p>
*/
function validateEmail() {
    const email = document.getElementById("email");

    if (email.value.trim().length < 8) {
        email.classList.add("invalid-email");
        return false;
    } else {
        email.classList.remove("invalid-email");
        return true;
    }
}

/*
<p>This function runs both checkMissing and validateEmail when the submit button is clicked.</p>
*/
function validateForm() {
    const missingFields = checkMissing();
    const validEmail = validateEmail();

    if (missingFields || !validEmail) {
        alert("Please complete all required fields and enter a valid email address.");
        return false;
    }

    alert("The form has been completed successfully!");
    return true;
}

/*
<p>This event listener runs the validation function when the submit button is clicked.</p>
*/
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
    validateForm();
});
