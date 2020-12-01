if (done != 1 && window.location.hostname.match(/\w*\.\w*$/gi)[0] + window.location.pathname == "parentlocker.com/sis/directory.php" && new URL(location.href).searchParams.get('i') != null) {
	var done = 1;
	var x = document.createElement("A");
	var elem = document.createElement("img");
	var t = document.createTextNode("Excel");
	elem.setAttribute("src", "https://www.parentlocker.com/images/page_white_excel.png");x.setAttribute("href", "javascript:window.location.replace(window.location + '&media=excel');");
	x.setAttribute("class", "toplink");
	x.appendChild(elem);
	x.appendChild(t);
	document.getElementsByClassName("noprint noprinttop")[0].id = "addexcel";
	addId = document.getElementById("addexcel");
	addId.insertBefore(x, addId.childNodes[2]);
};