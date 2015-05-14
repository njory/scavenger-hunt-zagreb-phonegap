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
                navigationBar.on('touchstart', '.hint-button', me.onAskHint);
		messageBox.on('touchstart', '.button.confirm-abcd', me.onMessageBoxConfirm);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"ZAGREB",
			"left-button close",
			"right-button info",
			"fa fa-times",
			"fa fa-info",
                        "hide hint"
		);

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
				controllers.Common.showMessageBox("Odgovor je točan.\
					Uspjeli ste iz " + (activeGame.numberOfFails + 1) +
					". pokušaja.", "Potvrdi", "button confirm-abcd", false);

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
	onAskHint: function() {
                var activeGame = controllers.Map.activeGame;
		controllers.Common.showMessageBox("Hint: Tocan odgovor je " + activeGame.game.question.correctAnswer + ".", "", "button no-button", true);
	}
};