controllers.Score = {
	init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
		view = views.Score,
		navigationBar = views.NavigationBar;
        
		navigationBar.on('touchstart', '.left-button.back-from-score', me.onBack);
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
		views.Score.hide(200);
	}
};

