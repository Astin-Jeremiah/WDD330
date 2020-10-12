const links =[
    { image: "images/week1.png", url: "week1/index.html"},
    { image: "images/week2.png", url: "week2/index.html"},
    { image: "images/week3.png", url: "week3/index.html"},
    { image: "images/week4.png", url: "week4/index.html"}, 
    { image: "images/week5.png", url: "week5/index.html"},
    { image: "images/week6.png", url: "week6/index.html"}, 
    { image: "images/week7.png", url: "week7/index.html"}, 
    { image: "images/week8.png", url: "week8/index.html"}, 
    { image: "images/week9.png", url: "week9/index.html"}, 
    { image: "images/week10.png", url: "week10/index.html"}, 
    { image: "images/week11.png", url: "week11/index.html"},
    { image: "images/week12.png", url: "week12/index.html"}, 
    { image: "images/week13.png", url: "week13/index.html"}, 
    { image: "images/Facebook.png", url: "https://www.facebook.com/jeremiah.astin"},
    { image: "images/instagram.png", url: "https://www.instagram.com/astinjeremy/?hl=en"},
    { image: "images/twitter.png", url: "https://twitter.com/astin_jeremiah?p=s"},
    { image: "images/internet.png", url: "https://www.popculturevinyl.com/about_us/"},
    { image: "images/mail.png", url: "week13/index.html"},
    
]

const list = document.getElementById("weeklist");

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

        