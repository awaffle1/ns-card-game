var rarities = ["common", "uncommon", "rare", "ultra-rare", "epic", "legendary"]

var commonnames = ["Doge Land", "Astrobolt", "Erynia and Draconia", "Waterfall State", "Reru Tanda", "Quebecshire", "EBay", "Sandpine Republic", "Womble-by-the-Sea", "A bloodred moon", "The Time Gem", "Quantum fartbox"]
var cvalues = ["0.01", "0.05", "0.1", "0.5", "1", "2", "3", "5"]

var ucommonnames = ["Nonadia", "Toerana", "Chacapoya", "Dilber", "HumanSanity", "Kemonomica", "New Visayan Islands", "Varanius", "Altino", "Bobberino", "Electrum", "Evve Terre"]
var ucvalues = ["0.05", "0.25", "0.5", "0.75", "1", "2.5", "4", "6"]

var rarenames = ["Blackthorn Shade", "PenguinPies", "Marxmeans", "One Small Island", "North Prarie", "Arcis Concordis", "The"]
var rvalues = ["0.1", "0.25", "0.5", "0.75", "1.5", "3", "5", "7.5"]

var urarenames = ["New Makasta", "Agalaesia", "Meropis", "Wolflandil", "Warzone Codger", "Concrete Slab"]
var urvalues = ["0.5", "0.75", "1", "2", "4", "5", "7.5", "10"]

var epicnames = ["Fauxia", "Drawkland", "Le Libertia", "New Rogernomics", "Esternial", "Lamebrainia"]
var evalues = ["0.75", "1.5", "3", "5", "7.5", "10", "12.5", "15"]

var legnames = ["Candensia", "Eluvatar", "Frisbeeteria", "Lamoni", "Testlandia"]
var lvalues = ["1", "3", "5", "8", "10", "12.5", "15", "17"]

function getDeck() {
	let deck = new Array();
	
	for (let i = 0; i < rarities.length; i++) {
		for (let c = 0; c < commonnames.length; c++) {
			let card = {Value: Math.floor(Math.random() * cvalues.length), Rarity: "common", Name: commonnames[c]};
			deck.push(card);
		} for (let u = 0; u < ucommonnames.length; u++) {
			let card = {Value: Math.floor(Math.random() * ucvalues.length), Rarity: "uncommon", Name: ucommonnames[u]};
			deck.push(card);
		} for (let r = 0; r < rarenames.length; r++) {
			let card = {Value: Math.floor(Math.random() * rvalues.length), Rarity: "rare", Name: rarenames[r]};
			deck.push(card);
		} for (let x = 0; x < urarenames.length; x++) {
			let card = {Value: Math.floor(Math.random() * urvalues.length), Rarity: "ultra-rare", Name: urarenames[x]};
			deck.push(card);
		} for (let e = 0; e < epicnames.length; e++) {
			let card = {Value: Math.floor(Math.random() * evalues.length), Rarity: "epic", Name: epicnames[e]};
			deck.push(card);
		} for (let l = 0; l < legnames.length; l++) {
			let card = {Value: Math.floor(Math.random() * lvalues.length), Rarity: "legendary", Name: legnames[l]};
		}
	}
	
	return deck;
}

function shuffle(deck) {
	// shuffle 1000 times
	for (let i = 0; i < 1000; i++) {
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function renderDeck(deck) {
	document.getElementbyId("deck").innerHTML = "";
	
	for (let i = 0; i < deck.length; i++) {
		let card = document.createElement("div");
		// rarity sign
		let rsign = "";
		if (deck[i].Rarity == "common")
		rsign = "C";
		else if (deck[i].Rarity == "uncommon")
		rsign = "UC";
		else if (deck[i].Rarity == "rare")
		rsign = "Rare";
		else if (deck[i].Rarity == "ultra-rare")
		rsign = "UR";
		else if (deck[i].Rarity == "epic")
		rsign = "Epic";
		else
		rsign = "L";

		card.innerHTML = deck[i].Name + '' + rsign + '' + deck[i].Value;
		card.className = 'card';
	document.getElementbyId("deck").appendChild(card);
	}
}

function dealCard(deck) {
	return deck.pop();
}

let card = dealCard(deck1);
console.log(card);
