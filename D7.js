// Change Hero Text

const changeBtn = document.getElementById("changeTextBtn");

changeBtn.addEventListener("click", function () {

document.getElementById("heading").innerHTML =
"Thank You for Visiting!";

document.getElementById("aboutText").innerHTML =
"I love building modern websites using HTML, CSS and JavaScript.";

});



// Contact Button

document.getElementById("contactBtn").addEventListener("click", function(){

alert("Thank you for contacting Ritik Malik!");

});



// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️ Light Mode";

}

else{

themeBtn.innerHTML="🌙 Dark Mode";

}

});



// Scroll To Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>250){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});



// Card Hover Animation

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="scale(1.08)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="scale(1)";

});

});