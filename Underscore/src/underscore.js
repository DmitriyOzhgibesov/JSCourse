(function () {
    var persons = [{
        age: 12,
        name: "Dmitriy"
    }, {
        age: 21,
        name: "Fil"
    }, {
        age: 31,
        name: "Jhon"
    }, {
        age: 18,
        name: "Jhon"
    }, {
        age: 26,
        name: "Fil"
    }, {
        age: 29,
        name: "Salvador"
    }, {
        age: 35,
        name: "July"
    }, {
        age: 24,
        name: "Ann"
    }, {
        age: 19,
        name: "Jin"
    }, {
        age: 28,
        name: "Kate"
    }];

    var sumAge = _.chain(persons)
        .pluck("age")
        .reduce(function (memo, age) {
            return memo + age;
        }, 0)
        .value();
    var averageAge = sumAge / persons.length;

    console.log("Average age of all persons: " + averageAge);

//   • Получить список людей с возрастом от 20 до 30 включительно, отсортировать их по возрастанию возраста
    var ageFrom20To30 = _.chain(persons)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .value();

    console.log("Persons with age from 20 to 30: ");
    _.each(ageFrom20To30, function (person) {
        console.log(_.pick(person, ["name"]));
    });

    var peopleWithAgeFrom20To30 = _.chain(persons)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .value();

    var uniqPeopleWithAgeFrom20To30 = _.uniq(peopleWithAgeFrom20To30, person => person.name).reverse();

    console.log("Persons with uniq names and age from 20 to 30 (descending sort) : ");
    _.each(uniqPeopleWithAgeFrom20To30, function (person) {
        console.log(_.pick(person, ["name", "lastName"]));
    });

    var uniqNamesCount = _.countBy(persons, "name");
    console.log(uniqNamesCount);
})();