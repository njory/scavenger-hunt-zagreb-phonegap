var controllers = {};
var views = {};
var models = {};
var data = {};

controllers.Main = {
	init: function() {
		var me = this,
			isProduction = me.isProduction();

		document.addEventListener('deviceready', me.onDeviceReady, false);
		document.addEventListener('backbutton', function(event) {
            me.onBackButtonPress(event);
        }, false);

		if(!isProduction) {
			me.onDeviceReady();
		}
	},
	isProduction: function() {
		return (typeof cordova !== "undefined");
	},
	onDeviceReady: function() {
		var me = controllers.Main;

		models.Locations.init();
		models.Questions.init();
		models.Games.init();
                models.Score.init();

		if(!models.Games.getAllGames()) {
			me.generateGames();
		}

		me.bindEvents();

		controllers.Common.init();
                controllers.MainMenu.init();
		controllers.Map.init();
                controllers.Score.init();
                controllers.Help.init();
		controllers.QuestionAbcd.init();
		controllers.QuestionInput.init();
                controllers.QuestionOrder.init();
		
		me.showMainMenuView();
	},
	bindEvents: function() {
		var me = this;
		views.NavigationBar.on('touchstart', '.left-button.close', me.onAppClose);
		views.NavigationBar.on('touchstart', '.right-button.info', me.onInfo);
	},
	onBackButtonPress: function(event) {
		event.preventDefault();
		if(!views.MessageBox.is(":visible")) {
			var leftButton = views.NavigationBar.find(".left-button").eq(0);
			leftButton.trigger('touchstart');
		}
	},
	showMainMenuView: function() {
		var splashScreen = views.SplashScreen,
			mainView = views.MainMenu,
			navigationBar = views.NavigationBar,
			footer = views.Footer;

		splashScreen.hide(2000, function() {
			mainView.show(200);
			navigationBar.show(200);
			footer.show(200);
		});
	},
	onAppClose: function() {
		navigator.app.exitApp();
	},
	onInfo: function() {
		controllers.Common.showMessageBox("Aplikaciju izradio tim Clue,\
			kolegij PPIJ - FER 2015, u sastavu: Nejra Muslić, Andrej Šeškar, Mateo Šimonović i Tomislav Huljina", "Zatvori", "button close-info", true);
	},
	generateGames: function() {
		var me = this,
			allLocations = models.Locations.getAllLocations(),
			allQuestions = models.Questions.getAllQuestions(),
			selectedLocations = me.shuffleArray(allLocations),
			selectedQuestions = me.shuffleArray(allQuestions);

		var games = new Array(7);

		for(var i = 0; i < 7; i++) {
			games[i] = {
				location: selectedLocations[i],
				game: selectedQuestions[i],
				status: i === 0 ? 'active' : 'disabled',
				numberOfFails: 0
			};
		}

		models.Games.setAllGames(games);
		models.Games.syncData();
	},
	shuffleArray: function(o) {
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	}
};
