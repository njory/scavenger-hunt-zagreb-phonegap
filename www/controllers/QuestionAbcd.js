controllers.QuestionAbcd = {
	init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
			view = views.QuestionAbcd,
			navigationBar = views.NavigationBar,
			messageBox = views.MessageBox;

		view.on('touchstart', '.a', me.onAnswerSelect);
		navigationBar.on('touchstart', '.left-button.back-from-abcd', me.onBack);
		navigationBar.on('touchstart', '.right-button.confirm-abcd', me.onConfirm);
		messageBox.on('touchstart', '.button.confirm-abcd', me.onMessageBoxConfirm);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"KARTA",
			"left-button back-from-map",
			"right-button info",
			"fa fa-chevron-left",
			"fa fa-info"
		);

                controllers.QuestionAbcd.stopTimer();
		controllers.Map.refreshCircles();
		views.Map.show(200);
		views.QuestionAbcd.hide(200);
	},
	onConfirm: function() {
		var controller = controllers.QuestionAbcd,
			view = views.QuestionAbcd,
			answers = view.find(".answers"),
			selectedAnswer = answers.find(".a.selected .text"),
			gameIndex = controllers.Map.activeGameIndex,
			activeGame = controllers.Map.activeGame;

		if(selectedAnswer.length === 0) {
			controllers.Common.showMessageBox("Niste odabrali niti jedan odgovor", "", "button no-button", true);
		}
		else {

			if(selectedAnswer.attr("data-correct") == "Y") {
                                var me = controllers.QuestionAbcd;
                                var points = 100 - 25 * activeGame.numberOfFails;
                                if (points < 25) points = 25;
				controllers.Common.showMessageBox("Odgovor je točan.\
					Uspjeli ste iz " + (activeGame.numberOfFails + 1) +
					". pokušaja. Osvojili ste " + (points) + " bodova.", 
                                        "Potvrdi", "button confirm-abcd", false);
                                
                                var cscore = models.Score.getCurrentScore();
                                cscore = cscore + points;
                                models.Score.setCurrentScore(cscore);
                                me.stopTimer();
                                models.Score.setCurrentTime(0);
                                models.Score.syncData();
                                
				activeGame.status = "finished";
				models.Games.activateNextGame(gameIndex + 1);
			} else {
				controllers.Common.showMessageBox("Odgovor nije točan. Pokušajte ponovo...", "", "button no-button", true);
				activeGame.numberOfFails++;
			}

			models.Games.setGameByIndex(gameIndex, activeGame);
			models.Games.syncData();
		}
	},
	onMessageBoxConfirm: function() {
		var controller = controllers.QuestionAbcd,
			messageBox = views.MessageBox;

		messageBox.hide();
		controller.onBack();
	},
	onAnswerSelect: function() {
		var controller = controllers.QuestionAbcd,
			selected = $(this);
			
			controller.clearAnswers();
			selected.addClass("selected");
	},
	clearAnswers: function() {
		var view = views.QuestionAbcd,
			answers = view.find(".answers"),
			answerDivs = answers.find(".a"),
			a;
			
			for(var i = 0; i < answerDivs.length; i++) {
				a = answerDivs.eq(i);
				a.removeClass("selected");
			}
	},
        time: 0,
        timer: null,
	startTimer: function() {
		this.time = models.Score.getCurrentTime();
                this.timer = setInterval(function () {
                    var me = controllers.QuestionAbcd;
                    me.time++;
                    var minutes = Math.floor(me.time / 60);
                    var seconds = me.time % 60;
                    var leadingZero;
                    if(seconds < 10) leadingZero = "0";
                    else leadingZero = "";
                    views.NavigationBar.find(".title").eq(0).html(minutes + " : " + leadingZero + seconds);
                }, 1000);
	},
	stopTimer: function() {
                if(this.timer != null){
                    clearInterval(this.timer);
                    models.Score.setCurrentTime(this.time);
                    models.Score.syncData();
                    this.timer = null; this.time = 0;
                }
	}
};