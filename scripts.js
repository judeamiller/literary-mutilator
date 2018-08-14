
//This function changes the color of the futurama paragraph
function futuramaBlue() {
	let futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "blue";
}

function futuramaRed() {
	let futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "red";
}

//remove the last word of a string with regex
function removeWord() {
	let paragraphWordRemove = document.getElementById("futurama").textContent;

	wordRemoved = paragraphWordRemove.replace(/\w+[.!?]?$/,'');
	document.getElementById("futurama").textContent = wordRemoved;
}

//press N to enhance
function enhance(e) {
	if(e.keyCode == "78") {
		document.getElementById("title").innerHTML = document.getElementById("title").innerHTML.replace("Mutilator", '<span class="bg-warning">Enhancer</span>')
	}
}

window.addEventListener("keydown", enhance);


//The following two textReplace Functions change pre-determined words in a the holland1945 excerpt to completely ruin it.
function textReplace() {
	document.getElementById("holland").innerHTML = document.getElementById("holland").innerHTML.replace ('girl' , '<span class="text-danger">CAPTAIN</span>');
	console.log(this);
}

function textReplace2() {
	document.getElementById("holland").innerHTML = document.getElementById("holland").innerHTML.replace ('1945' , '<span class="text-danger">IN THE YEAR 2000</span>');
	console.log(this);
}

//rearrange
function resort() {
	let text = document.getElementById("shuffleBluth").textContent;

	//make an array of words based on empty spaces
	let words = text.split(" ");

	words.map(function(shuffle) {
		for(i = (words.length - 1); i > 0; i--){

			//create a random number less than or equal to the max array index of words.
			let j = Math.floor(Math.random() * (i + 1));

			//swap out each array index with random number
			let temp = words[i];
			words[i] = words[j];
			words[j] = temp;
		}
		//join the randomized words and insert new paragraph
		document.getElementById("shuffle").textContent = words.join(" ");
	});
}

// anagram function (really just lowercasing and reversing
function anagram() {
	let textToAnagram = document.getElementById("shuffleBluth").textContent;

	//split the words  based on  space to get an array of words
	textToAnagram = textToAnagram.toLocaleLowerCase().split(" ");
	console.log(textToAnagram);
	//create a variable to hold the anagramed words
	let anagramText= [];

	//loop through each word
	for(let i = 0; i < textToAnagram.length; i++) {
		// split, randomize and join each string in the array
		let temporary = textToAnagram[i].split("").reverse().join("");
		anagramText[i] = temporary;
	}

	let shuffleText = anagramText.toString().split(",").join(" ");

	document.getElementById("margana").textContent= shuffleText;

}

// retrieve the second letter from each word
function secondLetter() {
	let textToSecond= document.getElementById("shuffleBluth").textContent;

	//split the words  based on  space to get an array of words
	textToSecond = textToSecond.toLowerCase().split(" ");
	console.log(textToSecond);
	//create a variable to hold the anagramed words
	let secondLetter= [];

	//loop through each word
	for(let i = 0; i < textToSecond.length; i++) {
		// split, randomize and join each string in the array
		let temporary2 = textToSecond[i].charAt(2).split(",").join(" ");
		secondLetter[i] = temporary2;
	}

	let secretMessage = secondLetter.toString().split(",").join('');

	document.getElementById("message").textContent= secretMessage;
}

//Remove Last Character by scrolling
function removeLastChar() {
	let paragraphCharRemove = document.getElementById("holland").textContent;
	charRemoved = paragraphCharRemove.slice(0, -1);
	document.getElementById("holland").textContent = charRemoved;
}

window.addEventListener("scroll", removeLastChar);




//Fetch Data From JSONPlaceholder.typicode
//place normal fetch inside of a function
function textInsert(){
	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(res => res.json());

	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(res => res.json())
		.then((data) => {
			let  postBody= '<p><strong>User Posts:</strong></p>';
			data.forEach(function(post){
				postBody +=
					`<p>${post.body}</p>`;
				document.getElementById('fillHere').innerHTML = postBody
			});
		});
};






//drag and drop
//