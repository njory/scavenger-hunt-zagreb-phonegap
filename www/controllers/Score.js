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
	},
	setScoreBoard: function() {
		var scoreView = views.Score,
			e1n = scoreView.find(".entry.first .name").eq(0),
			e2n = scoreView.find(".entry.second .name").eq(0),
			e3n = scoreView.find(".entry.third .name").eq(0),
			e4n = scoreView.find(".entry.fourth .name").eq(0),
			e5n = scoreView.find(".entry.fifth .name").eq(0),
                        e1s = scoreView.find(".entry.first .score").eq(0),
			e2s = scoreView.find(".entry.second .score").eq(0),
			e3s = scoreView.find(".entry.third .score").eq(0),
			e4s = scoreView.find(".entry.fourth .score").eq(0),
			e5s = scoreView.find(".entry.fifth .score").eq(0);

			e1n.html("prvi");
			e1s.html(12345);

			e2n.html("drugi");
			e2s.html(1234);

			e3n.html("treci");
			e3s.html(123);

			e4n.html("cetvrti");
			e4s.html(12);
                        
			e5n.html("peti");
			e5s.html(1);

	}
};

