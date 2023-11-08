document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Reset error messages
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    // Validation checks
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var terms = document.getElementById("terms");

    var isValid = true;

    if (firstName.trim() === "") {
        document.getElementById("firstNameError").textContent = "First Name is required";
        isValid = false;
    }

    if (lastName.trim() === "") {
        document.getElementById("lastNameError").textContent = "Last Name is required";
        isValid = false;
    }

    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Gender is required";
        isValid = false;
    }

    if (!terms.checked) {
        document.getElementById("termsError").textContent = "You must accept the Terms and Conditions";
        isValid = false;
    }

    if (age < 0) {
        document.getElementById("ageError").textContent = "Age must be a non-negative number";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
