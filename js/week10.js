const links =[
    { image: "../images/form.png", url: "validatingnotes.html"},
    { image: "../images/fetch.png", url: "fetchnotes.html"},
    { image: "../images/val.png", url: "formvalidate.html"},
    { image: "../images/quake.png", url: "quakes.html"},
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"},
]


const list = document.getElementById("week10");

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