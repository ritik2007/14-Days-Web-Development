// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(2,6,23,0.95)";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(15,23,42,.85)";
        header.style.boxShadow = "none";
    }
});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".hero-content,.hero-image,.about,.skill-card,.edu-card,.project-card,.contact"
);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(item=>{

        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// Typing Animation
// ===============================

const profession = [
    "Frontend Developer",
    "AI & ML Student",
    "Web Designer",
    "Python Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typingElement = document.querySelector(".hero-content h2");

function type(){

    if(!typingElement) return;

    if(count === profession.length){

        count = 0;

    }

    currentText = profession[count];

    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }
    else{

        setTimeout(type,120);

    }

}

type();

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Hero Image Hover Animation
// ===============================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mouseover",()=>{

heroImage.style.transform = "scale(1.05) rotate(2deg)";
heroImage.style.transition = ".4s";

});

heroImage.addEventListener("mouseout",()=>{

heroImage.style.transform = "scale(1) rotate(0deg)";

});

}