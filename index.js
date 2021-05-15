var xao = "X";
var arr = new Array(9).fill(0);
var pos = null;

for(var btn = 0; btn < 9; ++btn)
      document.querySelectorAll("#numbers")[i].innerHTML = ' ';
             
function setTic(pos) {
          document.querySelector("#title").innerHTML = xao + " TURN.";
           
          if(xao == "X") {
               arr[pos] = 1;                   
               document.querySelectorAll("#numbers")[pos].innerHTML = xao = "O";
            
           } else {
                arr[pos] = 2;
                document.querySelectorAll("#numbers")[pos].innerHTML = xao = "X";

            }
                 
            checkTable();
}

function checkTable() {
          var check = 1, item = 'O'; 
          while(check <= 2) {               
                if(arr[0] == check && arr[1] == check && arr[2] == check) {  //Horizontal                             
                   document.querySelectorAll(".button")[0].style.background = "#d8f8b7";
                   document.querySelectorAll(".button")[1].style.background = "#d8f8b7";
                   document.querySelectorAll(".button")[2].style.background = "#d8f8b7";
                   checkWinner(check);
                    
                } else if(arr[3] == check && arr[4] == check && arr[5] == check) {            
                          document.querySelectorAll(".button")[3].style.background = "#d8f8b7";
                          document.querySelectorAll(".button")[4].style.background = "#d8f8b7";
                          document.querySelectorAll(".button")[5].style.background = "#d8f8b7";
                          checkWinner(check);
                      
                 } else if(arr[6] == check && arr[7] == check && arr[8] == check) {
                          document.querySelectorAll(".button")[6].style.background = "#d8f8b7";
                          document.querySelectorAll(".button")[7].style.background = "#d8f8b7";
                          document.querySelectorAll(".button")[8].style.background = "#d8f8b7";
                          checkWinner(check);
                      
                 } else if(arr[0] == check && arr[3] == check && arr[6] == check) { //Vertical
                           document.querySelectorAll(".button")[0].style.background = "#d8f8b7";
                           document.querySelectorAll(".button")[3].style.background = "#d8f8b7";
                           document.querySelectorAll(".button")[6].style.background = "#d8f8b7";
                           checkWinner(check);
                        
                  } else if(arr[1] == check && arr[4] == check && arr[7] == check) {
                            document.querySelectorAll(".button")[1].style.background = "#d8f8b7";
                            document.querySelectorAll(".button")[4].style.background = "#d8f8b7";
                            document.querySelectorAll(".button")[7].style.background = "#d8f8b7";
                            checkWinner(check);
                                
                  } else if(arr[2] == check && arr[5] == check && arr[8] == check) {
                            document.querySelectorAll(".button")[2].style.background = "#d8f8b7";
                            document.querySelectorAll(".button")[5].style.background = "#d8f8b7";
                            document.querySelectorAll(".button")[8].style.background = "#d8f8b7";
                            checkWinner(check);

                   } else if(arr[0] == check && arr[4] == check && arr[8] == check) { //Diagonals                             
                             document.querySelectorAll(".button")[0].style.background = "#d8f8b7";
                             document.querySelectorAll(".button")[4].style.background = "#d8f8b7";
                             document.querySelectorAll(".button")[8].style.background = "#d8f8b7";
                             checkWinner(check);
                     
                   }   else if(arr[2] == check && arr[4] == check && arr[6] == check) {
                               document.querySelectorAll(".button")[2].style.background = "#d8f8b7";
                               document.querySelectorAll(".button")[4].style.background = "#d8f8b7";
                               document.querySelectorAll(".button")[6].style.background = "#d8f8b7";
                               checkWinner(check);
 
                   }
                        ++check;
                        item = 'X';
            }
}
function checkWinner(winner) {
          for(var btn = 0; btn < 9; ++btn) {
               document.querySelectorAll(".button")[btn].disabled = true;
           }
                
           if(winner == 1) {
               document.querySelector("#title").innerHTML = "THE WINNER IS O !";
            } else {
               document.querySlector("#title").innerHTML = "THE WINNER IS X !";
            }
}
