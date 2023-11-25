const navbarNav = document.querySelector('.navbar-nav')
const hamburger = document.querySelector("#hamburger-menu");

// toggle hamburger menu
hamburger.addEventListener("click", function (e) {
    navbarNav.classList.toggle("active");
    e.preventDefault()
});

// toggle search form
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')
const searchButton = document.querySelector('#search-button')

searchButton.onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault()
}

// toggle shipping cart
const shoppingCart = document.querySelector('.shopping-cart')
const shoppingCartButton = document.querySelector('#shopping-cart')

document.querySelector('#shopping-cart').onclick = (e) => {
    shoppingCart.classList.toggle('active')
    e.preventDefault();
}

// Modal box
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButtons = document.querySelectorAll('.item-detail-button')

itemDetailButtons.forEach(function (el) {
    el.addEventListener('click', function (e) {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    });
});

// Klik Tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// klik diluar element
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
    if (!shoppingCart.contains(e.target) && (!shoppingCartButton.contains(e.target))) {
        shoppingCart.classList.remove('active')
    }
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none'
    }
})