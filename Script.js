"use strict";
usernameInput();

// Assigns constant username and checks if username is invalid
function usernameInput() {
    let username = prompt("Enter username:")
    if (!username) {
        alert("User name cannot be empty!")
        usernameInput();
    }
    else {
        if (confirm("Are you sure you want this as your username? \n ***IT CANNOT BE CHANGED***")) {
            alert(`Welcome ${username}`);
        }
        else {
            alert("Please select another username");
            usernameInput();
        }
    }
}
    