if (window.location.host + window.location.pathname == "www.youtube.com/watch") { // Checks if you are actually on YouTube
	if (document.getElementById("reason") == null) { // Checks if the video exists or not
		alert("Click this bookmarklet in the page that will open to play the video."); // Tells you to click the bookmarklet again
		window.open("https://keepvid.works/?url=" + window.location); // Opens a new tab with Keepvid and the video you were just in
	} else {
		alert("Error 404: The video you are looking for was lost, stolen, or may never have existed"); // If the video doesn't exist, you see this message.
	}
} else if (window.location.pathname == "keepvid.works") { // Checks if you are on Keepvid
	document.getElementsByClassName("btn btn-lg btn-danger")[0].click(); // Presses the download button (if there isn't one, nothing happens)
} else {
	var video = encodeURI(prompt("Paste the video URL here (if you didn't copy it yet, press cancel).")); // If you are on a completely different site, like your email, the script will allow you to paste in the URL
	if (video.includes("youtube.com/watch")) { // Checks if your link is a valid YouTube link
		alert("Click this bookmarklet after the page redirects to play the video."); // Tells you to click the bookmarklet again
		window.open("https://keepvid.works/?url=" + video); // Opens a new tab with Keepvid and the video you pasted
	}
};