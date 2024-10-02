//const fetch = require('node-fetch');

import fetch from 'node-fetch';

async function caps() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        posts.forEach(post => {
            if (post.title.length < 31) {
                console.log(post.title.toUpperCase());
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

caps();
