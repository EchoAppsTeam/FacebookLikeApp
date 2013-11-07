(function() {

if (!window.AcmeCorporation) window.AcmeCorporation = {};

if (!AcmeCorporation.Apps) AcmeCorporation.Apps = {};

if (!AcmeCorporation.Apps.FacebookLike) AcmeCorporation.Apps.FacebookLike = {};

AcmeCorporation.Apps.FacebookLike.Dashboard = function(config) {
	var target = config.target;
	var instance = config.data.instance;

	var appId = this.createInput({
		"target": target,
		"caption": "App ID",
		"value": instance.config.appId
	});
	var URL = this.createInput({
		"target": target,
		"caption": "URL",
		"value": instance.config.href
	});

	var scheme = this.createSelect({
		"target": target,
		"caption": "Color scheme",
		"options": ["light", "dark"],
		"value": instance.config.scheme
	});
	target.appendChild(document.createElement("br"));

	this.createButton({
		"target": target,
		"caption": "Save",
		"onclick": function() {
			config.request({
				"endpoint": "instance/{data:instance.id}/update",
				"data": {
					"config": {
						"appId": appId.value,
						"href": URL.value,
						"scheme": scheme.value
					}
				}
			});
		},
		"style": "margin-left: 170px;"
	});

	// apply 'ready' callback when dashboard rendering is complete
	config.events.ready.apply(this);
};

AcmeCorporation.Apps.FacebookLike.Dashboard.prototype.createInput = function(config) {
	var label = document.createElement("label");
	label.innerHTML = config.caption || "";
	config.target.appendChild(label);

	var input = document.createElement("input");
	input.type = "text";
	input.value = config.value || "";
	config.style && input.setAttribute("style", config.style);
	config.target.appendChild(input);
	return input;
};

AcmeCorporation.Apps.FacebookLike.Dashboard.prototype.createSelect = function(config) {
	var addOption = function(select, value, selectedValue) {
		var option = document.createElement("option");
		option.text = option.value = value;
		if (selectedValue === value) {
			option.setAttribute("selected", selectedValue);
		}
		select.appendChild(option);
	}

	var label = document.createElement("label");
	label.innerHTML = config.caption || "";
	config.target.appendChild(label);

	var select = document.createElement("select");
	config.style && select.setAttribute("style", config.style);
	for (var i = 0; i < config.options.length; i++) {
		addOption(select, config.options[i], config.value);
	}
	config.target.appendChild(select);
	return select;
};

AcmeCorporation.Apps.FacebookLike.Dashboard.prototype.createButton = function(config) {
	var button = document.createElement("button");
	button.innerHTML = config.caption || "";
	config.style && button.setAttribute("style", config.style);
	button.onclick = config.onclick || function() {};
	config.target.appendChild(button);
	return button;
};

})();
