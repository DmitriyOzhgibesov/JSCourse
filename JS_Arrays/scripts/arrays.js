function printSortedArray(array) {
    var sortedArray = array.sort(function (a, b) {
        return b - a
    });
    console.log("array sorted in descending order: " + sortedArray.toString());
}

function printFirst5Element(array) {
    var first5Elements = array.slice(0, 5);
    console.log("First five elements in array: " + first5Elements.toString());
}

function printLast5Element(array) {
    var last5Elements = array.slice(array.length - 5);
    console.log("Last five elements in array: " + last5Elements.toString());
}

function printEvenElementsSum(array) {
    var evenElementsSum = array.reduce(function (sum, element) {
        if (element % 2 === 0) {
            return sum + element;
        }
        return sum;
    }, 0);
    console.log("Sum of even elements in array: " + evenElementsSum);
}

function init100ConsecutiveIntegers() {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }
    return array;
}

var array = [4, 2, 10, 3, 6, 7, 1];
console.log("Initial array: " + array.toString());

printSortedArray(array);
printFirst5Element(array);
printLast5Element(array);
printEvenElementsSum(array);
init100ConsecutiveIntegers();

var elements100Array = init100ConsecutiveIntegers();
console.log(elements100Array);

elements100Array
    .filter(function (value) {
        return value % 2 === 0;
    })
    .map(function (value) {
        return Math.pow(value, 2);
    })
    .forEach(function (evenSquareNumber) {
        console.log(evenSquareNumber);
    });