// Import node-fetch to use fetch in Node.js
//const fetch = require('node-fetch');

import fetch from 'node-fetch';

// Function to log titles less than 31 characters in all caps
async function logShortTitlesInCaps() {
    try {
        // Fetch posts from the sample endpoint
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Convert the response to JSON format
        let posts = await response.json();
        
        // Loop through posts and log titles in uppercase if they're less than 31 characters
        posts.forEach(post => {
            if (post.title.length < 31) {
                console.log(post.title.toUpperCase());
            }
        });
    } catch (error) {
        // Log any errors
        console.error('Error fetching data:', error);
    }
}

// Call the function
logShortTitlesInCaps();
