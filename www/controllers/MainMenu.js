var zvuk;

controllers.MainMenu = {
	init: function() {
		var me = this;
		controllers.zvuk = new Audio("sound/music.mp3");
		controllers.zvuk.loop = true;
		controllers.zvuk.play();
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
		view = views.MainMenu;

		view.on('touchstart', '.button.play', me.onPlay);
                view.on('touchstart', '.button.score', me.onScore);
                view.on('touchstart', '.button.help', me.onHelp);
                view.on('touchstart', '.button.soundOn', me.onSound);
		view.on('touchstart', '.button.soundOff', me.onSound);
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
	},
        onScore: function() {
            controllers.Score.setScoreBoard();
            
            views.Score.show(200);
            views.MainMenu.hide(200);
            
            controllers.Common.switchNavigationBar(
			"BODOVI",
			"left-button back-from-score",
			"right-button info",
			"fa fa-chevron-left",
			"fa fa-info"
            );
        },
        onHelp: function() {
            views.Help.show(200);
            views.MainMenu.hide(200);
            
            controllers.Common.switchNavigationBar(
			"POMOĆ",
			"left-button back-from-help",
			"right-button info",
			"fa fa-chevron-left",
			"fa fa-info"
            );
        },
        onSound: function() {
		var soundButton = document.getElementById("sound");
		if(controllers.zvuk.paused){
			controllers.zvuk.play();
			soundButton.className = "button soundOn";
			}
		else{
			controllers.zvuk.pause();
			soundButton.className = "button soundOff";
			}
	}
};


