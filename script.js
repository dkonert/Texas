
function checkEmail() {
    const email = document.getElementById("email");
    const email2 = document.getElementById("email2");

    const value1 = email.value;
    const value2 = email2.value;

    if (value1 === value2) {
        alert("Form submisson was successful!")
    }
    else{
        alert("Emails do not match...")
    }
}
