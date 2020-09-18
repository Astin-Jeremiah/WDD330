const links =[
    {
        label: "Week 1",
        url: "week1/index.html"
    },
          
    {
        label: "Week 2",
        url: "week2/index.html"
    }
]

const list = docuemnts.getElementById("weeklist");

for (let i=0; i<links.length; i++)
    {
        let litsitem = document.createElement("li");
        let anchor = document.createElement("a");
        
        anchor.setAttribute("href", links[i].url);
        anchor.innerText = links[i].label;
        
        listitem.appendChild(anchor);
        list.appendChild(listitems);
    }