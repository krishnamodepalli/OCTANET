
let express = require('express');
let todoController = require('./controllers/todo');

let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

todoController(app, __dirname);

app.listen(3000, () => {
    console.log("server is ready & running on the port 3000");
});
