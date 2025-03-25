/* jshint esversion: 6 */
let questionsArray = [
    {que: "Which keyword is used to declare a constant variable?", opt1: "var", opt2: "let", opt3: "const", opt4: "static", ans: "const"},
    {que: "Which method is used to remove the last element from an array?", opt1: "pop()", opt2: "push()", opt3: "shift()", opt4: "splice()", ans: "pop()"},
    {que: "How do you write a comment in JavaScript?", opt1: "// This is a comment", opt2: "<!-- This is a comment -->", opt3: "' This is a comment", opt4: "# This is a comment", ans: "// This is a comment"},
    {que: "Which function is used to print something to the console?", opt1: "print()", opt2: "console.log()", opt3: "log.print()", opt4: "display()", ans: "console.log()"},
    {que: "Which operator is used for strict equality comparison?", opt1: "==", opt2: "===", opt3: "=", opt4: "!=", ans: "==="}
 ];
let questionNumber=0;

let queEle=document.getElementById("queId");
let opt1Ele=document.getElementById("opt1Id");
let op2Ele=document.getElementById("op2Id");
let opt3Ele=document.getElementById("opt3Id");
let opt4Ele=document.getElementById("opt4Id");

let isOptSelected=false;
let correct=0;
let incorrect=0;

function display(){
    let curQue=questionsArray[questionNumber];

    queEle.innerText=curQue.que;
    opt1Ele.innerText=curQue.opt1;
    opt2Ele.innerText=curQue.opt2;
    opt3Ele.innerText=curQue.opt3;
    opt4Ele.innerText=curQue.opt4;
    displayQuestions();

}
display();
function start(event){
    event.target.style.display="none";
    document.getElementById("card").style.display="";
}
function next(){
    let elemens=document.getElementsByClassName("Opt");
    for(let i=0;i<elemens.length;i++){
        elemens[i].style.backgroundColor="";
    }
    isOptSelected=false;
   
    questionNumber++;
    if(questionNumber>=questionsArray.length)

    {
        alert("Your score is "+correct);
        return;
    }
    console.log(questionNumber+1);
    display();
}
function displayQuestions(){
    
    document.getElementById("queNoId").innerText=`${questionNumber}/${questionsArray.length}`;
}
function checkAns(event,opt){
    if(isOptSelected==false){

        let selectedOption=`opt${opt}`;
        let obj=questionsArray[questionNumber];
        if(obj.ans==obj[selectedOption]){
            correct++;

            event.currentTarget.style.backgroundColor="green";
            document.getElementById("correctId").innerText=correct;

    }
    else{
        incorrect++;
    
        event.currentTarget.style.backgroundColor="red";
        document.getElemnetById("incorrectId").innerText=incorrect;


        }
        isOptSelected=true;
    }
    
}