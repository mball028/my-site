window.onscroll = () => {
    navStick();
}

const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

const navStick = () => {
    (window.pageYOffset >= sticky) 
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky")
}