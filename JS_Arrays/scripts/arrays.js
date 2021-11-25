(function () {
    function getSortedArray(array) {
        return array.sort(function (a, b) {
            return b - a
        });
    }

    function getFirst5Elements(array) {
        return array.slice(0, 5);
    }

    function getLast5Elements(array) {
        return array.slice(array.length - 5);
    }

    function getEvenElementsSum(array) {
        return array.reduce(function (sum, element) {
            if (element % 2 === 0) {
                return sum + element;
            }
            return sum;
        }, 0);
    }

    function init100ConsecutiveIntegers() {
        var array = [];

        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    var array = [4, 2, 10, 3, 6, 7, 1];
    console.log("Initial array: " + array);

    var sortedArray = getSortedArray(array);
    console.log("Array sorted in descending order: " + sortedArray)

    var first5Elements = getFirst5Elements(array);
    console.log("First five elements in array: " + first5Elements);

    var last5Elements = getLast5Elements(array);
    console.log("Last five elements in array: " + last5Elements);

    var evenElementsSum = getEvenElementsSum(array);
    console.log("Sum of even elements in array: " + evenElementsSum);

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
})();