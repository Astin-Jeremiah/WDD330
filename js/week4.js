const links =[
    { image: "../images/forms.png", url: "formsnotes.html"},
    { image: "../images/object.png", url: "objectnotes.html"},
    { image: "../images/modular.png", url: "modularnotes.html"},
    { image: "../images/tic.png", url: "tictactoe.html"}, 
    { image: "../images/vector.png", url: "vector.html"},
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"} 
]

const list = document.getElementById("week4");

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



