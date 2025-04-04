function createStar() {
    let star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    let startX = Math.random() * window.innerWidth;
    let startY = Math.random() * window.innerHeight * 0.8; 
    let duration = Math.random() * 2 +1;

    star.style.left = startX + "px";
    star.style.top = startY + "px";
    star.style.animationDuration = duration + "s";

}
for (let i = 0; i < 5; i++) { 
    createStaticCloud();
}
for(let i=0; i<4; i++){
    createLigthning();
}
setInterval(createStar, 100);


function createStaticCloud() {
    let cloud = document.createElement("div");
    cloud.classList.add("cloud");
    document.body.appendChild(cloud);

    let posX = Math.random() * window.innerWidth-100;
    let posY = Math.random() * window.innerHeight-100;

    cloud.style.left = posX + "px";
    cloud.style.top = posY + "px";
}
function createLigthning() {
    let light = document.createElement("div");
    light.classList.add("lightning");
    document.body.appendChild(light);

    let posX = Math.random() * window.innerWidth-200;
    let posY = Math.random() * window.innerHeight-100;

    light.style.left = posX + "px";
    light.style.top = posY + "px";
}

const stayBtn = document.getElementById("stay");

stayBtn.addEventListener("click", function(){
    document.querySelector(".scene1").style.display = "block";
    document.querySelector(".run-away").style.display ="none";
    document.querySelector(".buttons").style.display="none";
    typeWriter();
    
});

let txt ="The wind howls as rain pours down.. You see a neon sign flickering to the left and a dark cave to the right. What do you do?";
let i=0;
 function typeWriter(){
   
    if(i<txt.length){
        document.getElementById('storyText').innerHTML +=txt.charAt(i);
        i++;
        setTimeout(typeWriter,80);
    }else{
        const choice=document.querySelectorAll(".choice");
        for(let i=0; i<choice.length; i++){
            choice[i].style.display ="block";
            choice[i].classList.add('visible');
        }
    }
   }