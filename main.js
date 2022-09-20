let game = document.getElementById('game');
let cells = document.getElementsByClassName('cell');
let p = document.getElementById('message');
let restart = document.getElementById('restart');
let results = document.getElementById('results');
var winX = document.getElementById('win_x');
let win0 = document.getElementById('win_0');
let winDraw = document.getElementById('win_draw');
let play = 0;

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', func);
}

function func() { 
    if(play % 2 == 0) {
        this.innerHTML = 'x';
        p.innerHTML = 'Ходить: 0';
    } else {
        this.innerHTML = '0';
        p.innerHTML = 'Ходить: x';
    }
    play++;
    checkWin();
}


function checkWin() {
    if(cells[0].innerHTML == 'x' && cells[1].innerHTML == 'x' && cells[2].innerHTML == 'x') p.innerHTML = 'Переміг: x';
    if(cells[3].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[5].innerHTML == 'x') p.innerHTML = 'Переміг: x';
    if(cells[6].innerHTML == 'x' && cells[7].innerHTML == 'x' && cells[8].innerHTML == 'x') p.innerHTML = 'Переміг: x';

    if(cells[0].innerHTML == 'x' && cells[3].innerHTML == 'x' && cells[6].innerHTML == 'x') p.innerHTML = 'Переміг: x';
    if(cells[1].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[7].innerHTML == 'x') p.innerHTML = 'Переміг: x';
    if(cells[2].innerHTML == 'x' && cells[5].innerHTML == 'x' && cells[8].innerHTML == 'x') p.innerHTML = 'Переміг: x';

    if(cells[0].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[8].innerHTML == 'x') p.innerHTML = 'Переміг: x';
    if(cells[2].innerHTML == 'x' && cells[4].innerHTML == 'x' && cells[6].innerHTML == 'x') p.innerHTML = 'Переміг: x';

    if(cells[0].innerHTML == '0' && cells[1].innerHTML == '0' && cells[2].innerHTML == '0') p.innerHTML = 'Переміг: 0';
    if(cells[3].innerHTML == '0' && cells[4].innerHTML == '0' && cells[5].innerHTML == '0') p.innerHTML = 'Переміг: 0';
    if(cells[6].innerHTML == '0' && cells[7].innerHTML == '0' && cells[8].innerHTML == '0') p.innerHTML = 'Переміг: 0';

    if(cells[0].innerHTML == '0' && cells[3].innerHTML == '0' && cells[6].innerHTML == '0') p.innerHTML = 'Переміг: 0';
    if(cells[1].innerHTML == '0' && cells[4].innerHTML == '0' && cells[7].innerHTML == '0') p.innerHTML = 'Переміг: 0';
    if(cells[2].innerHTML == '0' && cells[5].innerHTML == '0' && cells[8].innerHTML == '0') p.innerHTML = 'Переміг: 0';

    if(cells[0].innerHTML == '0' && cells[4].innerHTML == '0' && cells[8].innerHTML == '0') p.innerHTML = 'Переміг: 0';
    if(cells[2].innerHTML == '0' && cells[4].innerHTML == '0' && cells[6].innerHTML == '0') p.innerHTML = 'Переміг: 0';
}

restart.addEventListener('click', funcRest);
function funcRest() {
    for(let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = '';
            p.innerHTML = 'Ходить: x';
    }
}

// results.addEventListener('load', funcResults);
// function funcResults() {
//     if(p.innerHTML == 'Переміг: x') {
//         winX.innerHTML = win + 1;
//         win++;
//     }
//     if(p.innerHTML == 'Переміг: 0') {
//         win0.innerHTML = win + 1;
//         win++;
//     }
// }



