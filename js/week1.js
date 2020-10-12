const links =[
    { image: "../images/noteslocalstorage.png", url: "localstoragenotes.html"},
    { image: "../images/notesmobile.png", url: "mobilenotes.html"},
    { image: "../images/notesgit.png", url: "gitnotes.html"},
    { image: "../images/storyeditor.png", url: "story_editor.html"}, 
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"} 
]

const list = document.getElementById("week1");

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

      function loadStory(){
          var storyName = document.getElementById("name_input").value
          var storyHTML = localStorage.getItem(storyName)
          document.getElementById("story_editor").value = storyHTML
      }
      
      function saveStory(){
          var storyName = document.getElementById("name_input").value
          var storyHTML = document.getElementById("story_editor").value
          localStorage.setItem(storyName, storyHTML)
      }
      
      function displayStory(){
          var storyHTML = document.getElementById("story_editor").value
          document.getElementById("story_display").innerHTML = storyHTML
      }