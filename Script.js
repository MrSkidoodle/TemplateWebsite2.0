"use strict";
usernameInput();


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
    