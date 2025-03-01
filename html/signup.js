
function checkUserInfo() {
    // Check name
    var userName = document.getElementById("name").value;

    if (!userName) {
        displayinvalid("Error: Enter a name");
        return;
    }

    // Check email address
    // Email validation referenced from https://www.geeksforgeeks.org/javascript-program-to-validate-an-email-address/
    var userEmail = document.getElementById("email").value;

    if (!checkvalid(userEmail)) {
        displayinvalid("Error: Enter a valid email address");
        return;
    }


    // Check password
    var userPword = document.getElementById("pword").value;

    if (!userPword) {
        displayinvalid("Error: Enter a password");
        return;
    }

    // Check age
    let ageReq = 13 * 365.25 * 24 * 60 * 60 * 1000; // 13 years in milliseconds

    var userBday = document.getElementById("bday").value;

    let userBdayDate = new Date(userBday);
    let today = new Date();

    let userAge = today.getTime() - userBdayDate.getTime(); // Calculate age in ms

    if (!userAge) {
        displayinvalid("Error: Enter a birthday");
        return
    }
    else if (userAge < ageReq) {
        displayinvalid("Error: You are too young to sign up for an account!");
        return;
    } 
    else {
        displaysuccess("You have successfully signed up!");
    }
}

function checkvalid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function displayinvalid(message) {
    try {   // remove any potentially leftover warning or success banners
        removeElementsByClass("warning");
        removeElementsByClass("success");
    }
    finally {
    let outputError = document.createElement("div");
    outputError.classList.add("warning");

    outputError.innerText=message

    document.body.prepend(outputError);
    }
}

function displaysuccess(message) {
    try {   // remove any potentially leftover warning or success banners
        removeElementsByClass("warning");
        removeElementsByClass("success");
    }
    finally {
    let outputError = document.createElement("div");
    outputError.classList.add("success");

    outputError.innerText=message

    document.body.prepend(outputError);
    }
}

// Function taken from https://stackoverflow.com/a/14066534
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}