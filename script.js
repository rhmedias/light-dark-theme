const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//SWITCH TO LIGHT/DARK MODE BASED ON TIME OF DAY
function switchMode() {
    const date = new Date();
    const currentTime = date.getHours();

    if (currentTime < 12) {
        document.documentElement.setAttribute("data-theme", "light");

        lightMode();
    } else if (currentTime < 18) {
        document.documentElement.setAttribute("data-theme", "light");

        lightMode();
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        toggleSwitch.checked = true;
        darkMode();
    }
}

//DARK OR LIGHT INAGES
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//DARK MODE STYLES
function darkMode() {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.backgroundColor = "rgb(255 255 255 /50%)";
    // Targeting the children of the toggleicons, use console log
    //to find the children and target them
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

    //target the image
    imageMode("dark");
}

function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 /50%)";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    // Targeting the children of the toggleicons, use console log
    //to find the children and target them
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

    //target the image
    imageMode("light");
}

//Switch theme fnx
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightMode();
    }
}

// EVENT LISTERNER
toggleSwitch.addEventListener("change", switchTheme);
switchMode();

//check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        darkMode();
    }
}
