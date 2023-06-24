let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];



let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];



function getRow(puzzle, row) {
  return puzzle[row]
};

function getColumn(puzzle, col) {
  let column = []
  for (let i = 0; i < puzzle.length; i++){
     column.push(puzzle[i][col])
}
return column
};


function getSection(puzzle, x, y) {
    x *= 3;
    y *= 3;
    const sect = [];
    for (let i = y; i < y + 3; i++){
       for (let j=x;j< x + 3; j++){
            sect.push(puzzle[i][j]);
        }
    }
    return sect;
} 

function includes1To9(arr) {
  const num = new Set(arr);
  return num.size === 9 && !num.has(0);
}
function sudokuIsValid(puzzle) {
  const isValid = (arr) => {
    const set = new Set(arr);
    return set.size === arr.length;
  };

  for (let i = 0; i < puzzle.length; i++) {
    if (!isValid(puzzle[i])) return false;
    
    const col = getColumn(puzzle, i);
    if (!isValid(col)) return false;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const section = getSection(puzzle, i, j);
      if (!includes1To9(section)) return false;
    }
  }

  return true;
}
console.log(sudokuIsValid(puzzleTwo));


