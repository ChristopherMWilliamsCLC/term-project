'use strict';

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Use emailjs to send the email
    emailjs.send("service_0je9ued", "template_yfi6n8d", {
        name: name,
        email: email,
        message: message
    })
    .then((response) => { // Success callback
        alert("Email sent! Status: " + response.status);
    })
    .catch((error) => { // Error callback
        alert("Email failed: " + JSON.stringify(error));
    });
}