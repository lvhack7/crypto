document.addEventListener("DOMContentLoaded", function() {
    var allImages = document.querySelectorAll("img");

    allImages.forEach(function(image) {
      image.loading = "lazy";
    });
});

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

document.getElementById("plus-1").addEventListener('click', function() {
    const icon = document.getElementById("plus-1")
    const content = document.getElementById("content-1")

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden")
        icon.src = "./imgs/close.svg"
    } else {
        content.classList.add("hidden")
        icon.src = "./imgs/plus.svg"
    }
})

document.getElementById("plus-2").addEventListener('click', function() {
    const icon = document.getElementById("plus-2")
    const content = document.getElementById("content-2")

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden")
        icon.src = "./imgs/close.svg"
    } else {
        content.classList.add("hidden")
        icon.src = "./imgs/plus.svg"
    }
})

document.getElementById("plus-3").addEventListener('click', function() {
    const icon = document.getElementById("plus-3")
    const content = document.getElementById("content-3")

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden")
        icon.src = "./imgs/close.svg"
    } else {
        content.classList.add("hidden")
        icon.src = "./imgs/plus.svg"
    }
})

document.getElementById("plus-4").addEventListener('click', function() {
    const icon = document.getElementById("plus-4")
    const content = document.getElementById("content-4")

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden")
        icon.src = "./imgs/close.svg"
    } else {
        content.classList.add("hidden")
        icon.src = "./imgs/plus.svg"
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