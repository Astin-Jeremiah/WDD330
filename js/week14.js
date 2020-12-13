const links =[
    { image: "../images/jeopardy.png", url: "jeopardy.html"},
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"},
]


const list = document.getElementById("week14");

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