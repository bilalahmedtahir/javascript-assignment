//const fetch = require('node-fetch');

import fetch from 'node-fetch';

async function caps() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();

        //console.log(posts);
        posts.forEach(post => {
            if (post.title.length < 31) {
                console.log(post.title.toUpperCase());
            }
        });
    } catch (error) {
        console.error(error);
    }
}
caps();
