// SHOW/HIDE PASSWORD
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

// GETTING VALUE OF INPUT BROWSER
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
function sub() {
  let text = document.getElementById("text").value;
  document.write("Name: " + text);
  let email = document.getElementById("email").value;
  document.write("Email: " + email);
  let password = document.getElementById("password").value;
  document.write("Password: " + password);
}
let signIn = document.getElementById("signIn");
function sign_In() {
  alert("COMING SOON...");
}

// SHOW/HIDE TEXT
function showHideText() {
  let readMoreText = document.getElementById("readMoreText");
  let hideshowbtn = document.getElementById("hide-show-btn");
  if (readMoreText.style.display != "block") {
    readMoreText.style.display = "block";
    hideshowbtn.innerHTML = "Read Less";
  } else {
    readMoreText.style.display = "none";
    hideshowbtn.innerHTML = "Read More";
  }
}
