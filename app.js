const a = document.getElementById("myinput")
const b = document.getElementById("eyeopen")
const c = document.getElementById("eyeclose")

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