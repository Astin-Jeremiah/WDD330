const questionbox = document.querySelector('#questioncard h3');
const A1 = document.getElementById("a1");
const B1 = document.getElementById("b1");
const C1 = document.getElementById("c1");
const D1 = document.getElementById("d1");
const elements = document.getElementsByClassName("money");
const name = document.getElementById("name");
const total = document.getElementById("total");
const gb = document.getElementById("gameboard");
const qcard = document.getElementById("questioncard");
const end = document.getElementById("endcard");
const timer = document.getElementById("times");
const yes = new Audio('../images/yes.mp3');
const no = new Audio('../images/no.mp3');
let score = 0;
let n = 1;
let money = 0;
let round = 0;
let clicked = false;

let arr = [];
while (arr.length < 5) {
    let r = Math.floor(Math.random() * (31 - 9)) + 9;
    if (arr.indexOf(r) === -1) arr.push(r);
}


window.addEventListener('load', () => {
    const build = new Audio('../images/build.mp3');
    alertify.prompt('Please Enter Your Name', '', function (evt, value) {
        total.innerHTML = score;
        name.innerHTML = value;
        build.play();
        buildcategories();
    }, function () {
        build.play();
        buildcategories();
    });

});


function buildcategories() {
    const cat0 = document.getElementById("cat0");
    const cat1 = document.getElementById("cat1");
    const cat2 = document.getElementById("cat2");
    const cat3 = document.getElementById("cat3");
    const cat4 = document.getElementById("cat4");
    cat0.innerHTML = categories[arr[0] - 9].name;
    cat1.innerHTML = categories[arr[1] - 9].name;
    cat2.innerHTML = categories[arr[2] - 9].name;
    cat3.innerHTML = categories[arr[3] - 9].name;
    cat4.innerHTML = categories[arr[4] - 9].name;
}


let fun = function () {
    gb.classList.add("hidden");
    qcard.classList.remove("hidden");
    timer.classList.remove("hidden");
    const attribute = this.getAttribute("data-key");
    money = parseInt(this.getAttribute("data-money"));
    const base2 = "https://opentdb.com/api.php?amount=1&category=";
    const url2 = base2 + `${arr[attribute]}&type=multiple`;
    this.innerHTML = "";
    this.removeEventListener("click", fun, true);
    fetch(url2)
        .then(res => {
            return res.json();
        })

        .then(loadedQuestions => {
            set();
            loadedQuestions.results.map(loadedQuestion => {
                const q = loadedQuestion.question;
                questionbox.innerHTML = q;
                n = Math.floor(Math.random() * (4 - 0));
                const answerChoices = [...loadedQuestion.incorrect_answers];
                answerChoices.splice(n, 0, loadedQuestion.correct_answer);
                A1.innerHTML = "A:&ensp;" + answerChoices[0];
                B1.innerHTML = "B:&ensp;" + answerChoices[1];
                C1.innerHTML = "C:&ensp;" + answerChoices[2];
                D1.innerHTML = "D:&ensp;" + answerChoices[3];
            })

        })
};

for (let j = 0; j < elements.length; j++) {
    elements[j].addEventListener('click', fun, true);
};

function check(clickedElement) {
    clicked = true;
    const number = clickedElement.getAttribute("data-ans");
    const elems = document.getElementsByClassName("choice-container");
    const an = document.querySelectorAll("[data-ans]");
    lock(elems);
    if (number == n) {
        yes.play();
        clickedElement.style.color = "green";
        updatescore();
        setTimeout(function () {
            clickedElement.style.color = "white";
            gb.classList.remove("hidden");
            qcard.classList.add("hidden");
            clicked = false;
            unlock(elems);
            rounds();
            clear();
        }, 2000);
    } else {
        no.play();
        clickedElement.style.color = "red";
        an[n].style.color = "green";
        money = -money;
        updatescore();
        setTimeout(function () {
            clickedElement.style.color = "white";
            an[n].style.color = "white";
            gb.classList.remove("hidden");
            qcard.classList.add("hidden");
            clicked = false;
            unlock(elems);
            rounds();
            clear();
        }, 2000);
    }
}

function rounds() {
    round++;
    if (round === 25) {
        gb.classList.add("hidden");
        end.classList.remove("hidden");
    }
}

function lock(elems) {
    for (let b = 0; b < elems.length; b++) {
        elems[b].setAttribute('onclick', '');
    }
}

function unlock(elems) {
    for (let b = 0; b < elems.length; b++) {
        elems[b].setAttribute('onclick', 'check(this)');
    }
}

function updatescore() {
    score = score + money;
    total.innerHTML = score;
}

function clear() {
    A1.innerHTML = "";
    B1.innerHTML = "";
    C1.innerHTML = "";
    D1.innerHTML = "";
    questionbox.innerHTML = "";
    timer.style.color = "#060CE9";
}

function set() {
    let tim = 20;
    const timerId = setInterval(time, 1000);

    function time() {
        timer.style.color = "white";
        if (tim == -1 && clicked == false) {
            clearTimeout(timerId);
            no.play();
            gb.classList.remove("hidden");
            qcard.classList.add("hidden");
            rounds();
            clear();
        } else if (clicked == true) {
            clearTimeout(timerId);
        } else {
            timer.innerHTML = tim;
            tim--;
        }
    }
}
