// // Example of string
// var name = "Gandhaksha Joshi";
// console.log(name);

// //Example of for loop
// var users = ["Gandhaksha Joshi", "Joshi"];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// // Example of while loop
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// // Arrays of objects
// var user1 = [
//     { name: "Gandhaksha Joshi", age: 21 },
//     { name: "Ketaki", age: 27 }
// ]
// console.log(user1[0].name);
// console.log(user1[0].age);

// function example

function printAllUsers(users) {
    for (var i = 0; i < users.length; i++) {
        conLog = users[i].name + "'s age is " + users[i].age;
        console.log(conLog);
    }
}
var user1 = [
    { name: "Gandhaksha Joshi", age: 21 },
    { name: "Ketaki", age: 27 }
]
printAllUsers(user1);