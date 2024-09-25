var users = JSON.parse(localStorage.getItem("users")) || [];
var userName = document.querySelector("#userName");
var sessionUsersIndex = JSON.parse(localStorage.getItem("sessionUsersIndex"));
var userLogin = users[sessionUsersIndex];
userName.innerHTML = `Welcome ${
  userLogin.name.charAt(0).toUpperCase() + userLogin.name.slice(1)
}`;
var btnLogout = document.querySelector("button.logout");
btnLogout.addEventListener("click", function () {
  localStorage.removeItem("sessionUsersIndex");
  window.location = "./index.html";
});
