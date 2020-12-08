const questionbox = document.querySelector('#questioncard h3');
const A1 = document.getElementById("a1");
const B1 = document.getElementById("b1");
const C1 = document.getElementById("c1");
const D1 = document.getElementById("d1");
let elements = document.getElementsByClassName("money");
const name = document.getElementById("name");
const total = document.getElementById("total");
const gb = document.getElementById("gameboard");
const qcard = document.getElementById("questioncard");
const end = document.getElementById("endcard");
let score = 0;
let n = 1;
let money = 0;
let round = 0;


var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * (32 - 9)) + 9;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

window.addEventListener('load', () => {
  alertify.prompt('Please Enter Your Name', '', function(evt, value) { 
      const build = new Audio('../images/build.mp3');
      total.innerHTML = score;
      name.innerHTML = value;
      build.play();
      buildcategories();
  });
    
});

const categories = [{"id":0,"name":"General Knowledge"},{"id":1,"name":"General Knowledge"},{"id":2,"name":"General Knowledge"},{"id":3,"name":"General Knowledge"},{"id":4,"name":"General Knowledge"},{"id":5,"name":"General Knowledge"},{"id":6,"name":"General Knowledge"},{"id":7,"name":"General Knowledge"},{"id":8,"name":"General Knowledge"},{"id":9,"name":"General Knowledge"},{"id":10,"name":"Entertainment: Books"},{"id":11,"name":"Entertainment: Film"},{"id":12,"name":"Entertainment: Music"},{"id":13,"name":"Entertainment: Musicals & Theatres"},{"id":14,"name":"Entertainment: Television"},{"id":15,"name":"Entertainment: Video Games"},{"id":16,"name":"Entertainment: Board Games"},{"id":17,"name":"Science & Nature"},{"id":18,"name":"Science: Computers"},{"id":19,"name":"Science: Mathematics"},{"id":20,"name":"Mythology"},{"id":21,"name":"Sports"},{"id":22,"name":"Geography"},{"id":23,"name":"History"},{"id":24,"name":"Politics"},{"id":25,"name":"Art"},{"id":26,"name":"Celebrities"},{"id":27,"name":"Animals"},{"id":28,"name":"Vehicles"},{"id":29,"name":"Entertainment: Comics"},{"id":30,"name":"Science: Gadgets"},{"id":31,"name":"Entertainment: Japanese Anime & Manga"},{"id":32,"name":"Entertainment: Cartoon & Animations"}];

function buildcategories() {
const cat0 = document.getElementById("cat0");
const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");
const cat4 = document.getElementById("cat4");
cat0.innerHTML = categories[arr[0]].name;
cat1.innerHTML = categories[arr[1]].name;
cat2.innerHTML = categories[arr[2]].name;
cat3.innerHTML = categories[arr[3]].name;
cat4.innerHTML = categories[arr[4]].name;
}

console.log(elements);
var fun = function() {
    gb.classList.add("hidden");
    qcard.classList.remove("hidden");
    var attribute = this.getAttribute("data-key");
    money = parseInt(this.getAttribute("data-money"));
    console.log(attribute);
    console.log(money);
    const base2 = "https://opentdb.com/api.php?amount=1&category=";
    const url2 = base2 + `${arr[attribute]}&type=multiple`;
    console.log(arr[attribute]);
    this.innerHTML = "";
    this.removeEventListener("click", fun, true);
    fetch(url2)
    .then(res => {
    return res.json();
})

    .then(loadedQuestions => {
    console.log(loadedQuestions.results);
    loadedQuestions.results.map(loadedQuestion => {
        const q = loadedQuestion.question;
        console.log(q);
        questionbox.innerHTML = q;
        n = Math.floor(Math.random() * (4 - 0));
        const answerChoices = [...loadedQuestion.incorrect_answers];
        console.log(n);
        answerChoices.splice(n, 0, loadedQuestion.correct_answer);
    console.log(answerChoices);
    console.log(loadedQuestion.correct_answer);
    A1.innerHTML = "A:&ensp;" + answerChoices[0];  
    B1.innerHTML = "B:&ensp;" + answerChoices[1];
    C1.innerHTML = "C:&ensp;" + answerChoices[2];  
    D1.innerHTML = "D:&ensp;" + answerChoices[3]; 
    })
    
    })
};
        
for (var j=0; j < elements.length; j++) {
    elements[j].addEventListener('click', fun, true);
    };

function check(clickedElement) {
   var number = clickedElement.getAttribute("data-key");
   const yes = new Audio('../images/yes.mp3');
   const no = new Audio('../images/no.mp3');
    var elems = document.getElementsByClassName("choice-container");
    console.log(elems);
    lock(elems);
    console.log(number);
    console.log(n);
    console.log(money);
   if (number == n) {
       yes.play();
       clickedElement.style.color = "green";
       updatescore();
       setTimeout(function(){ 
           clickedElement.style.color = "white";
            gb.classList.remove("hidden");
            qcard.classList.add("hidden");
            unlock(elems);
            rounds();
            clear();}, 2000);
   }else {
       no.play();
       clickedElement.style.color = "red";
       money = -money;
       updatescore();
       setTimeout(function(){ 
           clickedElement.style.color = "white";
            gb.classList.remove("hidden");
            qcard.classList.add("hidden");
           unlock(elems);
           rounds();
           clear();}, 2000);
   }
}

function rounds() {
    round++;
    console.log(round);
    if (round === 25){
        gb.classList.add("hidden");
        end.classList.remove("hidden");
    }
}

function lock(elems) {
    for (var b=0; b < elems.length; b++) {
        elems[b].setAttribute('onclick','');
    }
}

function unlock(elems) {
    for (var b=0; b < elems.length; b++) {
            elems[b].setAttribute('onclick','check(this)');
    }
}

function updatescore(){
    score = score + money;
    total.innerHTML = score;
}

function clear(){
    A1.innerHTML = "";  
    B1.innerHTML = "";
    C1.innerHTML = "";  
    D1.innerHTML = "";
    questionbox.innerHTML = "";
}


