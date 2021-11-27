(function () {
    var countriesList = [{
        name: "Russia",
        cities: [
            {
                name: "Novosibirsk",
                population: 1620162
            },
            {
                name: "Perm",
                population: 1049199
            },
            {
                name: "Tomsk",
                population: 568508
            },
            {
                name: "Magadan",
                population: 91797
            }
        ]
    },
        {
            name: "Espania",
            cities: [
                {
                    name: "Sevilla",
                    population: 704154
                },
                {
                    name: "Valencia",
                    population: 796549
                },
                {
                    name: "Madrid",
                    population: 3155360
                },
                {
                    name: "Barcelona",
                    population: 1593075
                }
            ]
        },
        {
            name: "The Republic of the Congo",
            cities: [
                {
                    name: "Bukavu",
                    population: 241690
                },
                {
                    name: "Bandundu",
                    population: 133080
                },
                {
                    name: "Boma",
                    population: 527725
                }
            ]
        }];

    function getCountriesWithMaxCitiesQuantity(countries) {
        var maxCitiesQuantity = countries.reduce(function (maxCitiesQuantity, country) {
            if (country.cities.length > maxCitiesQuantity) {
                maxCitiesQuantity = country.cities.length;
            }

            return maxCitiesQuantity;
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesQuantity;
        }).map(function (country) {
            return country.name;
        });
    }

    function getSumPopulation(countries) {
        var sumPopulation = {};

        countries.forEach(function (country) {
            sumPopulation[country.name] = country.cities.reduce(function (totalPopulation, city) {
                return totalPopulation + city.population;
            }, 0);
        });

        return sumPopulation;
    }

    console.log(countriesList);

    var countriesWithMaxCitiesQuantity = getCountriesWithMaxCitiesQuantity(countriesList);
    console.log("Countries with max cities quantity: ");
    console.log(countriesWithMaxCitiesQuantity);

    var sumPopulation = getSumPopulation(countriesList);
    console.log("Countries in the format \"name - sum population\": ");
    console.log(sumPopulation);
})();