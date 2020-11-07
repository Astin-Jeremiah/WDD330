const outputDiv = document.getElementById('output');
const output2 = document.getElementById('swoutput2');
const up = document.getElementById('up');
const down = document.getElementById('down');
const list = [];
let profile = [];
let number = 1;

window.addEventListener('load', () => {
    loaddata();
})
                        
function loaddata() {
    outputDiv.innerHTML="";
    fetch('https://swapi.dev/api/people/?page='+number)
    .then((response) => {
        return response.json();})
    .then((data) => {
        list.push(...data.results);
        for (let i=0; i < list.length; i++){
            let summary = `<h2 class="sw2" id=${[i]} onclick="loadprofile(this.id, list)">${list[i].name}</h2>
                                <ul class="wars">
                                <li class="star">Height: ${list[i].height}</li>
                                <li class="star">Birth Year: ${list[i].birth_year}</li>
                                <li class="star">Gender: ${list[i].gender}</li>
                                </ul>`
        outputDiv.insertAdjacentHTML("beforeend", summary);
        }})
    .catch (error => console.log ('There was an error:', error))
    }

function loadprofile(clicked_id, list) {
            outputDiv.className="hidden";
            output2.className="show";
            up.className="hidden";
            down.className="hidden";
            let item = clicked_id;
            let fullprofile = `<h2 class="sw3">${list[item].name}</h2>
                                <ul class="wars">
                                <li class="star2">Height: ${list[item].height}</li>
                                <li class="star2">Mass: ${list[item].mass}</li>
                                <li class="star2">Hair Color: ${list[item].hair_color}</li>
                                <li class="star2">Skin Color: ${list[item].skin_color}</li>
                                <li class="star2">Eye Color: ${list[item].eye_color}</li>
                                <li class="star2">Birth Year: ${list[item].birth_year}</li>
                                <li class="star2">Gender: ${list[item].gender}</li>
                                </ul>
                                <figure onclick="back()"><img src="../images/fight.png"><figcaption class="regular">Back</figcaption></figure>`
            output2.innerHTML = fullprofile;
        }


function back() {
    outputDiv.className="show";
    output2.className="hidden";
    up.className="show";
    down.className="show";
    if (number == 9){
        up.className="hidden";
    }
    if (number == 1) {
        down.className="hidden";
    }
}

    
function plus() {
    list.length = 0;
    if (number == 9){
        return false;
    }
    up.className="show";
    down.className="show";
    number = number+1;
    loaddata();
    if (number == 9){
        up.className="hidden";
    }
}

function minus() {
    list.length = 0;
    if (number == 1) {
        return false;
    }
    up.className="show";
    down.className="show";
    number = number-1;
    loaddata();
    if (number == 1) {
        down.className="hidden";
    }
}



 

