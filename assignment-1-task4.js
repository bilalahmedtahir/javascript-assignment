// Task 4


const users = require('./mock_data.js');
const rooms = require('./mock_data.js');

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