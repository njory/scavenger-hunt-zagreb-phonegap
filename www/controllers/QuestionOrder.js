controllers.QuestionOrder = {
        lastAddedNumber: 0,
        createdSequence: null,
        selectedAnswers: [],
        init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
			view = views.QuestionOrder,
			navigationBar = views.NavigationBar,
			messageBox = views.MessageBox;

                view.on('touchstart', '.button', me.onAnswerSelect);
		navigationBar.on('touchstart', '.left-button.back-from-order', me.onBack);
		navigationBar.on('touchstart', '.right-button.confirm-order', me.onConfirm);
		messageBox.on('touchstart', '.button.confirm-order', me.onMessageBoxConfirm);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"KARTA",
			"left-button back-from-map",
			"right-button info",
			"fa fa-chevron-left",
			"fa fa-info"
		);
        
                controllers.QuestionOrder.lastAddedNumber = 0;
                controllers.QuestionOrder.createdSequence = null;

                controllers.QuestionOrder.stopTimer();
		controllers.Map.refreshCircles();
		views.Map.show(200);
		views.QuestionOrder.hide(200);
	},
        onConfirm: function() {
            var controller = controllers.QuestionOrder,
                    gameIndex = controllers.Map.activeGameIndex,
                    activeGame = controllers.Map.activeGame;
            
            // not everything is entered
            if (controller.lastAddedNumber !== 4) {
                controllers.Common.showMessageBox("Niste označili sve brojeve", "", "button no-button", true);
                return;
            }
            
            // answer is correct
            if (controller.createdSequence == controllers.Map.activeGame.game.question.correctAnswer) {
                    var me = controllers.QuestionOrder;
                    var points = 100 - 15 * activeGame.numberOfFails;
                    points = Math.floor(points / (1 + me.time/600));
                    if (points < 25) points = 25;
                    controllers.Common.showMessageBox("Odgovor je točan.\
                            Uspjeli ste iz " + (activeGame.numberOfFails + 1) +
                            ". pokušaja. Osvojili ste " + (points) + " bodova.", 
                            "Potvrdi", "button confirm-order", false);

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
                return;
            }
            
            models.Games.setGameByIndex(gameIndex, activeGame);
            models.Games.syncData();
        },
        onMessageBoxConfirm: function() {
		var controller = controllers.QuestionOrder,
			messageBox = views.MessageBox;
                
		messageBox.hide();
		controller.onBack();
	},
        onAnswerSelect: function() {
                var controller = controllers.QuestionOrder,
                        selected = $(this),
                        text = selected.text();
                
                // check that the user hasn't selected the same answer twice
                if (text.indexOf('1.') === 0 || text.indexOf('2.') === 0 
                        || text.indexOf('3.') === 0 || text.indexOf('4.') === 0) {
                    return;
                }
                
                if (controller.createdSequence === null) {
                    controller.createdSequence = text;
                } else {
                    controller.createdSequence += "," + text;
                }
                
                controller.lastAddedNumber++;
                selected.html(controller.lastAddedNumber + ". " + text);
                selected.addClass("selected");
        },
        clearAnswers: function() {
                var questionView = views.QuestionOrder,
                        a1 = questionView.find("#a1").eq(0),
                        a2 = questionView.find("#a2").eq(0),
                        a3 = questionView.find("#a3").eq(0),
                        a4 = questionView.find("#a4").eq(0),
                        activeGame = controllers.Map.activeGame;
                
                a1.html(activeGame.game.question.a1);
                a1.removeClass("selected");
                a2.html(activeGame.game.question.a2);
                a2.removeClass("selected");
                a3.html(activeGame.game.question.a3);
                a3.removeClass("selected");
                a4.html(activeGame.game.question.a4);
                a4.removeClass("selected");
        },
        time: 0,
        timer: null,
	startTimer: function() {
		this.time = models.Score.getCurrentTime();
                this.timer = setInterval(function () {
                    var me = controllers.QuestionOrder;
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