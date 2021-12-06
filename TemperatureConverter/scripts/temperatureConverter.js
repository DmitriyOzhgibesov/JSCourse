"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var celsiusInput = document.getElementById("celsius");
    var convertButton = document.getElementById("conversion-button");
    var fahrenheitOutput = document.getElementById("fahrenheit");
    var kelvinOutput = document.getElementById("kelvin");

    convertButton.addEventListener("click", function () {
        var inputValue = celsiusInput.value;

        if (inputValue === "") {
            alert("Input field with temperature in Celsius degrees is empty! Try again.");
        } else if (isNaN(Number(inputValue))) {
            alert("Entered type is not a number! Try again.");
        } else {
            fahrenheitOutput.value = Number(inputValue) * 1.8 + 32;
            kelvinOutput.value = Number(inputValue) + 273.15;
        }
    });
});