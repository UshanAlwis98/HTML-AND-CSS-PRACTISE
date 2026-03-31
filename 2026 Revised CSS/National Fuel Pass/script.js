"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.querySelector(".reg-btn");
  const loginButton = document.querySelector(".log-btn");

  if (registerButton) {
    registerButton.addEventListener("click", function () {
      window.location.href = "register.html"; // your register page
    });
  }

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = "login.html"; // your login page
    });
  }
});
