var button = document.querySelector("button");
    
// isTrue = true;
// button.addEventListener("click",function(){
//     if(isTrue){
//         document.body.style.background = "pink";
//     }
//     else {
//         document.body.style.background = "black";
//     }
//     isTrue = !isTrue;
// });


// Easier way by adding css and toggle class object

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});