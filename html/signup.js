
function checkUserInfo() {
    // Check name
    var userName = document.getElementById("name").value;

    if (!userName) {
        alert("Error: Enter a name");
        return;
    }

    // Check email address
    // Email validation referenced from https://www.geeksforgeeks.org/javascript-program-to-validate-an-email-address/
    var userEmail = document.getElementById("email").value;

    if (!valid(userEmail)) {
        alert("Error: Enter a valid email address");
        return;
    }


    // Check password
    var userPword = document.getElementById("pword").value;

    if (!userPword) {
        alert("Error: Enter a password");
        return;
    }

    // Check age
    let ageReq = 13 * 365.25 * 24 * 60 * 60 * 1000; // 13 years in milliseconds

    var userBday = document.getElementById("bday").value;

    let userBdayDate = new Date(userBday);
    let today = new Date();

    let userAge = today.getTime() - userBdayDate.getTime(); // Calculate age in ms

    if (!userAge) {
        alert("Error: Enter a birthday")
        return
    }
    else if (userAge < ageReq) {
        alert("Error: You are too young to sign up for an account!");
        return;
    } 
    else {
        alert("You have successfully signed up!");
    }
}


function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}