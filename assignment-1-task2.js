
// Task 2


const users = require('./mock_data.js');
const rooms = require('./mock_data.js');
const newUser1 = {
    id: users.length + 1,
    name: "Yawar",
    email: "yawar@gmail.com",
    age: 23,
    address: {
      city: "Lahore",
      country: "Pakistan"
    }
};

const randomIndex = Math.floor(Math.random() * users.length);

users.splice(randomIndex, 0, newUser1);

console.log("Updated: ", users);