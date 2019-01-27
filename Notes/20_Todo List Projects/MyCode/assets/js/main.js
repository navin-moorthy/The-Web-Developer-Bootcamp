// Shorter Version
// Add the class with color gray and strikethrough in css and toggle the class here
$("li").click(function (){
    $(this).toggleClass("completed");
})

// Longer Version
// strike-through specific to do's when clicked by adding css and all the elements here itself
// ------------------------------------------------------
// $("li").click(function () {
//     // if li is gray
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         // turn the color to black
//         $(this).css({
//             color: "black",
//             textDecoration: "none",
//         });
//         // else
//     } else {
//         // turn the color to gray and strikethrough  
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through",
//         });
//     }
// })
// ----------------------------------------------------------