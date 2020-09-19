const links =[
    { label: "WEEK 1", url: "week1/index.html"},
    { label: "WEEK 2", url: "week2/index.html"}
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