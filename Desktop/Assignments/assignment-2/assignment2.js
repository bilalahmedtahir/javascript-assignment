// // Task 1
const users = require('./mock_data.js');
const rooms = require('./mock_data.js');

// console.log(users);

// const newUser = {
//     id: users.length + 1,
//     name: "Abdullah Ashar",
//     email: "abdullahasharsheikh@gmail.com",
//     age: 22,
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }

// };

// users.push(newUser);

// console.log("Updated: ", users);

// Task 2

// const newUser1 = {
//     id: users.length + 1,
//     name: "Yawar",
//     email: "yawar@gmail.com",
//     age: 23,
//     address: {
//       city: "Lahore",
//       country: "Pakistan"
//     }
// };

// const randomIndex = Math.floor(Math.random() * users.length);

// users.splice(randomIndex, 0, newUser1);

// console.log("Updated: ", users);

// Task 3

// const arr = users.slice(2,5);

// console.log("Updated array: ", arr);


// Task 4

const a = users.find(user=>user.name==="Amanda Smith");
//console.log(a.id);
//console.log(rooms);

if(a){
    const amanda_id= a.id;
    const be = rooms.filter(room => room.custom.room_consumer_id === amanda_id);
    console.log(be);
}
else{
    console.log("Not foundd");
}
