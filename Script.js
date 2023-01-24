"use strict";
usernameInput();


function usernameInput() {
    let username = prompt("Enter username:")
    if (!username) {
        alert("Username cannot be null!")
        usernameInput();
    }
    else {
        const USERNAME = username;
        alert(`Welcome ${USERNAME}`)
    }
}
function main() {

}
    