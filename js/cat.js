export const categories = [{"id":9,"name":"General Knowledge"},{"id":10,"name":"Entertainment: Books"},{"id":11,"name":"Entertainment: Film"},{"id":12,"name":"Entertainment: Music"},{"id":13,"name":"Entertainment: Musicals & Theatres"},{"id":14,"name":"Entertainment: Television"},{"id":15,"name":"Entertainment: Video Games"},{"id":16,"name":"Entertainment: Board Games"},{"id":17,"name":"Science & Nature"},{"id":18,"name":"Science: Computers"},{"id":19,"name":"Science: Mathematics"},{"id":20,"name":"Mythology"},{"id":21,"name":"Sports"},{"id":22,"name":"Geography"},{"id":23,"name":"History"},{"id":24,"name":"Politics"},{"id":25,"name":"Art"},{"id":26,"name":"Celebrities"},{"id":27,"name":"Animals"},{"id":28,"name":"Vehicles"},{"id":29,"name":"Entertainment: Comics"},{"id":30,"name":"Science: Gadgets"}];


export var fun = function() {
    gb.classList.add("hidden");
    qcard.classList.remove("hidden");
    timer.classList.remove("hidden");
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
    set();
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
