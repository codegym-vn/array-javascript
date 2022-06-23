let b = document.getElementById('carogame');
let board = [];
let data = "";

for(let i = 0; i < 10; i ++) {
  board[i] = new Array(".", ".", ".", ".", ".", ".", ".", ".", ".", ".");
}
console.log(board, "board");
for(let i = 0; i < 10; i++) {
  data += "<br/><br>"
  for(let j = 0; j < 10; j++) {
    data += board[i][j]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
  }
}

b.innerHTML = data;

let check_x = true;

function changeValue() {
  let positionX = +prompt("X: ");
  let positionY = +prompt("Y: ");
  data = "";
  if (check_x) {
    board[positionX][positionY] = "x";
  } else {
    board[positionX][positionY] = "o";
  }

  for(let i = 0; i < 10; i++) {
    data += "<br/><br>"
    for(let j = 0; j < 10; j++) {
      data += board[i][j]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
    }
  }
  b.innerHTML = data;
  check_x = !check_x;
  check_win(positionX, positionY, board[positionX][positionY])
}
const check_win = (x, y, value) => {
  if((board[x][y+1] == value && board[x][y+2] == value && y < 8) ||
    (board[x][y+1] == value && board[x][y-1] == value && y >=1 && y < 9)||
    (board[x][y-1] == value && board[x][y-2] == value && y >= 2)){
    alert(value + " win");
  }
}