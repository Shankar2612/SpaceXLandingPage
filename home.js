const menu = document.getElementById("menu");
const blackScreen = document.getElementById("black-screen");
const menuDiv = document.getElementById("menu-div");
const close = document.getElementById("close");
const menuItems = document.getElementsByClassName("menu-items");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
    blackScreen.style.display = "block";
    blackScreen.style.opacity = "0.5";
    menuDiv.style.right = "0%";
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].classList.contains("hide")) {
            menuItems[i].className = "menu-items hide animated";
        } else {
            menuItems[i].className = "menu-items animated";
        }

    }
});

close.addEventListener("click", () => {
    blackScreen.style.display = "none";
    blackScreen.style.opacity = "0";
    menuDiv.style.right = "-100%";
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].classList.contains("hide")) {
            menuItems[i].className = "menu-items hide";
        } else {
            menuItems[i].className = "menu-items";
        }
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        navbar.style.visibility = "hidden";
    } else {
        navbar.style.visibility = "visible";
    }
})