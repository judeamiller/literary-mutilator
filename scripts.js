
function futuramaBlue() {
	var futuramaPagraph = document.getElementById("futurama");
	futuramaPagraph.style.color = "blue";
}

function textReplace() {
	let text = document.getElementById("holland");
	document.body.innerHTML = document.body.innerHTML.replace ('girl' , 'CAPTAIN');
	console.log(this);
}

function textReplace2() {
	let text = document.getElementById("holland");
	document.body.innerHTML = document.body.innerHTML.replace ('1945' , 'IN THE YEAR 2000');
	console.log(this);
}



function rot13(string) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
}