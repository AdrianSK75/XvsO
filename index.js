var position = new Array(3);
var arr = new Array(9).fill(0);
var xao = "X";
var bt = null, moves = 0;


for(var btn = 0; btn < 9; ++btn)
      document.querySelectorAll("#numbers")[btn].innerHTML = ' ';

function setTic(bt) {
   document.querySelector("#title").innerHTML = xao + " TURN.";
    if(xao == "X") {
        arr[bt] = 1;                   
        document.querySelectorAll("#numbers")[bt].innerHTML = xao = "O";

    } else {
       arr[bt] = 2;
       document.querySelectorAll("#numbers")[bt].innerHTML = xao = "X";

    }
    ++moves;
    
    checkTable();
}

function checkTable() {
         var item = 'O'; 
         
         for(var check = 1; check <= 2; ++check) {
               
               if(arr[0] == check && arr[1] == check && arr[2] == check) { //Horizontal
                   position[0] = 0; position[1] = 1; position[2] = 2;
                   return checkWinner(check);
   
               } else if(arr[3] == check && arr[4] == check && arr[5] == check) {
                   position[0] = 3; position[1] = 4; position[2] = 5;
                   return checkWinner(check);

               } else if(arr[6] == check && arr[7] == check && arr[8] == check) {
                   position[0] = 6; position[1] = 7; position[2] = 8;
                   return checkWinner(check);

               } else if(arr[0] == check && arr[3] == check && arr[6] == check) { //Vertical
                   position[0] = 0; position[1] = 3; position[2] = 6;
                   return checkWinner(check);

               } else if(arr[1] == check && arr[4] == check && arr[7] == check) {
                   position[0] = 1; position[1] = 4; position[2] = 7;
                   return checkWinner(check);

               } else if(arr[2] == check && arr[5] == check && arr[8] == check) {
                   position[0] = 2; position[1] = 5; position[2] = 8;
                   return checkWinner(check);

               } else if(arr[0] == check && arr[4] == check && arr[8] == check) { //Diagonals
                   position[0] = 0; position[1] = 4; position[2] = 8;
                   return checkWinner(check);

               } else if(arr[2] == check && arr[4] == check && arr[6] == check) {
                   position[0] = 2; position[1] = 4; position[2] = 6;
                   return checkWinner(check);

               }
                item = 'X';
       }

       if(moves == 9) {
           return document.querySelector("#title").innerHTML = "Draw";
       }

 
}
function checkWinner(check) {
   for(var btn = 0; btn < 9; ++btn) {
        document.querySelectorAll(".button")[btn].disabled = true;

        if(btn < 3)
            document.querySelectorAll(".button")[position[btn]].style.background = "#9fe6a0";
   }
   
   if(check == 1) 
        return document.querySelector("#title").innerHTML = "THE WINNER IS O !";
    return document.querySelector("#title").innerHTML = "THE WINNER IS X !";
   
}
