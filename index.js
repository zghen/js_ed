var Item = function(name, price) {
	this.name = name;
	this.price = price;
}

//Here I should create objects array with all cats
var itemCat1 = new Item("Tiger", 90);
var itemCat2 = new Item("Mishka", 10);
var itemCat3 = new Item("Sam", 70);
var itemCat4 = new Item("Sleepy", 870);
var itemCat5 = new Item("Ryzhyk", 90);

var Buy = document.getElementsByTagName('button');

var Cashier = {
	total : 0,
	getEl : function(){
		var El = document.getElementsByTagName('p');
		for (var i = 0; i < El.length; i++) {
			price = itemCat[i].price;
			Cashier.total += i;
			return Cashier.total;
		};
	}
}


Buy[0].addEventListener('click', function(){
	Cashier.getEl();
	console.log(Cashier.total);
});