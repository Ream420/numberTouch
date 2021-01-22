var gNumbers = [1, 11, 4, 14, 5, 3, 13, 16, 6, 12, 9, 7, 10, 15, 2, 8];
var gCorrectNum = 1;
const MAXTIME = 8000;
var gMsec = MAXTIME;
var elRestart = document.querySelector('.restartBtn');
var timer;


function init() {
    cellsRender();
}

//Functions
function cellsRender() {
    var strHtml = '';
    var table = document.querySelector('.tableLimits');
    for (var i = 0, j = 0; i < 4; i++, j += 3) {
        var jumps = i + j;
        var arrNumber = gNumbers[jumps];
        var arrNumberP1 = gNumbers[jumps + 1];
        var arrNumberP2 = gNumbers[jumps + 2];
        var arrNumberP3 = gNumbers[jumps + 3];
        strHtml += '<tr><td class="cell' + jumps + '" data-id="' + jumps + '" onclick="cellClicked(this)" style="width: 50px; border-radius: 50%;text-align: center;font-size: xl;  background-color: red">' + arrNumber + '</td><td class="cell' + (jumps + 1) + '" data-id="' + (jumps + 1) + '" onclick="cellClicked(this)" style="width: 50px; border-radius: 50%;text-align: center;  background-color: red">' + arrNumberP1 + '</td>';
        strHtml += '<td class="cell' + (jumps + 2) + '" data-id="' + (jumps + 2) + '" onclick="cellClicked(this)" style="width: 50px; border-radius: 50%;text-align: center;  background-color: red">' + arrNumberP2 + '</td><td class="cell' + (jumps + 3) + '" data-id="' + (jumps + 3) + '" onclick="cellClicked(this)" style="width: 50px; border-radius: 50%;text-align: center;  background-color: red">' + arrNumberP3 + '</td></tr></br>'
    }
    table.innerHTML = strHtml;
}

function showRestartBtn(b) {
    if (b) elRestart.style.visibility = 'visible';
    else elRestart.style.visibility = 'hidden';
}

function countDown() {
    timeRender(gMsec / 1000);
    gMsec -= 4;
    if (gMsec < 0) {
        clearInterval(timer);
        timeRender('Time out!');
        showRestartBtn(true);
    }
}

function timeRender(txt) {
    var elTime = document.querySelector('.time'); //2DO time
    elTime.innerText = txt;
}

function cellClicked(clickedNum) {
    console.log(gMsec);
    if (gMsec < 0) return;
    if (+clickedNum.innerText === 1) {
        timer = setInterval(countDown, 1);
    }
    if (+clickedNum.innerText === gCorrectNum) {
        clickedNum.style.backgroundColor = 'green';
        gCorrectNum++;
    }
    if (gCorrectNum === gNumbers.length + 1) {
        clearInterval(timer);
        timeRender('Victory!');
        showRestartBtn(true);

    }
}

function restart() {
    gMsec = MAXTIME;
    gCorrectNum = 1;
    timeRender('');

    for (var i = 0; i < gNumbers.length; i++) {
        var currCell = document.querySelector('.cell' + i);
        currCell.style.backgroundColor = 'red';
    }
    showRestartBtn(false);
}
