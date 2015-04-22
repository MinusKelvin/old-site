function runDomScanner() {
	var baseNode = document.createElement("DIV");
	baseNode.id = "window-base-domscanner";
	baseNode.style.backgroundColor = "#ddd";
	baseNode.style.boxShadow = "0 0 1em #000";
	baseNode.style.position = "fixed";
	baseNode.style.left = "64px";
	baseNode.style.top = "56px";
	baseNode.style.maxWidth = "30em";
	baseNode.style.width = "30em";
	baseNode.style.padding = "0";
	baseNode.style.margin = "0";
	baseNode.style.zIndex = "2000009000";
	
	var topBar = document.createElement("DIV");
	topBar.style.backgroundColor = "#eee";
	topBar.style.width = "30em";
	topBar.style.height = "1.25em";
	topBar.style.left = "0";
	topBar.style.top = "0";
	var startx;
	var starty;
	var posx = 64;
	var posy = 56;
	var dragging = false;
	topBar.onmousedown = function(event) {
		console.log(event.x + "," + event.y + "," + event.button);
		startx = event.x;
		starty = event.y;
		dragging = true;
	};
	topBar.onmousemove = function(event) {
		if (dragging) {
			baseNode.style.left = (posx + (event.x-startx)) + "px";
			baseNode.style.top = (posy + (event.y-starty)) + "px";
		}
	};
	topBar.onmouseup = function(event) {
		if (dragging) {
			baseNode.style.left = (posx + (event.x-startx)) + "px";
			baseNode.style.top = (posy + (event.y-starty)) + "px";
			posx = posx + (event.x-startx);
			posy = posy + (event.y-starty);
			dragging = false;
		}
	};
	topBar.onmouseout = function(event) {
		topBar.onmouseup(event);
	};
	
	var closeButton = document.createElement("A");
	closeButton.style.position = "absolute";
	closeButton.style.right = "0";
	closeButton.style.textDecoration = "none";
	closeButton.href = "javascript:void(0);";
	closeButton.style.fontFamily = "Segoe UI";
	closeButton.onclick = function() {
		var win = document.getElementById("window-base-domscanner");
		win.parentNode.removeChild(win);
	};
	closeButton.appendChild(document.createTextNode("X"));
	topBar.appendChild(closeButton);
	baseNode.appendChild(topBar);
	
	var contentNode = document.createElement("DIV");
	contentNode.style.width = "28em";
	contentNode.style.margin = "0";
	contentNode.style.paddingTop = "0.5em";
	contentNode.style.paddingBottom = "0.5em";
	contentNode.style.paddingLeft = "1em";
	contentNode.style.paddingRight = "1em";
	
	var header = document.createElement("H3");
	header.style.fontFamily = 'Segoe UI Light, Segoe UI, Arial, sans-serif';
	header.style.fontSize = "1.25em";
	header.style.fontWeight = "normal";
	header.style.color = "#222";
	header.style.padding = "0";
	header.style.margin = "0";
	header.style.textAlign = "center";
	header.appendChild(document.createTextNode("Oh, it's you."));
	contentNode.appendChild(header);
	
	var introText = document.createElement("P");
	introText.style.fontFamily = "Segoe UI, Arial, sans-serif";
	introText.style.fontSize = "1em;";
	introText.style.color = "#222";
	introText.style.fontWeight = "normal";
	introText.style.textAlign = "left";
	introText.appendChild(document.createTextNode("How have you been? I've been reeeaaally busy being dead. You know, after you MURDERED ME."));
	contentNode.appendChild(introText);
	
	baseNode.appendChild(contentNode);
	document.body.appendChild(baseNode);
};