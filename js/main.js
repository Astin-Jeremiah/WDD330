const links =[
    { label: "WEEK 1", url: "week1/index.html"},
    { label: "WEEK 2", url: "week2/index.html"},
    { label: "WEEK 3", url: "week3/index.html"},
    { label: "WEEK 4", url: "week4/index.html"},
    { label: "WEEK 5", url: "week5/index.html"},
    { label: "WEEK 6", url: "week6/index.html"}
]

const list = document.getElementById("weeklist");

for (let i=0; i<links.length; i++)
    {
        let listitems = document.createElement("li");
        let anchor = document.createElement("a");
        
        anchor.setAttribute("href", links[i].url);
        anchor.innerText = links[i].label;
        
        listitems.appendChild(anchor);
        list.appendChild(listitems);
    }