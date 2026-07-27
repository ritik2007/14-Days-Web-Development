const form = document.getElementById("contactForm");

const success = document.getElementById("success");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let phone = document.getElementById("phone").value.trim();

let subject = document.getElementById("subject").value.trim();

let message = document.getElementById("message").value.trim();

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern =
/^[6-9]\d{9}$/;

if(name.length < 3){

alert("Name should contain at least 3 characters.");

return;

}

if(!emailPattern.test(email)){

alert("Enter a valid Email Address.");

return;

}

if(!phonePattern.test(phone)){

alert("Enter a valid 10-digit Mobile Number.");

return;

}

if(subject.length < 5){

alert("Subject must contain at least 5 characters.");

return;

}

if(message.length < 20){

alert("Message should contain at least 20 characters.");

return;

}

success.style.color="green";

success.innerHTML="✔ Message sent successfully!";

form.reset();

});