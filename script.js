window.onload = function() {
	if(window.innerWidth >= 1024) {
		document.getElementById("desktopMain").hidden = false;
		document.getElementById("mobileMain").hidden = true;
	} else {
		document.getElementById("desktopMain").hidden = true;
		document.getElementById("mobileMain").hidden = false;
	}

	
	
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

function mobileQuery() {
	window.location = "https://www.google.com/search?q=" + document.getElementById("searchField").value;
}

function desktopQuery() {
	window.location = "https://www.google.com/search?q=" + document.getElementById("desktopSearchField").value;
}

window.onresize = function() {
	if(window.innerWidth >= 1024) {
		document.getElementById("desktopMain").hidden = false;
		document.getElementById("mobileMain").hidden = true;
	} else {
		document.getElementById("desktopMain").hidden = true;
		document.getElementById("mobileMain").hidden = false;
	}
};