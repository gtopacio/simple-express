const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({
    "extended": true,
}));

app.get("/", (req, res) => {
    res.send("Root");
});

app.get("/redirect", (req, res) => {
    console.log("Request in /redirect");
    res.redirect("/");
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => { console.log(`Listening to PORT: ${PORT}`); });