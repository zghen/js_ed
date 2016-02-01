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
	var button2 = generate('button', 'Remove');
	var p = generate('p', cat.price);

	[img, button, button2, p].forEach(function(element){
		div.appendChild(element);
	});

	return div;
}	