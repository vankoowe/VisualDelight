const express = require('express'),
app = express(),
path = require('path');

app.use('/libs', express.static(path.join(__dirname, '/public/libs')));
app.use('/app', express.static(path.join(__dirname, '/public/app')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/app/index.html'));
});

app.listen(3001, () => {
    console.log("Server running at http://127.0.0.1:3001");
});