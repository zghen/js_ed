var counter = 0;

var createCat = document.getElementById('createCat'),
	calcCat = document.getElementById('calcCat');

calcCat.addEventListener('click', function(){
	var resultCat = document.getElementById('resultCat');
	Basket.sum();
	for (var i = 0; i < Basket.items.length; i++) {
		if (Basket.items[i].bought === true && Basket.total != 0) {
			resultCat.innerHTML = 'Your total is = ' + Basket.total;
		}
		if (Basket.total === 0) {
			resultCat.innerHTML = 'You have bought any cats! ';
		}
	};
});

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
		total : 0,
		items : [],
		addCat : function(cat) {			
			this.items.push(cat);
		},
		deleteCat : function(cat) {
			var index = this.items.indexOf(cat);
			this.items.splice(index, 1);
		},
		sum: function() {
			this.total = 0;
			this.items.forEach(function(element, index, arr){
				if(arr[index].bought === true){
					var price = parseInt(arr[index].price);					
					return this.total += price;
				}
			}, this);
		}
}

function generateCat(name, price, src){
	var cat = new Cat(name, price, src);
	Basket.addCat(cat);
	var div = generateDiv(cat);
	document.body.appendChild(div);
	
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
		button.addEventListener('click', function(){
			cat.bought = true;
	});
	var button2 = generate('button', 'Remove');
		button2.addEventListener('click', function(){
			cat.bought = false;
	});
	var button3 = generate('button', 'Delete');
		button3.addEventListener('click', function(){
			Basket.deleteCat(cat);
			document.body.removeChild(div);
		});

	var p = generate('p', cat.price);

	[img, button, button2, button3, p].forEach(function(element){
		div.appendChild(element);
	});

	return div;
}	