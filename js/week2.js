const links =[
    { image: "../images/programmingnotes.png", url: "programmingnotes.html"},
    { image: "../images/loops.png", url: "loopsnotes.html"},
    { image: "../images/functions.png", url: "functionsnotes.html"},
    { image: "../images/group1.png", url: "projectone.html"}, 
    { image: "../images/minimum.png", url: "minimum.html"}, 
    { image: "../images/letter.png", url: "lettercounting.html"}, 
    { image: "../images/range.png", url: "range.html"}, 
    { image: "../images/reverse.png", url: "reverse.html"}, 
    { image: "../images/home.png", url: "https://astin-jeremiah.github.io/WDD330/"} 
]

const list = document.getElementById("week2");

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



function copyPaste(){
          const input = document.getElementById("text").value;
          const outputElement = document.getElementById("output1");
          outputElement.innerHTML = input;
      }
      
      
      //Requiremnet #2
      function sum(){
          const input = document.getElementById("number").value;
          const num = parseInt(input);
          const outputElement = document.getElementById("output2");
          if (num !== NaN) {
              outputElement.innerHTML = "The Sum Of The Number Is: " + sumNumber(num);
          }
          
          function sumNumber(num){
              let summation = 0;
              for (let i=1; i<=num; i++){
                  summation += i;
          }
          return summation;
          }
          
      }
      
      //Requirement #3
      
      function getnumber(number) {
          const num = document.getElementById(number).value;
          const input = parseFloat(num);
          if (input !== NaN){
              return input;
          } else return 0;
      }
      
      function getoutput(output){
          const outputElement = document.getElementById("output3");
          outputElement.innerHTML = "The Total Is: " + output;
      }
      
      function add(num1, num2){
          return num1 + num2;
      }
      
      function sub(num1, num2){
          return num1 - num2;
      }
      
      function mult(num1, num2){
          return num1 * num2;
      }
      
      function math(operation) {
          const answer = operation(
          getnumber('number1'),
          getnumber('number2')
          );
          getoutput(answer);
      }

function minimum(){
        const inputa = document.getElementById("a").value;
        const inputb = document.getElementById("b").value;
        const numbera = parseFloat(inputa);
        const numberb = parseFloat(inputb);
        const outputElement = document.getElementById("output");
          
        if ((numbera !== NaN) & (numberb !== NaN)) {
             outputElement.innerHTML = 'The minimum of the two numbers is: '+ min(numbera,numberb);  
            };
          
      function min(a, b) {
            if (a < b) return a;
            else return b;
        }
      }

function countChar(){
          const sentence = document.getElementById("string").value;
          const character = document.getElementById("ch").value;
          const outputElement = document.getElementById("output");
          outputElement.innerHTML = "The letter " + character +" is in the sentence " + count(sentence, character) +" times.";
          
          function count(string, ch) {
              let c = 0
              for (let i=0; i < string.length; i++){
                  if (string[i] == ch) {
                      c++;
                  }
              }
              return c; 
          }
      }

function rangetotal(){
        const inputa = document.getElementById("start").value;
        const inputb = document.getElementById("end").value;
        const numbera = parseFloat(inputa);
        const numberb = parseFloat(inputb);
        const outputElement = document.getElementById("output");

        outputElement.innerHTML = "Array: " + range(numbera, numberb) + "<br>" + "Array Sum: " + sum(range(numbera, numberb));
          
        function range (numbera, numberb, step = numbera < numberb ? 1 : -1){
            let array = [];

            if (step > 0) {
                for (let i = numbera; i <= numberb; i += step) array.push(i);
            } else {
                for (let i = numbera; i >= numberb; i += step) array.push(i);
            }
        return array;
        }
          
        function sum(array) {
            let total = 0;
            for (let value of array) {
                total += value;
            }
            return total;
        }
          
      }

function reverse(){
        const inputa = document.getElementById("start").value;
        const inputb = document.getElementById("end").value;
        const numbera = parseFloat(inputa);
        const numberb = parseFloat(inputb);
        const outputElement = document.getElementById("output");

        outputElement.innerHTML = "Array: " + range(numbera, numberb) + "<br>" + "Reversed Array: " + rev(range(numbera, numberb)) + "<br>" + "Original Reversed Array: " + reversearrayinpalce(range(numbera, numberb));
          
        function range (numbera, numberb, step = numbera < numberb ? 1 : -1){
            let array = [];

            if (step > 0) {
                for (let i = numbera; i <= numberb; i += step) array.push(i);
            } else {
                for (let i = numbera; i >= numberb; i += step) array.push(i);
            }
        return array;
        }
          
        function rev(array) {
            let output = [];
            for (let i = array.length - 1; i >= 0; i--) {
                    output.push(array[i]);
            }
            return output;
        }  
          
        function reversearrayinpalce(array) {
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                let oldarray = array[i];
                array[i] = array[array.length -1 -i];
                array[array.length -1 -i] = oldarray;
            }
            return array;
        }
      }