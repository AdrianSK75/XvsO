var position = new Array(3);
var arr = new Array(9).fill(0);
var xao = "X";
var bt = null, move;

function setTic(bt) {
   document.querySelector("#title").innerHTML = xao + " TURN.";
    if(xao == "X") {
        arr[bt] = "X";                  
        document.querySelectorAll("#numbers")[bt].innerHTML = xao = "O";
    } else {
       arr[bt] ="O";
       document.querySelectorAll("#numbers")[bt].innerHTML = xao = "X";
    }
    move = arr[bt];
    checkTable(move);
}

function checkTable(move) {
        for(var i = 0, j = 0; i <= 6; i += 3, ++j) { //Horizontal + Vertical
            if(arr[i] == move && arr[i + 1] == move && arr[i + 2] == move) {
                position[0] = i; position[1] = i + 1; position[2] = i + 2;
                return checkWinner();
            }

            if(arr[j] == move && arr[j + 3] == move && arr[j + 6] == move) {
                position[0] = j; position[1] = j + 3; position[2] = j + 6;
                return checkWinner();
            }
        }
        
        if(arr[0] == move && arr[4] == move && arr[8] == move) { //Diagonals
                   position[0] = 0; position[1] = 4; position[2] = 8;
                   return checkWinner();

        } else if(arr[2] == move && arr[4] == move && arr[6] == move) {
                   position[0] = 2; position[1] = 4; position[2] = 6;
                   return checkWinner();
        }
}

function checkWinner() {
    for(var btn = 0; btn < 9; ++btn) {
            document.querySelectorAll(".button")[btn].disabled = true;

            if(btn < 3)
                document.querySelectorAll(".button")[position[btn]].style.background = "#9fe6a0";
    }
   
    return document.querySelector("#title").innerHTML = "THE WINNER IS " + xao + " !";  
}
