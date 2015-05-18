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
                view.on('touchstart', '.hint-button', me.onAskHint);
		navigationBar.on('touchstart', '.left-button.back-from-input', me.onBack);
		navigationBar.on('touchstart', '.right-button.confirm-input', me.onConfirm);
		messageBox.on('touchstart', '.button.confirm-input', me.onMessageBoxConfirm);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"KARTA",
			"left-button back-from-map",
			"right-button info",
			"fa fa-chevron-left",
			"fa fa-info"
		);

                controllers.QuestionInput.stopTimer();
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
                                var me = controllers.QuestionInput;
                                var points = 100 - 10 * activeGame.numberOfFails;
                                points = Math.floor(points / (1 + me.time/600));
                                if (points < 25) points = 25;
                                if(models.Score.getHintUsed()) {
                                    points = Math.floor(points/2);
                                    models.Score.setHintUsed(false);
                                    models.Score.syncData();
                                }
				controllers.Common.showMessageBox("Odgovor je točan.\
					Uspjeli ste iz " + (activeGame.numberOfFails + 1) +
					". pokušaja. Osvojili ste " + (points) + " bodova.", 
                                        "Potvrdi", "button confirm-input", false);
                                
                                var cscore = models.Score.getCurrentScore();
                                cscore = cscore + points;
                                models.Score.setCurrentScore(cscore);
                                me.stopTimer();
                                models.Score.setCurrentTime(0);
                                models.Score.syncData();
                                
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
	onAskHint: function() {
                models.Score.setHintUsed(true);
                models.Score.syncData();
                var activeGame = controllers.Map.activeGame;
		controllers.Common.showMessageBox("Hint: Tocan odgovor je " + activeGame.game.question.correctAnswer + ".", "", "button no-button", true);
	},
        time: 0,
        timer: null,
	startTimer: function() {
		this.time = models.Score.getCurrentTime();
                this.timer = setInterval(function () {
                    var me = controllers.QuestionInput;
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
