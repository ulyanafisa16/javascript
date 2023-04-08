let body = document.body;
function darkMode() {
    console.log('dark mode di klik')
    body.classList.toggle("dark");
}

let signupBtn = document.getElementById("signupBtn");  
let signinBtn = document.getElementById("signinBtn");
let name = document.getElementById("nameField");
let title = document.getElementById("title");


signinBtn.onclick = function() {
nameField.style.maxHeight ="0";
title.innerHTML ="Sign In";
signupBtn.classList.add("disable");
signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
nameField.style.maxHeight ="60px";
title.innerHTML ="Sign Up";
signupBtn.classList.remove("disable");
signinBtn.classList.add("disable");
}