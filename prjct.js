document.addEventListener('DOMContentLoaded', function () {
    let registrationForm = document.getElementById('registrationdetails');
    let loginForm = document.getElementById('logindetails');
    let loginButton = document.getElementById('loginAfterSubmit');

    
    let uname, email, mobile, dob, pass;


    let l2=[];

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            uname = document.getElementById('uname').value;
            email = document.getElementById('email').value;
            mobile = document.getElementById('mobile').value;
            dob = document.getElementById('dob').value;
            pass = document.getElementById('pass').value;

            let registrationDetails = [uname, email, mobile, dob, pass];
            console.log(registrationDetails);
            l2.push(registrationDetails);
            console.log(l2)
            localStorage.setItem("details", JSON.stringify(l2));

            alert("Registration successful!!! Details: " + registrationDetails);
            loginButton.style.display = 'block';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            console.log({event})
            event.preventDefault();
            let enteredUsername = document.getElementById('username').value;
            let enteredPassword = document.getElementById('password').value;
            let loginDetail = JSON.parse(localStorage.getItem("details")) || [];


            console.log(loginDetail)
            for (let item of loginDetail) {
                if (enteredUsername === item[0] && enteredPassword === item[4]) {
                    alert("Login successful!");
                     window.location.href = 'index.html';       
                } else {
                    alert("Invalid credentials. Please try again.");
                }
            }
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'login.html'; 
        });
    }
});
