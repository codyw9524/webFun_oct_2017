function testScope() {
	var num = 4;

	// if (true) {
	// 	let x = 5;
	// 	console.log('here x is: ', x);
	// }

	if (num == 6) {
		console.log('num is 6');
	} 
	else if (num == 5) {
		console.log('num is 5');
	}	
	else if (num == 4) {
		if(typeof(num) == 'number') {
			console.log('4 and a number')
		}
		console.log('num is 4');
	}
	else {
		console.log('num is not 5 or 6 or 4');
	}

	if(num < 10) {
		console.log('num is less than 10');
	}

}

function strings(str) {
	//string interpolation =)

	//strings are immutable!!!!!

	var char = 'J';

	console.log( char + str.slice(1, str.length) )

	console.log('char is: ', char);

	console.log('str is: ', str);

	// str[0] = 'J';
	// str = 'Jello';
	// console.log(str);

	// var x = 'World';
	// console.log(`I want to stay ` + str + ' ' +  x + ` to everyone!`);
	// console.log(`I want to say ${str} ${x} to everyone!`);
}

// strings('Hello');

// data types
	// number
	// string
	// boolean
	// float --> decimal numbers
	// object
	// function

function arrays(arr) {
	// collection of data types
	// console.log(arr[arr.length - 1]);
	// .push()
	// arr.push(6)
	// arr[arr.length] = 6;
	// console.log(arr);

	// arr.unshift(0);

	// arr.shift();

	// for(var i = arr.length; i > 0; i--){
	// 	arr[i] = arr[i - 1];
	// 	console.log('in loop: ', arr);
	// }
	// arr[0] = 0;
	// console.log(arr);
	// console.log(arr.indexOf(100));
	// console.log(arr);
	
	// arr.pop()

	// for (var i = 0; i < arr.length - 1; i += 2) {
	// 	var temp = arr[i];
	// 	arr[i] = arr[i + 1];
	// 	arr[i + 1] = temp;
	// }
	// console.log(arr);

	for (var x of arr) {
		console.log(x);
	}
}

arrays([1, true, 3, 4, function test() { console.log('hello') }]);

// testScope();




