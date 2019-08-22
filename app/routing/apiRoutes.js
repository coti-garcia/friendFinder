const path = require("path");

const friends = require("../data/friends");

const routes = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log(res)
    });
    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        const newFriend = req.body;
        newFriend.scores.forEach((element, i) => {
            newFriend.scores[i] = parseInt(newFriend.scores[i])
        })
        const totalDiferrenceArray = [];

        friends.forEach(element => {
            const difference = []
            for (let i = 0; i < 10; i++) {
                difference.push(Math.abs(element.scores[i] - newFriend.scores[i]))
            }
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalDifference = difference.reduce(reducer)
            totalDiferrenceArray.push(totalDifference)
            console.log(element.name + " Total Difference:" + totalDifference)
        });
        console.log(totalDiferrenceArray);
        const minDifference = Math.min(...totalDiferrenceArray);
        const indexOfFriends = totalDiferrenceArray.indexOf(minDifference);
        console.log(minDifference);
        const match = friends[indexOfFriends]
        console.log("Match:" + match.name);


        friends.push(newFriend);
        res.json(match);
    });
}

module.exports = routes;