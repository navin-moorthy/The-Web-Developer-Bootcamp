// var request = require("request");

// request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body){
//     if (!error && response.statusCode == 200){
//         var parsedData = JSON.parse(body);
//         console.log("Username: " + parsedData["name"]);     
//     }
// });

var rp = require("request-promise");

rp("https://jsonplaceholder.typicode.com/users/1")
    .then((body) => {
        console.log(body);
    })
    .error((err) => {
        console.log(err);
    });
