let button = document.getElementById("button");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");
let formBox = document.querySelectorAll(".formBox");
let form = document.getElementById("form");
let textError = document.getElementById("textError");
let formBoxId = document.getElementById("formBoxId");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (password.value === confirmPassword.value) {
    //alert("Your sign up is succesful");
    let newBox = document.createElement("div");
    console.log(newBox);
    newBox.innerHTML = "<p>Your sign up is succesful</p>";
    form.style.display = "none";
    formBoxId.appendChild(newBox);
  } else {
    textError.innerHTML += "Password and confirm password don't match!";
    console.log("Yeeees");
  }
});


