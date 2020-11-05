const links =[
    { image: "../images/tt.png", url: "transformsnotes.html"},
    { image: "../images/csd.png", url: "canvasnotes.html"},
    { image: "../images/transform.png", url: "transforms.html"},
    { image: "../images/canvas.png", url: "canavsdraw.html"},
    { image: "../images/SVG.png", url: "svgdraw.html"},
    { image: "../images/caticon.png", url: "cathat.html"},
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"},
]


const list = document.getElementById("week8");

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