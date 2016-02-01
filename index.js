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

	cat = new Cat(name, price,src);
	Basket.addCat(cat);	
	generate('div');
	generate('img', '' , src);
	generate('br');
	generate('button', 'Add');
	generate('button', 'Remove');
	generate('p', price);
};	

/*removeCat = function(cat) {
	removeNodeElement('img');
}
*/
function generate(nodeElement){
	var catNode = document.createElement(nodeElement),
		parent = document.body;
		
		parent.appendChild(catNode);
		console.log(catNode);
};

function divAppend(childElement, html, src){
	var childNode = document.createElement(childElement),
		parent = document.body;

		if(html){
			catNode.innerHTML = html;
		};
		if(src){
			catNode.src = src;
		};
		generate
		parent.appendChild(childElement);


};

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
}*/
//input takes this.name and this.price, button creates new Item and push this.item to Cats[]