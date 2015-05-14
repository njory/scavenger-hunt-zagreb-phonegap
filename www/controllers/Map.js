controllers.Map = {
	activeGame: null,
	activeGameIndex: -1,
	circles: [],
	init: function() {
		var me = this;
		me.drawCircles();
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
			view = views.Map,
			messageBox = views.MessageBox;

		view.on('touchstart', '.circle.active', me.onActiveCircleTap);
		view.on('touchstart', '.circle.scanned', me.onScannedCircleTap);
		messageBox.on('touchstart', '.button.scan', me.onScanButtonTap);
		messageBox.on('touchstart', '.button.play-again', me.onPlayAgain);
	},
	getCirclesContainer: function() {
		return views.Map.find(".circles").eq(0);
	},
	drawCircles: function() {
		var me = this,
			circlesContainer = me.getCirclesContainer(),
			games = models.Games.getAllGames(),
			html = '',
			game;

		circlesContainer.empty();
		me.activeGame = null;
		me.activeGameIndex = -1;

		for(var i = 0; i < 7; i++) {
			game = games[i];
			html = me.generateCircleHtml(i, game);
			circlesContainer.append(html);

			if(game.status === "active" || game.status === "scanned") {
				me.activeGame = game;
				me.activeGameIndex = i;
			}
		}

		if(me.activeGame == null) {
			me.gameFinished();
		}

		var circles = circlesContainer.find(".circle"),
			doc = $(document),
			docWidth = doc.width(),
			docHeight = doc.height(),
			size = (docWidth - 20) * 0.24,
			vertical = (docHeight - 110) / 7,
			left = 0,
			top = 0;

		me.circles = circles;

		for(var i = 0; i < circles.length; i++) {
			var circle = circles.eq(i);
			circle.css({
				"height": size,
				"width": size,
				"top": top,
				"left": left
			});
			switch(i) {
				case 0:
					left += size + 5;
					top += 2;
					break;
				case 1:
					left -= 10;
					top += vertical + 10;
					break;
				case 2:
					left += 10;
					top += vertical + 10;
					break;
				case 3:
					left += size + 5;
					top += 4;
					break;
				case 4:
					left += 25;
					top += vertical + 10;
					break;
				case 5:
					left += size - 25;
					top += vertical + 10;
					break;
			}
		}
	},
	refreshCircles: function() {
		var me = this,
			games = models.Games.getAllGames(),
			circles = me.circles;

		me.activeGame = null;
		me.activeGameIndex = -1;

		for(var i = 0; i < circles.length; i++) {
			var circle = circles.eq(i),
				game = games[i];

			circle.removeClass();
			circle.addClass("circle " + game.status);

			if(game.status === "active" || game.status === "scanned") {
				me.activeGame = game;
				me.activeGameIndex = i;
			}
		}

		if(me.activeGame == null) {
			me.gameFinished();
		}
	},
	gameFinished: function() {
		controllers.Common.showMessageBox("Game finished", "Play again", "button play-again", false);
	},
	onPlayAgain: function() {
		controllers.Main.generateGames();
		controllers.Map.refreshCircles();
		views.MessageBox.hide(200);
	},
	generateCircleHtml: function(number, game) {
		return '<div class="circle ' + game.status + '" data-index="' + number + '">' +
					'<span>' + (number + 1) + '</span>' +
				'</div>';
	},
	onActiveCircleTap: function() {
		var index = $(this).attr('data-index'),
			games = models.Games,
			controller = controllers.Map;

		var game = games.getGameByIndex(index);

		controller.showGameScanMessageBox(game);
	},
	showGameScanMessageBox: function(game) {
		controllers.Common.showMessageBox(game.location.address, "Scan", "button scan", true);
	},
	onScannedCircleTap: function() {
		var controller = controllers.Map;
		controller.selectGame();
	},
	onScanButtonTap: function() {
		var me = controllers.Map,
			isProduction = controllers.Main.isProduction();

		if(isProduction) {
	        cordova.plugins.barcodeScanner.scan(
	            function(result) {
	                if(!result.cancelled)
	                    me.onScanSuccessful(result);
	            },
	            function(error) {
	                me.onScanError(error);
	            }
	        );
    	}
    	else {
    		me.onScanSuccessful({
    			text: me.activeGame.location.code
    		});
    	}
	},
	onScanSuccessful: function(result) {
		var controller = controllers.Map,
			activeGame = controller.activeGame,
			gameNumber = controller.activeGameIndex;

		if(result.text == activeGame.location.code) {
			activeGame.status = "scanned";
			models.Games.setGameByIndex(gameNumber, activeGame);
			models.Games.syncData();

			controller.refreshCircles();

			controller.selectGame();
		}
		else {
			controllers.Common.showMessageBox("Skenirali ste krivi kod.", "Scan", "button no-button", true);
		}
	},
	onScanError: function(error) {
		controllers.Common.showMessageBox("Pogreška prilikom skeniranja.", "Scan", "button no-button", true);
	},
	selectGame: function() {
		var controller = controllers.Map,
			activeGame = controller.activeGame,
			gameNumber = controller.activeGameIndex,
			gameType = activeGame.game.questionType;

		switch(gameType) {
			case "A":
				controller.showQuestionAbcd(gameNumber + 1, activeGame);
				break;
			case "B":
				controller.showQuestionInput(gameNumber + 1, activeGame);
				break;
		}
	},
	showQuestionAbcd: function(gameNumber, activeGame) {
		var questionView = views.QuestionAbcd,
			a1 = questionView.find(".a.one .text").eq(0),
			a2 = questionView.find(".a.two .text").eq(0),
			a3 = questionView.find(".a.three .text").eq(0),
			a4 = questionView.find(".a.four .text").eq(0),
			question = questionView.find(".question .text").eq(0),
			correct = activeGame.game.question.correctAnswer;

			question.html(activeGame.game.question.text);

			a1.html(activeGame.game.question.a1);
			a1.attr("data-correct", (correct == "a1") ? "Y" : "N");

			a2.html(activeGame.game.question.a2);
			a2.attr("data-correct", (correct == "a2") ? "Y" : "N");

			a3.html(activeGame.game.question.a3);
			a3.attr("data-correct", (correct == "a3") ? "Y" : "N");

			a4.html(activeGame.game.question.a4);
			a4.attr("data-correct", (correct == "a4") ? "Y" : "N");

		controllers.Common.switchNavigationBar(
			"GAME " + gameNumber,
			"left-button back-from-abcd",
			"right-button confirm-abcd",
			"fa fa-chevron-left",
			"fa fa-check",
                        "show hint"
		);

		controllers.QuestionAbcd.clearAnswers();
		views.Map.hide(200);
		views.MessageBox.hide(200);
		views.QuestionAbcd.show(200);
	},
	
	showQuestionInput: function(gameNumber, activeGame){
		var questionView = views.QuestionInput,
		    question = questionView.find(".question .text").eq(0),
			correct = activeGame.game.question.correctAnswer;
			
		question.html(activeGame.game.question.text);
		
		controllers.Common.switchNavigationBar(
			"GAME " + gameNumber,
			"left-button back-from-input",
			"right-button confirm-input",
			"fa fa-chevron-left",
			"fa fa-check"
		);
		
		views.Map.hide(200);
		views.MessageBox.hide(200);
		views.QuestionInput.show(200);
	}
};
