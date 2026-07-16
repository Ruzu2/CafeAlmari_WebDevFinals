const emailBtn = document.getElementById("emailBtn");
const social = document.getElementById("social");
const form = document.getElementById("form");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const loginPage = document.getElementById("loginPage");
const signupPage = document.getElementById("signupPage");

const signupEmailBtn = document.getElementById("signupEmailBtn");
const signupSocial = document.getElementById("signupSocial");
const signupForm = document.getElementById("signupForm");

emailBtn.onclick = function () {

    social.style.display = "none";
    form.style.display = "block";

};

signupEmailBtn.onclick = function () {

    signupSocial.style.display = "none";
    signupForm.style.display = "block";

};

showSignup.onclick = function (e) {

    e.preventDefault();

    loginPage.style.display = "none";
    signupPage.style.display = "block";

};

showLogin.onclick = function (e) {

    e.preventDefault();

    signupPage.style.display = "none";
    loginPage.style.display = "block";

};