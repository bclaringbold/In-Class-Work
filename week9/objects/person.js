var objects;
(function (objects) {
    // PERSON CLASS ++++++++++++++++++++++++++++++++
    var Person = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++
        function Person(name, age, weight) {
            this._name = name;
            this._age = age;
            this._weight = weight;
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++
        Person.prototype.sayName = function () {
            console.log("Your name is: " + this._name);
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map