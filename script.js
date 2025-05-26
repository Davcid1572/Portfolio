function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  //Save preference to localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  //Change button icon
  toggleButton.textContent = isDark ? "☀️" : "🌙";
});

// Load saved preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
});

const hamToggleButton = document.getElementById("ham-dark-mode-toggle");

hamToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  //Save preference to localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  //Change button icon
  toggleButton.textContent = isDark ? "☀️" : "🌙";
});

// Load saved preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
});

// Used to update the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
