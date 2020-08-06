'use strict'

const html = [];
html.push('<tbody>');

const item = {
    letters: ['A','B','C','D','E','F','G','H'],
    figures: ['♜','♞','♝','♛','♚','♝','♞','♜'],
    pawns: ['♟','♟','♟','♟','♟','♟','♟','♟'],
    empty: [' ',' ',' ',' ',' ',' ',' ',' '],
}

const make_row = (items, row, className) => {
    html.push(`<tr class="${className}">`);
    html.push(`<td class="index"><span>${row || ' '}</span></td>`);

    for (let i = 0; i < 8; i++) {
        let cellClassName = 'cell';

        if ( row && (row + i) % 2 === 0) {
            cellClassName += ' black';
        }

        html.push(`<td class="${cellClassName}"><span>${items[i]}</span></td>`);
    }

    html.push(`<td class="index"><span>${row || ' '}</span></td>`);
    html.push('</tr>');
}
//ряды
make_row(item.letters, 0, 'letters');
make_row(item.figures, 8, 'figures');
make_row(item.pawns, 7, 'pawns');
make_row(item.empty, 6, 'empty');
make_row(item.empty, 5, 'empty');
make_row(item.empty, 4, 'empty');
make_row(item.empty, 3, 'empty');
make_row(item.pawns, 2, 'pawnsLow');
make_row(item.figures, 1, 'figuresLow');
make_row(item.letters, 0, 'lettersLow');
html.push('</tbody>');
//документ
const table = document.createElement('table');
table.innerHTML = html.join('');
table.className = 'chessboard';
document.body.appendChild(table);