const path = require ("path");

const friends = require ("../data/friends")
const routes = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req,res){
        console.log(req.body)
        for (let i in req.body.scores) {
            req.body.scores[i] = parseInt(req.body.scores[i])
        }
        friends.push(req.body);
        res.end();
    });
}

module.exports = routes;