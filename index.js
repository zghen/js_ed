var counter = 0;

var createCat = document.getElementById('createCat');

createCat.addEventListener('click', function(){
	var name = document.getElementById('catName').value;
	var price = document.getElementById('catPrice').value;
	var src = document.getElementById('catSrc').value;
	generateCat(name, price, src);
});

var Cat = function(name, price, src) {
	this.name = name;
	this.price = price;
	this.bought = false;
	this.src = src;
	this.id = 'Cat' + ++counter;
 };

var Basket = {
		catArray : [],
		addCat : function(cat) {			
			Basket.catArray.push(cat);
		},
		removeCat : function(cat) {

			Basket.catArray[0];			
		}
};


function generateCat(name, price, src){
	var cat = new Cat(name, price, src);
	Basket.addCat(cat);
	var div = generateDiv(cat);
	document.body.appendChild(div);
	div.button.addEventListener	
}

function generate(element, html, src) {
	var generated = document.createElement(element);

		if(html){
			generated.innerHTML = html;
		}

		if(src){
			generated.src = src;
		}

	return generated;
}

function generateDiv(cat) {
	var div = generate('div');

	var img = generate('img', '' , cat.src);
	var button = generate('button', 'Add');
	var button2 = generate('button', 'Remove');
	var p = generate('p', cat.price);

	[img, button, button2, p].forEach(function(element){
		div.appendChild(element);
	});

	return div;
}	


/*removeCat = function(cat) {
	removeNodeElement('img');
}
*/

/*function generate(childElement, parentElement, html, src, className){
	var childNode = document.createElement(childElement),
		parent = parentElement;

		if(html){
			childNode.innerHTML = html;
		};
		if(src){
			childNode.src = src;
		};
		if(className){
			childNode.className = className;
		}
		parent.appendChild(childNode);
};*/

/*removeNodeElement = function(nodeElement){
	var catNode = document.getElementById('cat');
	parent = document.body;
	parent.removeChild(nodeElement);
}*/




/*buy[0].addEventListener('click', function(){
	Cashier.getEl();
	console.log(Cashier.total);
	lol.innerHTML = 'Total Price = ' + Cashier.total;
	bought.innerHTML = 'You have bought: ' + BoughtCat;
});*/


/*var Cashier = {
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
<<<<<<< 6c034b8832084c1a909d66b9e4a8b00171811469
}

var BoughtCat = [];
//input takes this.name and this.price, button creates new Item and push this.item to Cats[]
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
=======
}*/