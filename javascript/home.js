
const openMe = document.querySelector(".button1");
const closeMe = document.querySelector(".closeform");
const dContainer = document.querySelector(".mywork");
const a = document.getElementById("myinput");
const b = document.getElementById("eyeopen");
const c = document.getElementById("eyeclose");

const myToggleFunction = ()=>{
    if(a.type==="password"){
        a.type="text";
        b.style.display = "block";
        c.style.display = "none";
    }else{
        a.type="password"
        b.style.display = "none";
        c.style.display = "block";
    }
}
    openMe.addEventListener("click", ()=>{
        dContainer.classList.toggle("show");
    })
    closeMe.addEventListener("click", ()=>{
        dContainer.classList.remove("show");
    })
    
/*openMe.onclick = function (){
    if (dContainer.classList.add("show")) {
        dContainer.classList.remove("show");
    }
    else {
        dContainer.classList.add("show");
    }
}
/*closeMe.addEventListener("click", ()=>{
    dContainer.classList.remove("show");
})
/*openMe.addEventListener("click", () =>{
    dContainer.classList.remove("show");
})

const myToggleFunction = ()=>{
    if(a.type==="password"){
        a.type="text";
        b.style.display = "block";
        c.style.display = "none";
    }else{
        a.type="password"
        b.style.display = "none";
        c.style.display = "block";
    }
}


function myFunction() {
    var element = document.getElementById("mywork");
    element.classList.toggle(".show");
 }
 openMe.addEventListener("click", myFunction)*/


