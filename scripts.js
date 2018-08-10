
//This function changes the color of the futurama paragraph
function futuramaBlue() {
	let futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "blue";
}

function futuramaRed() {
	let futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "red";
}

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
	let text = document.getElementById("shuffleMiata").textContent;

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

