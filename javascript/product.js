var potion=0, correct=0, myExam, progress, MyProgress, question, choices, choice, choiceA, choiceB, choiceC;
function myExecuter (x){
    return document.getElementById(x)
}
const calculatorbutton = myExecuter("calculator");
const realcalculator = myExecuter("realcalculator"); 

var questions = [
    ["What is your name?", "Buhari", "Adanma", "RukkyB", "C"],
    ["How many are we in JS class?", "7", "10", "5", "A"],
    ["Plural of Baby is", "Babe", "Bambini", "Babies", "C"],
    
]
console.log(questions)
const renderexam =()=>{
    myExam = myExecuter("exam");
   if(potion>=questions.length){
        myScores()
        potion = 0;
        correct = 0;

        return false;
    
    }
progress = myExecuter("questionprogress");
progress.innerHTML = "Question" +(potion + 1)+ "of" +questions.length;

question = questions[potion][0];
choiceA =  questions[potion][1];
choiceB =  questions[potion][2];
choiceC =  questions[potion][3];
myExam.innerHTML =`<h3>${question}</h3>`;
myExam.innerHTML +=`A.<input type='radio' name='choices' value='A'> ${choiceA} <br>`;
myExam.innerHTML +=`B.<input type='radio' name='choices' value='B'> ${choiceB} <br>`;
myExam.innerHTML +=`C.<input type='radio' name='choices' value='C'> ${choiceC} <br><br>`;
myExam.innerHTML +="<button id='mybutton' onclick = 'checkAnswer()'> Submit Answer </button>";
}

const checkAnswer = ()=>{
    choices = document.getElementsByName("choices");
    for(let i=0; i<choices.length;i++){
        if (choices[i].checked){
            choice= choices[i].value;
        }
    }
    if (choice === questions[potion][4]){
        correct++;
    }
    potion++;
    MyProgress = myExecuter("progressfull");
    MyProgress.style.width = `${((potion)/questions.length)* 100}%`
    renderexam()
}
const myScores = ()=>{
    exam.innerHTML = `<h2>You got ${correct} of ${questions.length}</h2>`;
    progress.innerHTML="<h2>WellDone, Examination Completed</h2>";
    progress.innerHTML +="<div><a href ='product.html'>Take Exam AGAIN!</a></div>"
}
var time = 2;
var cbtTime = time*60;
/*let timeinMinutes = time*60*60;*/
/*cbtTime = timeinMinutes/60*;*/

myTime = myExecuter("timer");
const startTimer = () => {
    setInterval(timeController,1000);
}
var timeController = () =>{
    if(cbtTime<=0){
        clearInterval(cbtTime);
        myScores();
    }else{
        cbtTime--;
        var sec = Math.floor(cbtTime % 60);
        var min = Math.floor((cbtTime/60) % 60);
        var hour = Math.floor((cbtTime/(60*60)) % 60);
        myTime.innerHTML = `${sec}:${min}:${hour}`
    }
}
startTimer()    

calculatorbutton.addEventListener("click", ()=>{
    realcalculator.classList.toggle("show");
})
window.addEventListener("load", renderexam);