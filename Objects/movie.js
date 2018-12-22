var movies = [
    {
    name : "Ratchasan",
    ratings : 5,
    hasWatched : true
    },
    {
    name : "Vaanam",
    ratings : 4.5,
    hasWatched : false
    },
    {
    name : "Venom",
    ratings : 5,
    hasWatched : true
    },
    {
    name : "Saamy",
    ratings : 3.5,
    hasWatched : false
    }
];

// for(var i=0; i<movies.length; i++){
//     if(movies[i].hasWatched){
//         console.log("You have watched" + " \"" + movies[i].name + "\" " + "- " + movies[i].ratings + " stars");
//     }
//     else {
//         console.log("You have not seen" + " \"" + movies[i].name + "\" " + "- " + movies[i].ratings + " stars");
//     }
// }

movies.forEach(function(movie){ 
    if(movie.hasWatched){
        console.log("You have watched" + " \"" + movie.name + "\" " + "- " + movie.ratings + " stars");
    }
    else {
        console.log("You have not seen" + " \"" + movie.name + "\" " + "- " + movie.ratings + " stars");
    }
});

