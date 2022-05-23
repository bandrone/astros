document.getElementById('nav-button').addEventListener('click', function () {
    let navContent = document.getElementById('nav-content');
    if (navContent.classList.contains("hidden")) {
        navContent.classList.remove("hidden");
    }
    else {
        navContent.classList.add("hidden");
    }
});

document.getElementById('footer-year').innerHTML = new Date().getFullYear();