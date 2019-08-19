const path = require ("path");

const friends = require ("../data/friends")
const routes = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req,res){
        friends.push(req.body);
    });
}

module.exports = routes;