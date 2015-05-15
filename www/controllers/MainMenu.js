controllers.MainMenu = {
	init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
			view = views.MainMenu;

		view.on('touchstart', '.button.play', me.onPlay);
	},
	onPlay: function() {
		controllers.Map.refreshCircles();
		views.Map.show(200);
		views.MainMenu.hide(200);
                
                controllers.Common.switchNavigationBar(
			"KARTA",
			"left-button back-from-map",
			"right-button info",
			"fa fa-chevron-left",
			"fa fa-info"
		);
	}
};


