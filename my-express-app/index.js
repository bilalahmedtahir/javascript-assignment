const express = require('express');
const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
    res.status(200).send({
        id : 500,
        name : "Abdullah",
        tech : "FrontEnd"
    })
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
