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
            let summary = `<h2 class="sw2" id=${list[i].url} onclick="loadprofile(this.id)">${list[i].name}</h2>
                                <ul class="wars">
                                <li class="star">Height: ${list[i].height}</li>
                                <li class="star">Birth Year: ${list[i].birth_year}</li>
                                <li class="star">Gender: ${list[i].gender}</li>
                                </ul>`
        outputDiv.insertAdjacentHTML("beforeend", summary);
        }})
    .catch (error => console.log ('There was an error:', error))
    }

function loadprofile(clicked_id) {
    outputDiv.className="hidden";
    output2.className="show";
    up.className="hidden";
    down.className="hidden";
    let url = clicked_id;
    if(url.match('^http://')){
     url = url.replace("http://","https://")
    }
    output2.innerHTML="";
    fetch(url)
    .then((response) => {
        return response.json();})
    .then((data) => {
        profile = data;
        let fullprofile = `<h2 class="sw3">${profile.name}</h2>
                                <ul class="wars">
                                <li class="star2">Height: ${profile.height}</li>
                                <li class="star2">Mass: ${profile.mass}</li>
                                <li class="star2">Hair Color: ${profile.hair_color}</li>
                                <li class="star2">Skin Color: ${profile.skin_color}</li>
                                <li class="star2">Eye Color: ${profile.eye_color}</li>
                                <li class="star2">Birth Year: ${profile.birth_year}</li>
                                <li class="star2">Gender: ${profile.gender}</li>
                                </ul>
                                <figure onclick="back()"><img src="../images/fight.png"><figcaption class="regular">Back</figcaption></figure>`
        output2.innerHTML = fullprofile;
        })
    .catch (error => console.log ('There was an error:', error))
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



 

