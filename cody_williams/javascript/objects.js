function learningObjects() {
	var myObj = {
		'name': 'Cody',
		'profession': 'Instructor',
		'age': 29,
		'something': {
			'key': 'value'
		},
		growOlder: function() {
			this.age++;
		}
	};

	// var product = {};
	// product.name = 'Macbook';
	// product['price'] = 'a lot';
	// console.log(product);
	// return;

	var person = {
		name: 'Dirk Nowitzki',
		position: 'PF',
		age: 'about to retire',
		current_team: 'Mavericks',
		past_teams: [
			'Lakers',
			'Celtics',
			'Bulls'
		],
		active: true,
		rings: 1,
		mvp: 1,
		retire: function() {
			this.past_teams.push(this.current_team);
			this.current_team = null;
			this.active = false;
		}
	}

	for (let x in myObj) {
		console.log(`${x} - ${myObj[x]}`);
		// console.log(typeof(key));
	}

	var user = {
		'name': 'Cody',
		'password': '1-sdkfj1-2535dkfs',
		'email': 'cody@cody.com'
	}

	var post = {
		'title': 'alsdfjka;lfkjas',
		'content': 'alsdkfja;sdfsdf',
		'user': 'Cody'
	}

	// person.retire()
	// console.log(person.current_team)
	// console.log(person.active);
	// console.log(myObj);

	// for(let i = 0; i < person.past_teams.length; i++){
	// 	console.log(person.past_teams[i]);
	// }

	// for(let team of person.past_teams) {
	// 	console.log(team);
	// }

	// console.log(this);

	// we can access the value for a given key
	// in 2 ways

	// // square-bracket notation
	// console.log(myObj['name']);
	// console.log(myObj['profession']);

	// // dot notation
	// console.log(myObj.age);
	// myObj.growOlder();
	// console.log(myObj.age);
}

learningObjects();
