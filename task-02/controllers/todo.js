let data = [];

let bodyParser = require('body-parser');
let express = require('express');
let urlEncoder = bodyParser.urlencoded({ extended: true });
let jsonEncoder = express.json();

module.exports = (app, folderPath) => {
    app.get("/todo", (req, res) => {
        console.log(
            "a request from the javascript file. Sending the required data"
        );
        res.send(JSON.stringify(data));
    });
    app.post("/", urlEncoder, (req, res) => {
        console.log("request to add an item");
        data.push(req.body);
        res.sendFile(folderPath + "/index.html");
    });
    app.delete("/todo/:item", jsonEncoder, (req, res) => {
        console.log("request to delete an item");
        for (let i = 0; i < data.length; i++) {
            if (data[i].item === req.params.item) {
                data.splice(i, 1);
            }
        }
    });
};
