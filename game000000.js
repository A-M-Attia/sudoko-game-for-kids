let userName = null;
let level = "level1";
let time = undefined;
let table = document.querySelector("#login");
let level1Display = document.querySelector("#lvl1");
let level2Web = document.querySelector("#level2Table");
let level1StartButton = document.querySelector("#lvl1Start");
let level2StartButton = document.querySelector("#lvl2Start");
let started = false;
let actionsEnabled = undefined;
let loginButton = document.querySelector("#loginbtn");
let nameField = document.querySelector("#name");
let levelField = document.querySelector("#level");
let minutes;
let fullCells = 0;
let seconds;
let value;
let tablelevel1 = document.querySelector("#lvl1Table");
let allimages = document.querySelectorAll("img");
nameField.addEventListener("change", (e) => {
    userName = e.target.value;
});
nameField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        loginButton.click();
    }
})
levelField.addEventListener("change", (e) => {
    level = e.target.value;
});
// document.querySelector("#timeRemaining").innerHTML(`$`);

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName) {
        if (level === "level1") {
            table.style.display = 'none';
            level1Display.style.display = 'block';
            time = 61;

            var timerId = window.setInterval(() => {
                time > 0 && time--;
                minutes = Math.floor(time / 60);
                seconds = time - minutes * 60;
                if (time === 0) {
                    actionsEnabled = true;
                    clearInterval(timerId);
                    alert("Lost!! Try again")

                }
                document.querySelector("#timeRemaining").innerHTML = `${minutes}:${seconds}`;
            }, 1000);

        }


        if (level === "level2") {
            table.style.display = 'none';
            level2Web.style.display = 'block';
            time = 120;

            window.setInterval(() => {
                time > 0 && time--;
                minutes = Math.floor(time / 60);
                seconds = time - minutes * 60;
                if (time === 0) {
                    actionsEnabled = true;
                }
                document.querySelector("#timerlvl2").innerHTML = `${minutes}:${seconds}`;
            }, 1000);
        }
    }

});

// we start with an empty sudoku...
var Level1Sudoku = new Array(
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
);

// ... and we solve it!!
solve(Level1Sudoku);

// given a sudoku cell, returns the row
function returnRow(cell) {
    return Math.floor(cell / 4);
}

// given a sudoku cell, returns the column
function returnCol(cell) {
    return cell % 4;
}

// given a sudoku cell, returns the 3x3 block
function returnBlock(cell) {
    return Math.floor(returnRow(cell) / 2) * 2 + Math.floor(returnCol(cell) / 2);
}

// given a number, a row and a sudoku, returns true if the number can be placed in the row
function isPossibleRow(number, row, sudoku) {
    for (var i = 0; i <= 3; i++) {
        if (sudoku[row * 4 + i] == number) {
            return false;
        }
    }
    return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number, col, sudoku) {
    for (var i = 0; i <= 3; i++) {
        if (sudoku[col + 4 * i] == number) {
            return false;
        }
    }
    return true;
}

// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
function isPossibleBlock(number, block, sudoku) {
    for (var i = 0; i <= 3; i++) {
        if (
            sudoku[
            Math.floor(block / 2) * 12 +
            (i % 2) +
            4 * Math.floor(i / 2) +
            2 * (block % 2)
            ] == number
        ) {
            return false;
        }
    }
    return true;
}

// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell, number, sudoku) {
    var row = returnRow(cell);
    var col = returnCol(cell);
    var block = returnBlock(cell);
    return (
        isPossibleRow(number, row, sudoku) &&
        isPossibleCol(number, col, sudoku) &&
        isPossibleBlock(number, block, sudoku)
    );
}

// given a row and a sudoku, returns true if it's a legal row
function isCorrectRow(row, sudoku) {
    var rightSequence = new Array(1, 2, 3, 4);
    var rowTemp = new Array();
    for (var i = 0; i <= 3; i++) {
        rowTemp[i] = sudoku[row * 4 + i];
    }
    rowTemp.sort();
    return rowTemp.join() == rightSequence.join();
}

// given a column and a sudoku, returns true if it's a legal column
function isCorrectCol(col, sudoku) {
    var rightSequence = new Array(1, 2, 3, 4);
    var colTemp = new Array();
    for (var i = 0; i <= 3; i++) {
        colTemp[i] = sudoku[col + i * 4];
    }
    colTemp.sort();
    return colTemp.join() == rightSequence.join();
}

// given a 3x3 block and a sudoku, returns true if it's a legal block
function isCorrectBlock(block, sudoku) {
    var rightSequence = new Array(1, 2, 3, 4);
    var blockTemp = new Array();
    for (var i = 0; i <= 3; i++) {
        blockTemp[i] =
            sudoku[
            Math.floor(block / 2) * 8 +
            (i % 2) +
            4 * Math.floor(i / 2) +
            2 * (block % 2)
            ];
    }
    blockTemp.sort();
    return blockTemp.join() == rightSequence.join();
}

