
//This function changes the color of the futurama paragraph
function futuramaBlue() {
	let futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "blue";
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

//Rot 13 Encryption

// function rot13(string) {
// 	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// 	var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
// }


//Fetch Data From JSONPlaceholder.typicode
function textInsert(){
	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(res => res.json());

	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(res => res.json())
		.then((data) => {
			data.forEach(function (user){
				output = `
			<p> ${user.body}	</p>`;
				document.getElementById('fillHere').innerHTML = output
			});
		});
};

