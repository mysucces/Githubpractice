const colors = ["blue", "yellow", "green", "navy", "red"];
const mybtn = document.getElementById("mybtn");
const colour = document.querySelector(".colour");
mybtn.addEventListener("click", ()=>{ 
    const rx = getNum()
    document.body.style.backgroundColor = colors[rx];
    colour.textContent = colors[rx]
})
const getNum = ()=>Math.floor(Math.random()*colors.length)
