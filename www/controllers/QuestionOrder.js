controllers.QuestionOrder = {
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
                    activeGame = controllers.Map.activeGame,
                    questionView = views.QuestionOrder,
                    a1 = questionView.find("#a1").eq(0),
                    a2 = questionView.find("#a2").eq(0),
                    a3 = questionView.find("#a3").eq(0),
                    a4 = questionView.find("#a4").eq(0);
            
            
            // check if numbers are entered and order is valid
            if (!controller.isValid(a1, a2, a3, a4)) {
                return;
            }
            
            // build the answer got from the user in real order
            var answer = controller.getAnswer(a1, a2, a3, a4);
            
            // answer is correct
            if (answer == controllers.Map.activeGame.game.question.correctAnswer) {
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
        isValid: function(a1, a2, a3, a4) {
                var num1 = parseInt(a1.text().substring(0,1)),
                    num2 = parseInt(a2.text().substring(0,1)),
                    num3 = parseInt(a3.text().substring(0,1)),
                    num4 = parseInt(a4.text().substring(0,1));
            
            if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
                controllers.Common.showMessageBox("Niste označili sve brojeve.", "", "button no-button", true);
                return false;
            }
            
            if (num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4) {
                controllers.Common.showMessageBox("Označili ste dvaput isti broj. Ispravite svoj odgovor.", "", "button no-button", true);
                return false;
            }
            return true;
        },
        getAnswer: function(a1, a2, a3, a4) {
            var answers = new Array(4),
                    num1 = parseInt(a1.text().substring(0,1)) - 1,
                    num2 = parseInt(a2.text().substring(0,1)) - 1,
                    num3 = parseInt(a3.text().substring(0,1)) - 1,
                    num4 = parseInt(a4.text().substring(0,1)) - 1;
            
            answers[num1] = a1.text().substring(2).trim();
            answers[num2] = a2.text().substring(2).trim();
            answers[num3] = a3.text().substring(2).trim();
            answers[num4] = a4.text().substring(2).trim();
            
            return answers[0] + ',' + answers[1] + ',' + answers[2] + ',' + answers[3];
        },
        onMessageBoxConfirm: function() {
		var controller = controllers.QuestionOrder,
			messageBox = views.MessageBox;
                
		messageBox.hide();
		controller.onBack();
	},
        onAnswerSelect: function() {
                var selected = $(this),
                        text = selected.text();
                
                var num = parseInt(text.substring(0,1)) + 1;
                
                if (isNaN(num)) {
                    selected.html("1. " + text);
                    selected.addClass("selected");
                }
                else if (num === 5) {
                    selected.html(text.substring(2));
                    selected.removeClass("selected");
                } else {
                    selected.html(num + ". " + text.substring(2));
                }
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