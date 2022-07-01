const myHexaDecimalColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const x = document.getElementById("mybtn");
const y = document.querySelector(".colour");

const colorChanger = ()=>{
    let myhexa = "#";
    let b = getRandomNum();
    for(let i = 0; i<6; i++){
        /*myhexa  = myhexa + myHexaDecimalColors[getRandomNum()];*/
        myhexa+=myHexaDecimalColors[getRandomNum()]
        /*myhexa+=myHexaDecimalColors[11]*/
        /*myhexa+=myHexaDecimalColors[b]*/
    }
    document.body.style.backgroundColor = myhexa;
    y.textContent = myhexa;
}
x.addEventListener("click",colorChanger)
const getRandomNum = ()=>Math.floor(Math.random()*myHexaDecimalColors.length)