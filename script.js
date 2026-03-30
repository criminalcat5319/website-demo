function loginValidation() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("All fields required!");
    return false;
  }

  alert("Login Successful!");
  window.location.href = "home.html";
  return false;
}

function bookingValidation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email2").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  if (name === "" || email === "" || !gender) {
    alert("Please fill all fields!");
    return false;
  }

  alert("Booking Successful!");
  return true;
}