(function() {

if (!window.AcmeCorporation) window.AcmeCorporation = {};

if (!AcmeCorporation.Apps) AcmeCorporation.Apps = {};

AcmeCorporation.Apps.FacebookLike = function(config) {
	var target = config.target[0];

	if (!config.href || !config.appId) {
		var message = document.createElement("div");
		message.innerHTML = "Error: config is incomplete, the URL and the appId are required";
		target.appendChild(message);
		return;
	}

	var iframe = document.createElement("iframe");
	iframe.src = "http://www.facebook.com/plugins/like.php?" + [
		["href", config.href].join("="),
		["colorscheme", config.scheme].join("="),
		["appId", config.appId].join("=")
	].join("&");

	iframe.scrolling = "no";
	iframe.frameborder = "0";
	iframe.height = "80px";
	iframe.width = "100%";
	iframe.allowTransparency = "true";
	iframe.setAttribute("style", "width: 100%; height: 80px; border: none; overflow: hidden");

	target.appendChild(iframe);
};

})();
