var Student = {
    name: "Sanika",
    Email: "sanika@gmail.com",
    CGPA: 9.2,
    isPlaced: true
};
var subject1 = {
    _id: 23,
    name: "Physics",
    Weitage: 100
};
subject1.Weitage = 50;
function createEmployee(name, Email, Salary) {
    return {
        name: name,
        Email: Email,
        Salary: Salary
    };
}
var employee1 = createEmployee("Sachin", "sachin@gmail.com", 600000);
console.log(employee1);
// ---------------------------------------------------------
function userDetails() {
    return {
        Name: "Rahul",
        Email: "rahuldeokar@gmail.com",
        isActive: false
    };
}
var User = userDetails();
console.log(User);
// --------------------------------------------------------
