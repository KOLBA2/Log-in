const check = function(event)  {
    console.log(event.target)
    if (event.target.checked){
       document.getElementById("button").disabled = false;
    } else {
        document.getElementById("button").disabled = true;

    }
}
function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const textBox = document.querySelector('.text-box');
    const genderCheckboxes = document.querySelectorAll('input[type="checkbox"][name="gender"]');
    const agreementCheckbox = document.querySelector('input[type="checkbox"]');

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must contain 8-15 characters, 1 capital letter, 1 symbol, and 1 number.";
        alert("Password is invalid.");
        return false;
    } else {
        passwordError.textContent = "";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        alert("Passwords do not match.");
        return false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (textBox.value.trim() === "") {
        alert("Please select an option in the dropdown.");
        return false;
    }

    const genderSelected = Array.from(genderCheckboxes).some(checkbox => checkbox.checked);
if (!genderSelected) {
    alert("Please select a gender.");
    return false;
}


    if (!agreementCheckbox.checked) {
        alert("Please agree to the terms and conditions.");
        return false;
    } else {
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        textBox.value = "";
        genderCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    return true; 
}

const checkboxes = document.querySelectorAll('input[type="checkbox"][name="gender"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

function show(value) {
    document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function() {
    dropdown.classList.toggle("active");
}