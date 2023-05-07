const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('This is my first server side code')
})

app.get('/mahafuj', (req, res) => {
    res.send('More data are comming soon toon toon')
})

app.listen(port, () => {
    console.log(`My first server is running on port: ${port}`)
})
