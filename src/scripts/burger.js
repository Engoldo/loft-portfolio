let burgerBtn = document.getElementById("burger-btn");
let burger = document.getElementById("burger");
let burgerNavChild = document.querySelectorAll(".nav__list")
let close = document.getElementById("close");

const toggleBurger = () => {
    burger.classList.toggle('mobile-menu_visible')
}

burgerBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleBurger();
});

close.addEventListener('click', e => {
    e.stopPropagation();
    toggleBurger();
});

document.querySelector(".mobile-menu__nav").addEventListener('click', e => {
    var target = e.target;
    while (target != document.querySelector(".nav__list")) {
        if (target.className == 'nav__link') {
            toggleBurger();
            return;
        }
        target = target.parentNode;
    }
});

document.addEventListener('click', e => {
    let target = e.target;
    let eburger = target == burger || burger.contains(target);
    let eburgerBtn = target == burgerBtn;
    let checked = burger.classList.contains('mobile-menu_visible');
    // let eburgerNavChild = target == burgerNavChild;
    if (!eburger && !eburgerBtn && checked) {
        toggleBurger();
    }
});