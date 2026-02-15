// ==========================
// 1. Button Click Message
// ==========================
function showMessage() {
    alert("Button clicked successfully!");
}


// ==========================
// 2. Change Text Feature
// ==========================
function changeText() {
    document.getElementById("text").innerHTML = "Text has been changed!";
}


// ==========================
// 3. Form Submit Feature
// ==========================
function submitForm() {
    var name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name");
    } else {
        alert("Hello " + name + ", form submitted!");
    }
}


// ==========================
// 4. Login System
// ==========================
function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Demo login (example)
    if(username === "admin" && password === "1234") {

        alert("Login successful!");

        document.getElementById("loginStatus").innerHTML = "Welcome, " + username;

    } else {

        alert("Wrong username or password");

        document.getElementById("loginStatus").innerHTML = "Login failed";

    }
}


// ==========================
// 5. Hover Interactive Feature
// ==========================
function changeColor() {
    document.getElementById("colorBox").style.backgroundColor = "blue";
}

function resetColor() {
    document.getElementById("colorBox").style.backgroundColor = "gray";
}


// ==========================
// 6. Page Load Message
// ==========================
window.onload = function() {
    console.log("Website loaded successfully!");
};