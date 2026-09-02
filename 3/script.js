function check() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value;
    let role = document.getElementById("role").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number");
        return false;
    }

    if (role == "") {
        alert("Please select a job role");
        return false;
    }

    alert("Registration Successful!");
    return true;
}