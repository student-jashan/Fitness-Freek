var navLinks= document.getElementById("navLinks");
function showMenu()
{
navLinks.style.right="0";

}
function hideMenu()
{
navLinks.style.right="-200px";
    
}
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links ul li a");
  
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(".nav-links ul li a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  });

  // Open the popup and display the details of the clicked card
function openForm(title, description) {
  // Set the title and description inside the popup
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-description").innerText = description;
  
  // Show the popup
  document.getElementById("popupForm").style.display = "flex";
}

// Close the popup
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

  



// Login Function with User & Admin Handling
function login() {
  let role = document.getElementById("loginRole").value;
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
      alert("Please enter Email and Password!");
      return;
  }

  if (role === "admin" && email === "admin@example.com" && password === "admin123") {
      alert("Admin Login Successful!");
      window.location.href = "admin-dashboard.html"; // Redirect to Admin Page
  } else if (role === "user") {
      alert("User Login Successful!");
      window.location.href = "user-dashboard.html"; // Redirect to User Page
  } else {
      alert("Invalid Credentials!");
  }
}

// Signup Function
function signup() {
  let name = document.getElementById("signupName").value;
  let age = document.getElementById("signupAge").value;
  let gender = document.getElementById("signupGender").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (name === "" || age === "" || gender === "" || email === "" || password === "") {
      alert("Please fill all the fields!");
      return;
  }

  alert("Signup Successful!");
  showLogin();
}
// Function to show the login popup
function showLoginForm() {
  document.getElementById("loginPopup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}

// Function to open popup from button
function openPopup() {
  document.getElementById("loginPopup").style.display = "flex";
}
// Show Login Form
function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
}

// Show Sign-Up Form
function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

// Handle Sign-Up
function signup() {
  let name = document.getElementById("signupName").value;
  let age = document.getElementById("signupAge").value;
  let gender = document.getElementById("signupGender").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (name === "" || age === "" || gender === "" || email === "" || password === "") {
      alert("Please fill all fields.");
      return;
  }

  alert("Sign-up successful! Now you can log in.");
  showLogin(); // Switch to login form after sign-up
}
