const path = require ("path");

const routes = function(app){
    app.get("/api/friends", function(req, res){
        res.json("../data/friends.js")
    });
    app.post("/api/friends", function(req,res){
        
    });
}

module.exports = routes;