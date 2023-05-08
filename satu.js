
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

// Ambil elemen input password
var passwordInput = document.getElementById('passwordd');

// Tambahkan event listener untuk menangkap input dari pengguna
passwordInput.addEventListener('input', function() {
  // Ambil nilai password yang dimasukkan pengguna
  var passwordValue = passwordInput.value;
  
  // Periksa apakah panjang password lebih dari 8 karakter
  if (passwordValue.length < 8) {
    // Jika kurang dari 8 karakter, tampilkan pesan error
    passwordInput.setCustomValidity('Password harus memiliki setidaknya 8 karakter');
  } else {
    // Jika sudah mencapai 8 karakter atau lebih, hapus pesan error
    passwordInput.setCustomValidity('');
  }
});

