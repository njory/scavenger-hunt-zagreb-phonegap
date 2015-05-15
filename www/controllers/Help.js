controllers.Help = {
	init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
		view = views.Help,
		navigationBar = views.NavigationBar;

		navigationBar.on('touchstart', '.left-button.back-from-help', me.onBack);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"ZAGREB",
			"left-button close",
			"right-button info",
			"fa fa-times",
			"fa fa-info"
		);

		views.MainMenu.show(200);
		views.Help.hide(200);
	}
};