// given a sudoku, returns true if the sudoku is solved
function isSolvedSudoku(sudoku) {
    for (var i = 0; i <= 3; i++) {
        if (
            !isCorrectBlock(i, sudoku) ||
            !isCorrectRow(i, sudoku) ||
            !isCorrectCol(i, sudoku)
        ) {
            return false;
        }
    }
    return true;
}

// given a cell and a sudoku, returns an array with all possible values we can write in the cell
function determinePossibleValues(cell, sudoku) {
    var possible = new Array();
    for (var i = 1; i <= 4; i++) {
        if (isPossibleNumber(cell, i, sudoku)) {
            possible.unshift(i);
        }
    }
    return possible;
}

// given an array of possible values assignable to a cell, returns a random value picked from the array
function determineRandomPossibleValue(possible, cell) {
    var randomPicked = Math.floor(Math.random() * possible[cell].length);
    return possible[cell][randomPicked];
}

// given a sudoku, returns a two dimension array with all possible values
function scanSudokuForUnique(sudoku) {
    var possible = new Array();
    for (var i = 0; i <= 15; i++) {
        if (sudoku[i] == 0) {
            possible[i] = new Array();
            possible[i] = determinePossibleValues(i, sudoku);
            if (possible[i].length == 0) {
                return false;
            }
        }
    }
    return possible;
}

// given an array and a number, removes the number from the array
function removeAttempt(attemptArray, number) {
    var newArray = new Array();
    for (var i = 0; i < attemptArray.length; i++) {
        if (attemptArray[i] != number) {
            newArray.unshift(attemptArray[i]);
        }
    }
    return newArray;
}

// given a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
function nextRandom(possible) {
    var max = 4;
    var minChoices = 0;
    for (var i = 0; i <= 15; i++) {
        if (possible[i] != undefined) {
            if (possible[i].length <= max && possible[i].length > 0) {
                max = possible[i].length;
                minChoices = i;
            }
        }
    }
    return minChoices;
}

// given a sudoku, solves it
function solve(sudoku) {
    var saved = new Array();
    var savedSudoku = new Array();
    var i = 0;
    var nextMove;
    var whatToTry;
    var attempt;
    while (!isSolvedSudoku(sudoku)) {
        i++;
        nextMove = scanSudokuForUnique(sudoku);
        if (nextMove == false) {
            nextMove = saved.pop();
            sudoku = savedSudoku.pop();
        }
        whatToTry = nextRandom(nextMove);
        attempt = determineRandomPossibleValue(nextMove, whatToTry);
        if (nextMove[whatToTry].length > 1) {
            nextMove[whatToTry] = removeAttempt(nextMove[whatToTry], attempt);
            saved.push(nextMove.slice());
            savedSudoku.push(sudoku.slice());
        }
        sudoku[whatToTry] = attempt;
    }
    showSudoku(sudoku, i);
}

// given a solved sudoku and the number of steps, prints out the sudoku
function showSudoku(sudoku, i) {
    for (var j = 0; j < 16; j++) {
        var x = Math.floor(Math.random() * (16 - 0) + 0);
        // alert(sudoku[x])
        document.getElementById(x).innerHTML = `<img src="images/${sudoku[x]}.jpg"
        width="64"
        height="64"
        />`;
        console.log(x, sudoku[x], j);
        // if (sudoku[x] !== 0) fullCells++;
        document.getElementById(x).style.pointerEvents = "none";
        document.getElementById(x).style.color = "rgb(0, 75, 166)";
    }
}
/*
function s() {
  //return sudoku;
  console.log(sudoku)
}
*/
var cnt = 0;
function input(x) {
    // alert(x);
    if (x.value == undefined) {
        if (
            value == "c" &&
            document.getElementById(x).style.pointerEvents != "none"
        ) {
            document.getElementById(x).innerHTML = "";
        } else if (Level1Sudoku[x] == value) {
            // alert(`<img src="images/${value}.jpg />`);
            // alert(x);
            document.getElementById(x).innerHTML = `<img src="images/${value}.jpg" width="64" height="64" />`;
            fullCells++;

        } else {
            window.alert("Wrong Click");
        }
    } else {
        value = x.value;
        document.getElementById(x.id).classList.add("onfocused");
    }
    let solvedCells = document.querySelectorAll("button img").length - 4;
    if (solvedCells === 16) {
        alert(`Congratulations, ${userName}`);

    }
}



function pad(d) {
    return d < 10 ? "0" + d.toString() : d.toString();
}

function changeColor(x) {
    document.getElementById(x).classList.remove("onfocused");
}

window.addEventListener('load', () => {


















})