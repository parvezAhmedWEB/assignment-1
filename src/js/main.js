/* ===================== CREATE NAV ITEM START ===================== */
const navContainer = document.querySelector(".navbar-nav");
const navItems = [
  "Home",
  "Hotels",
  "Team",
  "Blog",
  "Pricing",
  "FAQs",
  "Contact",
];
function createNavItem(navItems) {
  for (const item of navItems) {
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a class="nav-link" href="#">${item}</a>`;
    navItem.classList.add("nav-item");
    console.log(navItem);
    navContainer.appendChild(navItem);
  }
}
createNavItem(navItems);
/* ===================== CREATE NAV ITEM END ===================== */
