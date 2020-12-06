if (done != 1 && window.location.hostname.match(/\w*\.\w*$/gi)[0] + window.location.pathname == "parentlocker.com/sis/directory.php" && new URL(location.href).searchParams.get('i') != null && document.body.innerHTML != "Unauthorized Access.") {
	var done = 1;
	var buttonLink = document.createElement("a");
	var buttonPicture = document.createElement("img");
	var buttonText = document.createTextNode("Excel");
	buttonPicture.setAttribute("src", "../images/page_white_excel.png");
	buttonLink.setAttribute("href", window.location.href.substring(window.location.href.lastIndexOf('/')+1) + "&media=excel");
	buttonLink.setAttribute("class", "toplink");
	buttonLink.appendChild(buttonPicture);
	buttonLink.appendChild(buttonText);
	document.getElementsByClassName("noprint noprinttop")[0].id = "addExcel";
	addId = document.getElementById("addExcel");
	addId.insertBefore(buttonLink, addId.childNodes[2]);
};