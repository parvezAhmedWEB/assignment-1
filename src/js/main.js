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
    navContainer.appendChild(navItem);
  }
}
createNavItem(navItems);
/* ===================== CREATE NAV ITEM END ===================== */
/* ===================== CREATE FEATURE CARD ===================== */
const cardsData = {
  card1: {
    title: "Baga Comfort",
    price: "455",
    rating: "4.5",
    location: "New York",
    img: "https://i.ibb.co/GWsb8FX/1.jpg",
  },
  card2: {
    title: "New Apollo Hotel",
    price: "585",
    rating: "4.8",
    location: "California",
    img: "https://i.ibb.co/Fm4J6gt/2.jpg",
  },
  card3: {
    title: "New Age Hotel",
    price: "385",
    rating: "4.6",
    location: "Los Angeles",
    img: "https://i.ibb.co/hXW7C7b/3.jpg",
  },
  card4: {
    title: "Helios Beach Resort",
    price: "665",
    rating: "4.8",
    location: "Chicago",
    img: "https://i.ibb.co/kgqNnn0/4.jpg",
  },
};
const featureCards = document.querySelector(".feature__cards");
function createFeatureCard(cardData) {
  for (const cardKey in cardData) {
    const cardItem = cardData[cardKey];
    const createDiv = document.createElement("div");
    createDiv.className = "col-lg-4 col-md-6 col-12";
    createDiv.innerHTML = `
    <div class="card">
                <div class="card-img">
                  <img
                    src="${cardItem.img}"
                    class="card-img-top"
                    alt="..."
                  />
                  <span><i class="ri-map-pin-line"></i> ${cardItem.location}</span>
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">${cardItem.title}</h5>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="fw-bold card-price">
                      $${cardItem.price}<small class="fw-normal"> / starting at</small>
                    </h6>
                    <h5 class="fw-bold">
                      ${cardItem.rating} <i class="ri-star-fill text-warning"></i>
                    </h5>
                  </div>
                </div>
              </div>
    `;
    featureCards.appendChild(createDiv);
  }
}
createFeatureCard(cardsData);
/* ===================== CREATE FEATURE CARD ===================== */
/* ===================== CREATE BRAND CARD ===================== */
const brandImg = [
  "/src/assets/brand/1.svg",
  "/src/assets/brand/2.svg",
  "/src/assets/brand/3.svg",
  "/src/assets/brand/4.svg",
  "/src/assets/brand/5.svg",
  "/src/assets/brand/6.svg",
];
const brandContent = document.querySelector(".brand__content");
function createBrand(brandImg) {
  for (const brand of brandImg) {
    console.log(brand);
    const createDiv = document.createElement("div");
    createDiv.className = "col-lg-2 col-md-4 col-6";
    createDiv.innerHTML = `
    <img class='brand-img' width="142" src="${brand}" alt="" />
    `;
    brandContent.appendChild(createDiv);
  }
}
createBrand(brandImg);
/* ===================== CREATE BRAND CARD ===================== */
