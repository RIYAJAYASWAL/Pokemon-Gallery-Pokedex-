const icons = document.querySelectorAll(".icon");
const circle = document.querySelector(".circle")
const mainImg = document.getElementById("main-img");
const nameEl = document.getElementById("name");
const descEl = document.getElementById("description");
const typeEl = document.getElementById("type");

const radius = 280;
const centerX =300;
const centerY =300;
const total = icons.length;

icons.forEach((icon,index)=>{
    const angle = (index/total)*2*Math.PI;
    const x = centerX + radius *Math.cos(angle)-25;//25= half of the icon width
    const y = centerY + radius *Math.sin(angle)-25;
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px` ;

});

let currentRotation = 0;

icons.forEach((icon,index)=>{
    icon.addEventListener("click",() => {
        mainImg.src = icon.dataset.img;
        nameEl.textContent = icon.dataset.name;
        descEl.textContent = icon.dataset.description;
        typeEl.textContent = icon.dataset.type;


        //rotate circle so clicked icon moves to the top 
        const anglePerIcon = 360/total;
        const rotationAngle = -index*anglePerIcon;

        currentRotation = rotationAngle;
        circle.style.transform =`rotate(${currentRotation}deg)`;

        //counter-rotate icons to stay upright
        icons.forEach((icn,idx) => {
            icn.style.transform =`rotate(${-currentRotation}deg)`;

        });
    });
});


    
