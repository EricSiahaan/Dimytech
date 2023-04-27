'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let output = ''
    for (let i = 1; i <= n; i++) {
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }



        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        // new line
        output += "\n"
    }
    console.log(output)
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
