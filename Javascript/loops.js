
console.log("Numbers between -10 to 19");
for (var i = -10; i <= 19; i++) {
	console.log(i);
}

console.log("Even Numbers between 10 to 40");
for (var i = 10; i <= 40 ; i++) {
	if( i % 2 === 0){
		console.log(i);
	}
}

console.log("Numbers divisible by 5 AND 3 between 5 to 50");
for (var i = 5; i <= 50 ; i++) {
	if( i % 5 === 0 && i % 3 === 0){
		console.log(i);
	}
}