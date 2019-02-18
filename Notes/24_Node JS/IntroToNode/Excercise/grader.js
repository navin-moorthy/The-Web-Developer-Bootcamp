function average(num){
    console.log(num)
    var sum = num.reduce((previous, current) => current+=previous);
    console.log(sum)
    var avg = sum/num.length;
    console.log(Math.round(avg));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);
var scores1 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores1);