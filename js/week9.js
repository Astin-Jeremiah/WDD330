const links =[
    { image: "../images/window.png", url: "windownotes.html"},
    { image: "../images/html5.png", url: "html5notes.html"},
    { image: "../images/factor.png", url: "factor.html"},
    { image: "../images/echo.png", url: "echo.html"},
    { image: "../images/drum.png", url: "drum.html"},
    { image: "../images/final.png", url: "proposal.html"},
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"},
]


const list = document.getElementById("week9");

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