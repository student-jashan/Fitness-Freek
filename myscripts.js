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

  