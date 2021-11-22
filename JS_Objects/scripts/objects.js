var russia = {
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
};

var espania = {
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
};

var kongo = {
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
        },
    ]
};

function PrintCountriesWithMaxCitiesQuantity(countries) {
    var maxCitiesQuantity = 0;

    countries.forEach(function (countries) {
        if (countries.cities.length > maxCitiesQuantity) {
            maxCitiesQuantity = countries.cities.length;
        }
    });

    return countries.filter(function (countries) {
        return countries.cities.length === maxCitiesQuantity;
    }).map(function (countries) {
        console.log(countries.name);
    });
}

function PrintSumPopulation(countries) {
    var sumPopulation = {};
    countries.forEach(function (countries) {
        var countryName = countries.name;
        sumPopulation[countryName] = countries.cities.reduce(function (totalPopulation, cities) {
            return totalPopulation + cities.population;
        }, 0);
    });
    console.log(sumPopulation);
}

var countries = [russia, kongo, espania];
console.log(countries);

console.log("Countries with max cities quantity: ");
PrintCountriesWithMaxCitiesQuantity(countries);

console.log("countries in the format \"name - sum population\": ")
PrintSumPopulation(countries);