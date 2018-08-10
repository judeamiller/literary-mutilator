
function futuramaBlue() {
	var futuramaPagraph = document.getElementById("futurama");
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



function rot13(string) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
}