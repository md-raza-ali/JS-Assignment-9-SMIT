let eyeicon = document.getElementById("eyeIcon");
let pass = document.getElementById("password");
function showHide() {
  if (pass.type == "password") {
    pass.type = "text";
    eyeIcon.src = "eyeOpen.png";
  } else {
    pass.type = "password";
    eyeIcon.src = "eyeClose.png";
  }
}
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
function sub() {
  let text = document.getElementById("text").value;
  document.write(text.value);
}
