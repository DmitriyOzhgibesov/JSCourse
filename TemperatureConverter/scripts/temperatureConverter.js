(function () {
    "use strict";

    function prepareDOM() {
        var convertButton = document.getElementById("conversion-button");

        convertButton.addEventListener("click", function () {
            var celsiusInput = document.getElementById("celsius");
            var inputValue = Number(celsiusInput.value);

            if (isNaN(inputValue)) {
                alert("Entered type is not a number! Try again.");

                var inputSet = document.getElementsByClassName("output-field");

                [].forEach.call(inputSet, function (inputElement) {
                    inputElement.value = "";
                });
            } else {
                document.getElementById("fahrenheit").value = inputValue * 1.8 + 32;
                document.getElementById("kelvin").value = inputValue + 273.15;
            }
        });
    }

    document.addEventListener("DOMContentLoaded", prepareDOM);
})();