var num = [];

//                                   Reverse of the given string

// function printReverse(num){
//     console.log(num.length);
//     for(var i=num.length; i>=0; i--){
//         console.log(num[i]);
//     }
// }

// printReverse([1,2,3,4]);
// printReverse(["a","b","c"]);

//                               Check if all the array values are uniform

// function isUniform(num) {
//     // console.log(num.length);
//     var numFirst = num[0];
//     // console.log(numFirst);
//     for(var i=1; i< num.length; i++){
//         // console.log(numFirst + "= " + num[i]);
//         if(numFirst !== num[i]){
//             return  console.log(false);
//         }
//     }
//     return console.log(true);
// }

// isUniform([1,1,1,1]);
// isUniform([2,1,1,1]);
// isUniform(["a","b","c"]);
// isUniform(["b","b","b"]);

//                                      Sum of the given Array

// function sumArray(num){
//     var result = 0;
//     for(var i=0; i<num.length; i++){
//         result += num[i];
//     }
//     console.log(result);
// }

// sumArray([1,2,3]);
// sumArray([10,3,10,4]);
// sumArray([-5,100]);

//                                      Find the maximum in the given array

function max(num){
    var result = num[0];
    for(var i=1; i<num.length; i++){
        if(result < num[i]){
            result = num[i];
        }
    }
    console.log(result);
}

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);