if (window.location.hostname.match(/\w*\.\w*$/gi)[0] + window.location.pathname == "parentlocker.com/sis/directory.php" && new URLSearchParams('i') != null) {
	window.location.replace(window.location + "&media=excel")
};