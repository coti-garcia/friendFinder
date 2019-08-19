const express = require("express");
const path = require("path");
const PORT = 7000;
const app = express();

app.get("/", function (req, res){
    res.send("Homepage")
});
app.use( express.static ( path.join( __dirname, "app/public") ) );

app.listen(PORT, function(){
    console.log("Listening on http://localhost:" + PORT)
});