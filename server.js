const express = require("express");
const path = require("path");

const app = express();
const PORT = 7000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use( express.static ( path.join( __dirname, "app/public") ) );

app.listen(PORT, function(){
    console.log("Listening on http://localhost:" + PORT)
});

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);