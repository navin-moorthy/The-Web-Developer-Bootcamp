
// function isEven(i){
// 	if(i % 2 === 0){
// 		return console.log(true);
// 	}
// 	else {
// 		return console.log(false);
// 	}
// }

// isEven(4);
// isEven(21);
// isEven(68);
// isEven(333);


function factorial(fact){
	var fact1 = fact;

	if( fact === 0){
		return console.log(1);
	}
	else {
		for ( var i = 1; i < fact ; i++) {
		fact1 = fact1 * (fact-i);
	}
	return console.log(fact1);
	}
	
}

factorial(4);
factorial(2);
factorial(10);
factorial(0);
