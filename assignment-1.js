// // Task 1
const users = require('./mock_data.js');
const rooms = require('./mock_data.js');

console.log(users);

const newUser = {
    id: users.length + 1,
    name: "Abdullah Ashar",
    email: "abdullahasharsheikh@gmail.com",
    age: 22,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }

};

users.push(newUser);

console.log("Updated: ", users);