    const gameboard = document.querySelector('.board');
    const resetgame = document.getElementById("reset");
    const outputelement = document.getElementById("output");
    const move = document.get
    const player1 = '🎃';
    const player2 = '👻';
    const gamearrayp1 = [];
    const gamearrayp2 = [];
    const takenarray = [];
    let player = player1;
    outputelement.innerHTML = "Player One";
    
    function play(e){
        const click = e.target;
        const id = parseInt(click.getAttribute('index'));
        const taken = takenarray.indexOf(id);
        if (taken !== -1){
            outputelement.innerHTML = "Please Select An Open Space"
            return false;
        }
        click.innerHTML = player;
        if (player === player1) {
            outputelement.innerHTML = "Player Two";
            gamearrayp1.push(id);
            takenarray.push(id);
            checkboard();
            player = player2;
        } else {
            outputelement.innerHTML = "Player One";
            gamearrayp2.push(id);
            takenarray.push(id);
            checkboard();
            player = player1;
            }
    }
    
    
    function checkboard(){
        const winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
        for (let y = 0; y < winners.length; y++) {
            const num1 = winners[y][0];
            const num2 = winners[y][1];
            const num3 = winners[y][2];
            const check1 = gamearrayp1.indexOf(num1);
            const check2 = gamearrayp1.indexOf(num2);
            const check3 = gamearrayp1.indexOf(num3);
            const check4 = gamearrayp2.indexOf(num1);
            const check5 = gamearrayp2.indexOf(num2);
            const check6 = gamearrayp2.indexOf(num3);
            
            if (check1 !== -1 && check2 !== -1 && check3 !== -1 ){
                outputelement.innerHTML = "🎃 Player One Wins 🎃";
                stopgame();
            }
            else if (check4 !== -1 && check5 !== -1 && check6 !== -1){
                outputelement.innerHTML = "👻 Player Two Wins 👻";
                stopgame();
            }
            else if (takenarray.length === 9){
                outputelement.innerHTML = "It's A Tie!";
                stopgame();
            }
            
        }
    }


    function resetboard() {
        for (let i = 0; i < gameboard.children.length; i++){
            gameboard.children[i].innerText = '';
        }
        const children = Array.from(gameboard.children);
        const empty = children.filter(function(child) {
            return child.innerText == '🎃' || child.innerText == '👻';
        });
        gamearrayp1.length = 0;
        gamearrayp2.length = 0;
        takenarray.length = 0;
        player = player1;
        outputelement.innerHTML= "Player One";
        gameboard.addEventListener('click', play);
    }
    
    function stopgame() {
        gameboard.removeEventListener('click', play);
        return false;
    }
    
    gameboard.addEventListener('click', play);
    resetgame.addEventListener('click', resetboard);