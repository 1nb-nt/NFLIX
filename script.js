
document.getElementById("signInBtn").onclick = () => {
  document.getElementById("signinmodel").style.display = "block";
};

document.getElementById("paymentBtn").onclick = () => {
  document.getElementById("paymentmodel").style.display = "block";
};

function closemodel(id) {
  document.getElementById(id).style.display = "none";
}


function submitSignIn() {
  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value.trim();

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("Signed in successfully!");
  closemodel("signinmodel");
}


function submitPayment() {
  const upiId = document.getElementById("upiInput").value.trim();

  if (!/^[\w.-]+@[\w.-]+$/.test(upiId)) {
    alert("Invalid UPI ID. It should be like 'name@bank'.");
    return;
  }

  alert("Payment successful via UPI! Membership activated.");
  closemodel("paymentmodel");
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


function handleGoogleSignIn(response) {
  const decodedCredential = jwtDecode(response.credential);
  alert(`Welcome, ${decodedCredential.name || "User"}! Signed in with Google.`);
  closemodel("signinmodel");
}

function jwtDecode(token) {
  const base64Url = token.split('.')[1];
  const base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(base64);
}
