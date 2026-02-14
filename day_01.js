let person = {
    name: "Prince Maurya",
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

let student = {
    roll_no: 66,
};

student.__proto__ = person;
console.log(student.name);
student.greet();
console.log(student.roll_no);
