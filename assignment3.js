const fs = require('fs').promises;

function countPostsByUser(posts) {
    const userPostCounts = {};


    posts.forEach(post => {
        const userId = `user${post.userId}`;
        if (userPostCounts[userId]) {
            userPostCounts[userId]++;
        } else {
            userPostCounts[userId] = 1;
        }
    });

    
    console.log(userPostCounts);
}

fs.readFile('./data.json', 'utf-8')
    .then(data => {
        const posts = JSON.parse(data); 
        countPostsByUser(posts);
    })
    .catch(error => {
        console.error('Error reading the file:', error);
    });
