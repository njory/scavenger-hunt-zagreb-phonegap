controllers.QuestionInput = {
	init: function(){
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
			view = views.QuestionInput,
			navigationBar = views.NavigationBar,
			messageBox = views.MessageBox;

		//view.on('touchstart', '.inputOne', me.onAnswerSelect); ovo valjda netreba
		navigationBar.on('touchstart', '.left-button.back-from-input', me.onBack);
		navigationBar.on('touchstart', '.right-button.confirm-input', me.onConfirm);
		messageBox.on('touchstart', '.button.confirm-input', me.onMessageBoxConfirm);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"ZAGREB",
			"left-button close",
			"right-button info",
			"fa fa-times",
			"fa fa-info"
		);

		controllers.Map.refreshCircles();
		views.Map.show(200);
		views.QuestionInput.hide(200);
	},
	onConfirm: function() {
		var controller = controllers.QuestionInput,
			view = views.QuestionInput,
			textBox = document.getElementById("inputField"),
			gameIndex = controllers.Map.activeGameIndex,
			activeGame = controllers.Map.activeGame
		
		var selectedValue = textBox.value,
			solution = activeGame.game.question.correctAnswer;
		
		if(selectedValue.length === 0) {
			controllers.Common.showMessageBox("Niste unjeli nikakav odgovor", "", "button no-button", true);
		}
		else {

			if(selectedValue === solution) {
				controllers.Common.showMessageBox("Odgovor je točan.\
					Uspjeli ste iz " + (activeGame.numberOfFails + 1) +
					". pokušaja.", "Potvrdi", "button confirm-input", false);

				activeGame.status = "finished";
				models.Games.activateNextGame(gameIndex + 1);
				textBox.value = "";
			} else {
				controllers.Common.showMessageBox("Odgovor nije točan. Pokušajte ponovo...", "", "button no-button", true);
				activeGame.numberOfFails++;
			}

			models.Games.setGameByIndex(gameIndex, activeGame);
			models.Games.syncData();
		}
	},
	onMessageBoxConfirm: function() {
		var controller = controllers.QuestionInput,
			messageBox = views.MessageBox;

		messageBox.hide();
		controller.onBack();
	},
	onMessageBoxConfirm: function() {
		var controller = controllers.QuestionInput,
			messageBox = views.MessageBox;

		messageBox.hide();
		controller.onBack();
	}
};