var user1 = {
    name: "Rahul",
    age: 23,
    greet: function (message) {
        console.log("".concat(message, ", my name is ").concat(this.name, " and I am ").concat(this.age, " years old."));
    },
    getName: function () {
        return this.name;
    }
};
user1.greet("Hello");
console.log("Name is : " + user1.getName());
