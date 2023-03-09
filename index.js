let email_validate = document.querySelector(".email");
let submitting = document.querySelector("button");
let massege = document.querySelector(".main_section3 p");

submitting.addEventListener("click", function () {
    massege.style.cssText = "visibility: hidden;"
    if (email_validate.value === "") {
        return;
    } else {
        if ((/\w+\d[0-9]+@\w+.(net|ru|com|org)/gi).test(email_validate.value) === true) {
            email_validate.style.cssText = "border:solid green 1px";
            massege.innerHTML = "Thanks for enter your email";
            massege.style.cssText = "visibility: visible;color:green;";
        } else {
            email_validate.style.cssText = "border:solid red 1px";
            massege.innerHTML = "Please provide a valid email address";
            massege.style.cssText = "visibility: visible;";
        }
    }
});

