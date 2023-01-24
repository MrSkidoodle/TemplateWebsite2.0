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
        const USERNAME = username;
        alert(`Welcome ${USERNAME}`)
    }
}
function main() {

}
    