const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('I love Javascript');
});

app.listen(3000)
