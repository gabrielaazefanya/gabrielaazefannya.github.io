function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "gazepuree@gmail.com",
    Password: "Rehatta04",
    To: "gazepuree@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
