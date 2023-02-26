var toggle = "X";
var boxes = [];
function getBox(id) {
  var box = document.getElementById(id);
  var allBoxes = document.querySelector(".box_container").children;
  var playerWin = document.getElementById("playerWin")
  var whoTurn = document.getElementById('whoTurn')
  var whoWin = document.getElementById('whoWin')
  if (box.innerHTML !== "") {
    return;
  }
  if (toggle == "X") {
    box.innerHTML = "X";
    box.style.color = "red"
    toggle = "O";
    whoTurn.innerHTML = "Player O's Turn"
    whoTurn.style.color = "blue"
  } else if (toggle == "O") {
    box.innerHTML = "O";
    box.style.color = "blue"
    toggle = "X";
    whoTurn.innerHTML = "Player X's Turn"
    whoTurn.style.color = "red"
  }
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < allBoxes.length; i++) {
    boxes[i] = document.getElementById("item" + (i + 1)).innerHTML;
  }
  console.log(boxes);
let roundWon = false;
for (let i = 0; i <= 7; i++) {
  const winCondition = winningConditions[i];
  let a = boxes[winCondition[0]];
  let b = boxes[winCondition[1]];
  let c = boxes[winCondition[2]];

  if (a === b && b === c && a != undefined && a != "") {
    if(a === 'X'){
      whoWin.innerHTML = 'Player X Win'
    }
    if (a === 'O'){
      whoWin.innerHTML = 'Player O Win'
    }
    roundWon = true;
    setTimeout(function () {
      playerWin.style.display = 'flex'
      for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].innerHTML = ""
            }
            toggle = "X"
    }, 300);
    break;
  } if (i === 7 && boxes.every(e => e)){
    playerWin.style.display = 'flex'
    whoWin.innerHTML = 'Drw'
  }
}
}
function colorCh(){
    var counCo = document.getElementById("container_color")
    counCo.classList.toggle("x1")
}
function reset(){  
    var allBoxes = document.querySelector(".box_container").children;
    var playerWin = document.getElementById("playerWin")
    var counCo = document.getElementById("container_color")
    var whoTurn = document.getElementById('whoTurn')
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerHTML = ""
        playerWin.style.display = "none"
        whoTurn.innerHTML = "Player X's Turn"
        whoTurn.style.color = "red"
        counCo.classList.toggle("x1")
      }
  }