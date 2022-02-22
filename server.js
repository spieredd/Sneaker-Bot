require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());
app.use(urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Hello world !');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`SERVER: Listening on port ${PORT}`);
});

