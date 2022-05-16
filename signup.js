function getVal() {
    let firstName = document.getElementById("FirstNameInput").value;
    let lastname = document.getElementById("LastNameInput").value;
    let email = document.getElementById("EmailInput").value;
    let password = document.getElementById("PasswordInput").value;
    let confirmPassword = document.getElementById("ConfirmPasswordInput").value;

    if (password == confirmPassword){

        alert("You registrated :D")
    }
}