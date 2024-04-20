/*JavaScript Code for Sidebar toggling functionality*/

const menuToggle = document.getElementById("mobileMenuButton");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar on button click
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
