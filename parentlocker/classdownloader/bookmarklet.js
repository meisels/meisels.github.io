if (done != 1 && window.location.hostname.match(/\w*\.\w*$/gi)[0] + window.location.pathname == "parentlocker.com/sis/directory.php" && new URL(location.href).searchParams.get('i') != null && document.body.innerHTML != "Unauthorized Access.") {
	var done = 1;
	var buttonLink = document.createElement("a");
	var buttonPicture = document.createElement("img");
	var buttonText = document.createTextNode("Excel");
	elem.setAttribute("src", "../images/page_white_excel.png");x.setAttribute("href", "javascript:window.location.replace(window.location + '&media=excel');");
	buttonLink.setAttribute("class", "toplink");
	buttonLink.appendChild(buttonPicture);
	buttonLink.appendChild(buttonText);
	document.getElementsByClassName("noprint noprinttop")[0].id = "addExcel";
	addId = document.getElementById("addExcel");
	addId.insertBefore(buttonLink, addId.childNodes[2]);
} else if (done == 1 && window.location.hostname.match(/\w*\.\w*$/gi)[0] + window.location.pathname == "parentlocker.com/sis/directory.php" && new URL(location.href).searchParams.get('i') != null) {

	window.location.replace("javascript:window.location.replace(window.location + '&media=excel');");

};