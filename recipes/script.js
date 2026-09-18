const navImg = document.querySelector("#navImg");

navImg.addEventListener('click', function() {
    console.log("heee");
})

// biryani
const button = document.querySelectorAll("button");
const iList = document.querySelector(".i-list");
const sStep = document.querySelector(".s-steps");

button.forEach((butt) => {
    butt.addEventListener('click', ()=>{
        if (butt.id=="iB") {
            if(iList.style.display === ""){
                iList.style.display = "block";
            }
            else if(iList.style.display == "block"){
                iList.style.display = "";
            }
        }
        else if (butt.id == "sB"){
            if(sStep.style.display == ""){
                sStep.style.display = "block";
            }
            else if(sStep.style.display == "block"){
                sStep.style.display = "";
            }
        }
    })
})