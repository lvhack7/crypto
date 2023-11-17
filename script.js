document.getElementById("about-mobile").addEventListener('click', function() {
    toggleMenu()
    const targetSection = document.getElementById("about");

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
})

document.getElementById("service-mobile").addEventListener('click', function() {
    toggleMenu()
    const targetSection = document.getElementById("service");

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
})

document.getElementById("nft-mobile").addEventListener('click', function() {
    toggleMenu()
    const targetSection = document.getElementById("nft");

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
})

document.getElementById("project-mobile").addEventListener('click', function() {
    toggleMenu()
    const targetSection = document.getElementById("projects");

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
})

document.getElementById("contact-mobile").addEventListener('click', function() {
    toggleMenu()
    const targetSection = document.getElementById("contact");

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
        body.classList.add("overflow-hidden")
    } else {
        mobileMenu.classList.add("hidden")
        body.classList.remove("overflow-hidden")
    }
}