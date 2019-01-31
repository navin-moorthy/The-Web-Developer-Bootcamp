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

// Shorter Version
// Add the class with color gray and strikethrough in css and toggle the class here
$("ul").on("click", "li", function (){
    $(this).toggleClass("completed");
});

// Click X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut( 500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add the new todo when enter key is pressed
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grab the new todo value
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});