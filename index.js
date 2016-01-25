var Item = function(name, price) {
	this.name = name;
	this.price = price;
}

var Cashier = {
	total : 0,
	getEl : function(){
		Cashier.total = 0;
		BoughtCat = [];
		for (var i = 0; i < checkbox.length; i++) {
			var checked = checkbox[i].checked;
				if (checked === true) {
					Cashier.total += Cats[i].price;
					BoughtCat.push(Cats[i].name);
				}
				else {
					
				}	
		};
		return Cashier.total;
	}
}

var BoughtCat = [];
var itemCat1 = new Item("Tiger", 10);
var itemCat2 = new Item("Mishka", 20);
var itemCat3 = new Item("Sam", 30);
var itemCat4 = new Item("Sleepy", 40);
var itemCat5 = new Item("Ryzhyk", 50);
var Cats = [itemCat1, itemCat2, itemCat3, itemCat4, itemCat5];

var buy = document.getElementsByTagName('button');
var checkbox = document.getElementsByTagName('input');
var result = document.getElementById('lol');
var bought = document.getElementById('cats');

buy[0].addEventListener('click', function(){
	Cashier.getEl();
	console.log(Cashier.total);
	lol.innerHTML = 'Total Price = ' + Cashier.total;
	bought.innerHTML = 'You have bought: ' + BoughtCat;
});