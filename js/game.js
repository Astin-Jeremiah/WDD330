const questionbox = document.getElementById("question");
const name = document.getElementById("name");

var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * (32 - 9)) + 9;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

window.addEventListener('load', () => {
  alertify.prompt('Please Enter Your Name', '', function(evt, value) { 
      name.innerHTML = value});
});


for (let i=0; i< 5; i++){
    const base = "https://opentdb.com/api.php?amount=1&category=";
    const url = base + `${arr[i]}&difficulty=easy&type=multiple`;
    console.log(arr[i]);

fetch(url)
    .then(res => {
    return res.json();
})

    .then(loadedQuestions => {
    console.log(loadedQuestions.results);
    loadedQuestions.results.map(loadedQuestion => {
        const cat = loadedQuestion.category;
        console.log(cat);
        var name = JSON.stringify(cat);
        console.log(name);
        var ids = "cat"+i
        console.log(ids);
        const test = document.getElementById(ids);
        test.innerHTML= name.replace(/\"/g, "");
            
        
    
    })});
}

let elements = document.getElementsByClassName("money");
console.log(elements);
var fun = function() {
    
    var attribute = this.getAttribute("data-key");
    var money = this.getAttribute("data-money");
    console.log(attribute);
    console.log(money);
    const base2 = "https://opentdb.com/api.php?amount=1&category=";
    const url2 = base2 + `${arr[attribute]}&difficulty=easy&type=multiple`;
    console.log(arr[attribute]);
    
    
    fetch(url2)
    .then(res => {
    return res.json();
})

    .then(loadedQuestions => {
    console.log(loadedQuestions.results);
    loadedQuestions.results.map(loadedQuestion => {
        const q = loadedQuestion.question;
        console.log(q);
        var na = JSON.stringify(q);
        console.log(na);
        questionbox.innerHTML= na.replace(/\"/g, "");
        
    })});
    
    };
        
for (var j=0; j < elements.length; j++) {
    elements[j].addEventListener('click', fun, false);
    };
