const passwordInput = document.querySelector("#upass");
const passwordInput2 = document.querySelector("#upass2");
console.log(passwordInput);

function setClass() {
    if (passwordInput.value !== passwordInput2.value) {
        passwordInput.classList.add("not-valid");
        passwordInput2.classList.add("not-valid");
    } else {
        passwordInput.classList.remove("not-valid");
        passwordInput2.classList.remove("not-valid");
    }
}

passwordInput.addEventListener("change", setClass);
passwordInput2.addEventListener("change", setClass);
