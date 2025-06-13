document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("idik");
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const course = document.getElementById("course").value;

  let gender = "";
  const genderRadios = document.getElementsByName("gender");
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      gender = genderRadios[i].value;
      break;
    }
  }

  const termsAccepted = document.getElementById("terms").checked ? "Yes" : "No";

  let message = "Registration Successfully!\n\n";
  message += "Full Name: " + fullName + "\n";
  message += "Email: " + email + "\n";
  message += "Password: " + password + "\n";
  message += "Phone Number: " + phone + "\n";
  message += "Gender: " + gender + "\n";
  message += "Date of Birth: " + dob + "\n";
  message += "Course/Program: " + course + "\n";
  message += "Accepted Terms: " + termsAccepted;

  alert(message);

});
