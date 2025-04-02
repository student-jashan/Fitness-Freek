function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
    document.querySelector(".content").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    // Show initial image screen
    const initialScreen = document.getElementById("initial-screen");
    const sections = document.querySelectorAll("section");

    function showSection(sectionId) {
        // Hide initial image
        initialScreen.style.display = "none";

        // Hide all sections
        sections.forEach(sec => sec.style.display = "none");

        // Show the selected section
        document.getElementById(sectionId).style.display = "block";
    }

    // Attach event listeners to sidebar menu items
    document.querySelectorAll(".sidebar ul li").forEach(item => {
        item.addEventListener("click", function () {
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const initialScreen = document.getElementById("initial-screen");
    const sections = document.querySelectorAll("section");

    function showSection(sectionId) {
        // Hide the initial screen
        if (initialScreen) initialScreen.style.display = "none";

        // Hide all sections
        sections.forEach(sec => sec.style.display = "none");

        // Show the selected section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) activeSection.style.display = "block";
    }

    // Attach event listener to "Manage Users" button in the sidebar
    document.querySelector("[onclick=\"showSection('user-management')\"]").addEventListener("click", function () {
        showSection("user-management");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const initialScreen = document.getElementById("initial-screen");
    const sections = document.querySelectorAll("section");

    function showSection(sectionId) {
        // Hide the initial screen
        if (initialScreen) initialScreen.style.display = "none";

        // Hide all sections
        sections.forEach(sec => sec.style.display = "none");

        // Show the selected section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) activeSection.style.display = "block";
    }

    // Attach event listener to "Manage Workouts" button in the sidebar
    document.querySelector("[onclick=\"showSection('workout-management')\"]").addEventListener("click", function () {
        showSection("workout-management");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const initialScreen = document.getElementById("initial-screen");
    const sections = document.querySelectorAll("section");

    window.showSection = function (sectionId) {
        if (initialScreen) initialScreen.style.display = "none";

        sections.forEach(sec => sec.style.display = "none");

        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = "block";
        } else {
            console.error(`Section with ID "${sectionId}" not found.`);
        }
    };
});

// Function to toggle the visibility of the Blog Management section
function toggleBlogManagement() {
    const blogManagementSection = document.getElementById("blog-management");

    // Toggle visibility: if it's hidden, show it; if it's visible, hide it
    if (blogManagementSection.style.display === "none" || blogManagementSection.style.display === "") {
        blogManagementSection.style.display = "block";
    } else {
        blogManagementSection.style.display = "none";
    }
}

// Function to delete a blog card when the "Delete" button is clicked
function deleteCard(button) {
    // Get the parent of the button (which is the card), and remove it
    const card = button.closest(".card");
    card.remove();
}



  

