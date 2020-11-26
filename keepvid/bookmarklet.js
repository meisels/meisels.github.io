if ((window.location.host + window.location.pathname == "www.youtube.com/") || (window.location.host + window.location.pathname == "www.youtube.com")) {
	alert("Do you know the difference between YouTube and a YouTube VIDEO????????");
} else {
	if (window.location.host + window.location.pathname == "www.youtube.com/watch") {
		if (document.getElementById("reason") == null) {
			window.location.replace("https://keepvid.works/?url=" + window.location);
			setTimeout(pressButton, 3000);
		} else {
			alert("Error 404: The video you are looking for was lost, stolen, or may never have existed. But in all probability, it was probably taken down or made private. Unless you are trying to break my precious bookmarklet, in which case you should be ashamed of yourself!!!!!");
		}
	} else {
		alert("Please click this on a YouTube video ONLY!!!!!!");
	}
};

function pressButton() {
	alert("hi");
};