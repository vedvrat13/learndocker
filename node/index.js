const express = require("express");

const app = express();

app.get('/', (req, resp) => {
    resp.send('How are you doing?')
});

app.listen(8080, () => {
    console.log('Listening on Port 8080')
});