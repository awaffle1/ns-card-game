let rarities = ["common", "uncommon", "rare", "ultra-rare", "epic", "legendary"]

let commonnames = ["Doge Land", "Astrobolt", "Erynia and Draconia", "Waterfall State", "Reru Tanda", "Quebecshire", "EBay", "Sandpine Republic", "Womble-by-the-Sea", "A bloodred moon", "The Time Gem", "Quantum fartbox"]
let cvalues = ["1", "2", "3", "4", "5"]

let ucommonnames = ["Nonadia", "Toerana", "Chacapoya", "Dilber", "HumanSanity", "Kemonomica", "New Visayan Islands", "Varanius", "Altino", "Bobberino", "Electrum", "Evve Terre"]
let ucvalues = ["1", "2", "3", "4", "6", "8"]

let rarenames = ["Blackthorn Shade", "PenguinPies", "Marxmeans", "One Small Island", "North Prarie", "Arcis Concordis", "The"]
let rvalues = ["2", "4", "6", "7", "8", "10"]

let urarenames = ["New Makasta", "Agalaesia", "Meropis", "Wolflandil", "Warzone Codger", "Concrete Slab"]
let urvalues = ["3", "5", "7", "8", "10", "11", "13", "15"]

let epicnames = ["Fauxia", "Drawkland", "Le Libertia", "New Rogernomics", "Esternial", "Lamebrainia"]
let evalues = ["5", "7", "8", "9", "11", "13", "15", "17"]

let legnames = ["Candensia", "Eluvatar", "Frisbeeteria", "Lamoni", "Testlandia"]
let lvalues = ["10", "12", "15", "17", "19", "20", "22", "25"]

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

function renderDeck(deck) {
	document.getElementById("deck").innerHTML = "";
	
	for (let i = 0; i < deck.length; i++) {
		let card = document.createElement("div");
		// rarity sign
		let rsign = "";
		if (deck[i].Rarity == "common")
		rsign = "Common";
		else if (deck[i].Rarity == "uncommon")
		rsign = "Uncommon";
		else if (deck[i].Rarity == "rare")
		rsign = "Rare";
		else if (deck[i].Rarity == "ultra-rare")
		rsign = "Ultra-Rare";
		else if (deck[i].Rarity == "epic")
		rsign = "Epic";
		else
		rsign = "Legendary";

		card.innerHTML = deck[i].Name + '\n\n' + rsign + '\n\n' + deck[i].Value;
		card.className = 'card';
	document.getElementById("deck").appendChild(card);
	}
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

	renderDeck(deck);
}

function dealCard(deck) {
	return deck.pop();
}

let deck = getDeck()

let card = dealCard(deck);
console.log(card);
