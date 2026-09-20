const navImg = document.getElementById("navImgButton");
const pB = document.querySelector(".pB");

navImg.addEventListener('click', ()=>{
    console.log("click");
    pB.classList.toggle('open');
})