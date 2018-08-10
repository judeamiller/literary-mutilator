
function futuramaBlue() {
	let futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "blue";
}

function textReplace() {
	document.getElementById("holland").innerHTML = document.getElementById("holland").innerHTML.replace ('girl' , 'CAPTAIN');
	console.log(this);
}

function textReplace2() {
	document.getElementById("holland").innerHTML = document.getElementById("holland").innerHTML.replace ('1945' , 'IN THE YEAR 2000');
	console.log(this);
}



// function rot13(string) {
// 	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// 	var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
// }


var paragraph = document.querySelector("fillHere");

var requestURL = 'https://jsonplaceholder.typicode.com/posts/1';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload= function() {
	var paragraph = request.response;
	populateParagraph(paragraph);
	showParagraph(paragraph);
}

function populate