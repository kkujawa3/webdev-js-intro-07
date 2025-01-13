"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];


let num1 = 5;
let num2 = 4;
function returnTheRemainder(num1, num2) {
     let remain = num1 % num2;
     remainderElement.textContent = remain;
}

let num = 47;
function checkIfEven(num) {
    if (num % 2 === 0) {
        checkIfEvenElement.textContent = true;
    } else {
        checkIfEvenElement.textContent = false; 
    }
}

function getTheFourthElement() {
    lostNumbersElement.textContent = lostNumbers [3];
}

function render() {
    returnTheRemainder(num1, num2);
    checkIfEven();
    getTheFourthElement();
}

submissionBtn.addEventListener("click", function () {
    render();
});