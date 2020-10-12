const links =[
    { image: "../images/objects.png", url: "objectsnotes.html"},
    { image: "../images/document.png", url: "documentnotes.html"},
    { image: "../images/events.png", url: "eventnotes.html"},
    { image: "../images/cardio1.png", url: "group1.html"}, 
    { image: "../images/cardio2.png", url: "group2.html"},
    { image: "../images/table.png", url: "buildtable.html"}, 
    { image: "../images/caticon.png", url: "cathat.html"}, 
    { image: "../images/ballonpop.png", url: "balloon.html"}, 
    { image: "../images/ghost.png", url: "mousetail.html"}, 
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"} 
]

const list = document.getElementById("week3");

for (let i=0; i<links.length; i++)
    {
        let listitems = document.createElement("li");
        let anchor = document.createElement("a");
        let img = document.createElement("img");

        
        anchor.setAttribute("href", links[i].url);
        img.setAttribute("src", links[i].image);
        img.setAttribute("class", "pressed");

        
        
        listitems.appendChild(anchor);
        anchor.appendChild(img);
        list.appendChild(listitems);
    }