window.onload = function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    document.addEventListener('scroll', function (e) {
        window.scrollY;
        let header = document.querySelector("body > header")
        if (window.scrollY > window.innerHeight) {
            header.classList.add('fixed-header')
            console.log(window.scrollY > window.innerHeight)
        }
        else {
            header.classList.remove('fixed-header')
        }
    })
}