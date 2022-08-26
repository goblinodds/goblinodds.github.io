const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`i'm listeninggg on port ${port}!`));

// TUTORIAL: https://www.youtube.com/watch?v=kJA9rDX7azM&t=33s&ab_channel=AnthonySistilli