var Cashier = {
	total : 0
}

var Item = function(name, price) {
	this.name = name;
	this.price = price;
}



var askKind = prompt('Which item would you like to buy?');

apple = new Item('apple', 100);

if (askKind === 'apple') {
	console.log('You"ve bought an apple!');
	Cashier.total += apple.price;
};

console.log(Cashier.total);