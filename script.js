var gamma, //Vars
    v,
    c,
    t_dialation,
    t;

const display = document.querySelector("#display"); //Consts
const buttons = document.querySelectorAll("button");

const navElements = document.querySelectorAll("nav ul li");
const navLine = document.querySelector(".nav-line");

navElements.forEach(element => { //Navigation Bar
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


buttons.forEach((item) => { //Calculator
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "time_dilation") {
            display.innerText = "Input Velocity: ";


            v = display.innerText
            console.log(v);

            // if (item.id == "time_dilation" && pressed >= 1) {
            //     display.innerText = "Input Time: ";
            // }

        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});

c = 3 * 10 ^ 8;

var gamma = 1 / Math.sqrt(1 - ((v * v) / ((c * c))));

console.log(" m/s ", c + " m/s ", gamma + " gamma strålning");

t = 5;
var t_dialation = gamma * t;
console.log(t_dialation);

const themeToggleBtn = document.querySelector(".theme-toggler");

const calculator = document.querySelector(".calculator");
const container1 = document.querySelector(".container1");
const container3 = document.querySelector(".container3");

const txt1 = document.querySelector(".txt_box1");
const txt2 = document.querySelector(".txt_box2");
const about = document.querySelector(".about");
const txt_about = document.querySelector(".txt_box_about");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    container1.classList.toggle("dark");
    container3.classList.toggle("dark");

    txt1.classList.toggle("dark");
    txt2.classList.toggle("dark");
    about.classList.toggle("dark");

    txt_about.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};


// function show_page(page_id) {
//     document.querySelectorAll("#bigdiv > div").forEach(id => {
//         document.getElementById(id).style.display = "none";
//     })

//     document.getElementById(page_id).style.display = "block";
// }


// show_page("page-2")