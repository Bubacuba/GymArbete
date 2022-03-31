//--------------------- Vars ---------------------\\
var gamma,
    v,
    c,
    t_dialation,
    t,
    i = 0;

//--------------------- Consts ---------------------\\
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const navElements = document.querySelectorAll("nav ul li");
const navLine = document.querySelector(".nav-line");

//--------------------- Navigation Bar ---------------------\\
navElements.forEach(element => {
    element.addEventListener("mouseover", () => {
        positionNavLine(element.offsetLeft, element.offsetWidth);
    });
});

navElements.forEach(element => {
    element.addEventListener("mouseleave", () => {
        positionNavLine(navElements[0].offsetLeft, navElements[0].offsetWidth);
    });
});

const positionNavLine = (left, width) => {
    navLine.style.left = left + "px";
    navLine.style.width = width + "px";
};

window.addEventListener("DOMContentLoaded", () => {
    positionNavLine(navElements[0].offsetLeft, navElements[0].offsetWidth);
});

window.addEventListener("resize", () => {
    positionNavLine(navElements[0].offsetLeft, navElements[0].offsetWidth);
});

function changePageToID(pageID) {
    $(".page-container").hide(); // Hide all pages
    $(`#${pageID}`).show(); // Show only the chosen page
}

$(".nav_li").on('click', function (event) {

    event.stopPropagation();
    event.stopImmediatePropagation();

    changePageToID($(this).attr("page_name"));
});

//--------------------- Calculator ---------------------\\

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else if (item.id == "t_input") {
            if (i == 0) {
                t = document.getElementById('display').innerText;
                display.innerText = "t = " + t + " (press C to remove text)";
                console.log("t = " + t + " press C to remove text");
                i = i + 1;
                console.log("i = " + i);
            } else {
                t = document.getElementById('display').innerText;
                display.innerText = "";
                display.innerText = "";
                display.innerText = "t = " + t + " (The new value)";
                console.log("t = " + t + " (the new value)");
                console.log(i);
            }
        } else if (item.id == "time_dilation_c") {
            v = document.getElementById('display').innerText;
            if (v > 299792458) {
                display.innerText = "Explain how u can be faster than the speed of light lmao";
            } else {
                console.log(v);
                let time_dialation = calc_dilation(v, t);
                display.innerText = time_dialation;
            }
        } else {
            display.innerText += item.id;
        }
    };
});

function calc_dilation(v, t) {

    c = 299792458; // in m/s
    var gamma = 1 / Math.sqrt(1 - ((v * v) / ((c * c))));

    console.log(c + " m/s ", gamma + " gamma");

    var t_dialation = gamma * t;
    console.log("time dilation: " + t_dialation);

    return gamma * t;
}

//--------------------- Dark Mode Code ---------------------\\
const themeToggleBtn = document.querySelector(".theme-toggler");

const calculator = document.querySelector(".calculator");
const container1 = document.querySelector(".container1");
const container3 = document.querySelector(".container3");

const txt1 = document.querySelector(".txt_box1");
const txt2 = document.querySelector(".txt_box2");
const about = document.querySelector(".about");
const txt_about = document.querySelector(".txt_box_about");
const toggleIcon = document.querySelector(".toggler-icon");
const h1 = document.querySelector(".about_us");

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    container1.classList.toggle("dark");
    container3.classList.toggle("dark");

    txt1.classList.toggle("dark");
    txt2.classList.toggle("dark");
    about.classList.toggle("dark");

    txt_about.classList.toggle("dark");
    h1.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};