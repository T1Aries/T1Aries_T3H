let username = document.getElementById("username");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !phone.value || !password.value) {
    alert("vui long nhap day du thong tin");
  } else {
    localStorage.setItem(username.value, json);
    alert("dang ky thanh cong");
  }
});
