window.onload = function() {
	document.getElementsByTagName('nav')[0].style.maxHeight = "0px";

	document.getElementById('hamburger').addEventListener("click", function() {
		if(document.getElementsByTagName('nav')[0].style.maxHeight == "0px")
			document.getElementsByTagName('nav')[0].style.maxHeight = document.getElementsByTagName('nav')[0].scrollHeight + "px";
		else
			document.getElementsByTagName('nav')[0].style.maxHeight = "0px";
	});

};

function loadCart() {
	window.location = "cart.html";
}
