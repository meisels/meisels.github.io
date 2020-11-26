if (window.location.host + window.location.pathname == "www.youtube.com/watch") {
	if (document.getElementById("reason") == null) {
		window.open("https://keepvid.works/?url=" + window.location);
		alert("Click this bookmarklet after the page redirects to play the video.");
	} else {
		alert("Error 404: The video you are looking for was lost, stolen, or may never have existed. But in all probability, it was probably taken down or made private. Unless you are trying to break my precious bookmarklet, in which case you should be ashamed of yourself!!!!!");
	}
} else if (window.location.host == "keepvid.works") {
	window.location.replace(document.getElementsByClassName("btn btn-lg btn-danger")[0].href);
};