var todos = [];

var input = prompt("What do you what us to do");

while(input !== "quit"){
    if(input === "new"){
        addTodo();
    }
    else if(input === "list"){
        listTodo();
    }
    else if(input === "delete"){
        deleteTodo();
    }
    var input = prompt("What do you what us to do");
}

console.log("Ok, You Quit the App");

function addTodo(){
    var newtodos = prompt("Enter the new todo");
    todos.push(newtodos);
    console.log("Added todo");
}

function listTodo() {
    console.log("*************");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("*************");
}

function deleteTodo(){
    var delIndex = prompt("Enter the index of the todo to be deleted");
    todos.splice(delIndex,1);
    console.log("Deleted todo");
}

// Initial code bigger one

// var todos = [];

// var input = prompt("What do you what us to do");

// while(input !== "quit"){
//     if(input === "new"){
//         var newtodos = prompt("Enter the new todo");
//         todos.push(newtodos);
//     }
//     else if(input === "list"){
//         console.log(todos);
//     }
//     var input = prompt("What do you what us to do");
// }

// console.log("Ok, You Quit the App");
   
