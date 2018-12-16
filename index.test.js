//import assert from 'assert';
const assert = require('assert');
//import add from 'index';
//const {add} = require('index');

function add(num1, num2) {
    return num1 + num2;
}

assert.deepStrictEqual(add(1,2), 3);


